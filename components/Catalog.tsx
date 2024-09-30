"use client";
import React, { useState } from 'react';
import MovieCard from './MovieCard';
import ReactPaginate from 'react-paginate';

interface CatalogProps {
    movies: Movie[];
    onMovieClick: (movie: Movie) => void;
}

const Catalog = ({ movies, onMovieClick }: CatalogProps) => {

    const [currentPage, setCurrentPage] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');

    const moviesPerPage = 6;

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setCurrentPage(0);
    };

    // Filter movies based on search query
    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Determine the movies to display on the current page
    const offset = currentPage * moviesPerPage;
    const currentMovies = filteredMovies.slice(offset, offset + moviesPerPage);

    // Total pages based on movie count
    const pageCount = Math.ceil(movies.length / moviesPerPage);

    // Handle page click
    const handlePageClick = (data: { selected: number }) => {
        setCurrentPage(data.selected);
    };

    return (
        <div className='min-h-screen bg-gray-800 p-8'>

            {/* Search Bar */}
            <div className="mb-6">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search for a movie..."
                    className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none "
                />
            </div>

            <div className='grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                {currentMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} onClick={() => onMovieClick(movie)} />
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="mt-8 flex justify-center">
                <ReactPaginate
                    previousLabel={'←'}
                    nextLabel={'→'}
                    breakLabel={'...'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={'flex space-x-2'}
                    activeClassName={'text-white bg-red-500'}
                    previousClassName={'px-3 py-1 bg-gray-600 text-white rounded-md cursor-pointer'}
                    nextClassName={'px-3 py-1 bg-gray-600 text-white rounded-md cursor-pointer'}
                    pageClassName={'px-3 py-1 bg-gray-700 text-white rounded-md cursor-pointer'}
                    breakClassName={'px-3 py-1 text-gray-400'}
                />
            </div>
        </div>
    );
};

export default Catalog;