import React, { useEffect, useState } from 'react';

function Home() {
  const [movies, setMovies] = useState([]);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Popular Movies</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map(movie => (
          <div key={movie.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
              <p className="text-gray-600 text-sm">
                {movie.overview.length > 100 ? movie.overview.slice(0, 100) + '...' : movie.overview}
              </p>
              <div className="mt-4 flex justify-between text-sm text-gray-500">
                <span>⭐ {movie.vote_average}</span>
                <span>{movie.release_date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
