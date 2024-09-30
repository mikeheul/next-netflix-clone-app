import { X, Clock, Star, Tag } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Movie {
  title: string;
  poster: string;
  ageRating: string;
  duration: string;
  genre: string;
  synopsis: string;
  actors: string[];
}

interface MovieModalProps {
  movie: Movie | null;
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

  if (!movie || !isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-80 z-50 max-h-screen flex flex-col items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl overflow-y-auto scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-700 max-w-4xl w-full relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 text-white hover:text-red-500 transition-colors duration-200"
            >
              <X size={24} />
            </button>
            
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 h-[150px] md:h-full relative">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>
              
              <div className="p-8 md:w-1/2 text-white">
                <h2 className="text-3xl font-bold mb-4 text-red-500">{movie.title}</h2>
                
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 mr-1 text-yellow-500" />
                    <p>{movie.ageRating}</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-1 text-blue-400" />
                    <p>{movie.duration}</p>
                  </div>
                  <div className="flex items-center">
                    <Tag className="w-5 h-5 mr-1 text-green-400" />
                    <p>{movie.genre}</p>
                  </div>
                </div>
                
                <p className="mb-6 text-gray-300">{movie.synopsis}</p>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Actors</h3>
                  <div className="grid grid-cols-2 gap-3 max-h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-700">
                    {movie.actors.map((actor, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-700 rounded-lg p-3 text-sm"
                        initial={{ opacity: 0, y: 20 }} // Start with hidden and slightly lower position
                        animate={{ opacity: 1, y: 0 }} // Move to visible and original position
                        transition={{ delay: index * 0.1, duration: 0.3 }} // Staggered animation effect for each actor
                      >
                        {actor}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MovieModal;