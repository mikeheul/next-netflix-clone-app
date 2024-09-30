"use client";

import Catalog from "@/components/Catalog";
import Header from "@/components/Header";
import MovieModal from "@/components/MovieModal";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('/api/movie');
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        const data: Movie[] = await response.json();
        setMovies(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie); // Set the selected movie when clicked
  };

  const handleCloseModal = () => {
    setSelectedMovie(null); // Clear the selected movie when closing
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="">
      <Header />
      <Catalog movies={movies} onMovieClick={handleMovieClick} />
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </div>
  );
}