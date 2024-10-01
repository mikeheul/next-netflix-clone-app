"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MovieCard from './MovieCard';
import ReactPaginate from 'react-paginate';

interface CatalogProps {
    movies: Movie[];
    onMovieClick: (movie: Movie) => void;
}

const Catalog = ({ movies, onMovieClick }: CatalogProps) => {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const moviesPerPage: number = 6;

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setCurrentPage(0);
    };

    // Filter movies based on search query
    const filteredMovies: Movie[] = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Determine the movies to display on the current page
    const offset: number = currentPage * moviesPerPage;
    const currentMovies: Movie[] = filteredMovies.slice(offset, offset + moviesPerPage);

    // Total pages based on movie count
    const pageCount: number = Math.ceil(filteredMovies.length / moviesPerPage);

    // Handle page click
    const handlePageClick = (data: { selected: number }) => {
        setCurrentPage(data.selected);
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='min-h-screen bg-gray-800 p-8'
        >
            {/* Search Bar */}
            <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
            >
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search for a movie..."
                    className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
                />
            </motion.div>
            
            <ReactPaginate
                previousLabel={'←'}
                nextLabel={'→'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={'flex justify-center my-5 space-x-2'}
                activeClassName={'text-white bg-red-500'}
                previousClassName={'px-3 py-1 bg-gray-600 text-white rounded-md cursor-pointer'}
                nextClassName={'px-3 py-1 bg-gray-600 text-white rounded-md cursor-pointer'}
                pageClassName={'px-3 py-1 bg-gray-700 text-white rounded-md cursor-pointer'}
                breakClassName={'px-3 py-1 text-gray-400'}
            />
    
            <motion.div 
            className='grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
            >
                <AnimatePresence>
                    {currentMovies.map((movie) => (
                    <motion.div
                        key={movie.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                    >
                        <MovieCard movie={movie} onClick={() => onMovieClick(movie)} />
                    </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
    
            {/* Pagination Controls */}
            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
            className="mt-8 flex justify-center"
            >
            </motion.div>
        </motion.div>
    );
};

export default Catalog;