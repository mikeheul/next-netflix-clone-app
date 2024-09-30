"use client";
import React from 'react';
import { Play, ThumbsUp, Clock } from 'lucide-react';

interface MovieCardProps {
    movie: Movie;
    onClick: () => void; // Accept the onClick prop
}

const MovieCard = ({ movie, onClick }: MovieCardProps) => {
    return (
        <div
            className={`group relative w-full text-center transition-transform duration-300 ease-in-out hover:scale-[102%] hover:z-10`}
            onClick={onClick} // Attach the click handler to the outer div
        >
            {/* Movie Poster */}
            <div className="relative h-72">
                <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-full object-cover object-top rounded-lg shadow-lg"
                />

                {/* HD Badge */}
                {movie.isHD && (
                    <div className="absolute top-3 left-3 bg-[#ff4747] text-white text-xs font-bold px-2 py-1 rounded-md">
                        HD
                    </div>
                )}

                {/* Movie Title Overlaid on Poster */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 h-full flex justify-center items-center rounded-lg">
                    <h3 className="text-white font-semibold text-2xl truncate p-3">
                        {movie.title}
                    </h3>
                </div>

                {/* Hover Details */}
                <div className="absolute inset-0 p-4 opacity-0 group-hover:opacity-100 bg-black bg-opacity-70 rounded-lg flex flex-col justify-between text-white transition-opacity duration-300 ease-in-out">
                    {/* Play Button Centered */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <button className="flex items-center justify-center w-14 h-14 bg-transparent border-2 border-white rounded-full text-white hover:bg-white/70 hover:text-black transition-all duration-300">
                            <Play className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Movie Information */}
                    <div className="text-left mt-auto">
                        {/* Age Rating and Duration */}
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-green-500 font-bold">{movie.ageRating}</span>
                            <span className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{movie.duration}</span>
                            </span>
                        </div>
                        {/* Genre */}
                        <div className="mb-2">
                            <span className="text-gray-300">{movie.genre}</span>
                        </div>
                        {/* Like Button */}
                        <div className="flex items-center space-x-1 cursor-pointer hover:text-red-500 transition">
                            <ThumbsUp className="w-5 h-5" />
                            <span>Like</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
