import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Clock, Star, Tag } from 'lucide-react';

interface MovieModalProps {
    movie: Movie;
    onClose: () => void;
}

const MovieModal = ({ movie, onClose }: MovieModalProps) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        if (movie) {
            setIsVisible(true);
        } else {
            setTimeout(() => setIsVisible(false), 300);
        }
    }, [movie]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center transition-opacity duration-300 ease-in-out">
            <div className={`bg-white rounded-lg p-6 relative max-w-3xl w-full mx-4 transform transition-transform duration-300 ease-in-out ${movie ? 'scale-100' : 'scale-95'}`}>
                <button onClick={onClose} className="absolute top-5 right-5 rounded-full p-1 bg-white text-gray-700 hover:text-gray-900">
                    <X />
                </button>
                
                <div className="flex flex-col md:flex-row">
                    <img src={movie.poster} alt={movie.title} className="w-full h-[150px] object-cover md:h-auto object-top md:w-1/3 rounded-lg" />
                    
                    <div className="md:ml-6 mt-4 md:mt-0">
                        <h2 className="text-red-500 text-2xl font-bold">{movie.title}</h2>
                        
                        <div className="flex items-center mt-2 text-gray-700">
                            <Star className="w-5 h-5 mr-1" />
                            <p>{movie.ageRating}</p>
                        </div>
                        <div className="flex items-center mt-2 text-gray-700">
                            <Clock className="w-5 h-5 mr-1" />
                            <p>{movie.duration}</p>
                        </div>
                        <div className="flex items-center mt-2 text-gray-700">
                            <Tag className="w-5 h-5 mr-1" />
                            <p>{movie.genre}</p>
                        </div>
                        <p className="mt-4">{movie.synopsis}</p>

                        <div className="mt-4">
                            <h3 className="font-semibold text-lg">Actors</h3>
                            <div className="mt-2 max-h-48 overflow-y-auto grid grid-cols-2 gap-4 scrollbar-thin scrollbar-thumb-red-400 scrollbar-track-gray-200 scrollbar-thumb-rounded-full">
                                {movie.actors.map((actor, index) => (
                                    <div key={index} className="p-4 rounded-lg shadow">
                                        <p className="text-gray-800 text-sm">{actor}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieModal;
