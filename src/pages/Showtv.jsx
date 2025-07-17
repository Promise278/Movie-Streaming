import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

function Showtv() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const navigate = useNavigate();
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setShow(data));
  }, [id]);

  if (!show) return <p className="p-6">Loading TV show details...</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto mb-4">
        <button onClick={() => navigate('/tvshow')} className="flex items-center gap-2 shadow-md rounded-md bg-white px-4 py-2 text-gray-800 hover:bg-gray-100">
          <IoArrowBack className="text-lg" />
        </button>
      </div>
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/w780${show.backdrop_path}`}
          alt={show.name}
          className="w-full h-96 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{show.name}</h1>
          <p className="text-gray-700 mb-4">{show.overview}</p>
          <p className="text-gray-500">⭐ {show.vote_average} | First Air Date: {show.first_air_date}</p>
        </div>
      </div>
    </div>
  );
}

export default Showtv;
