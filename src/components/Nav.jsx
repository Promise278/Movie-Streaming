import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

function Nav() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <Link to="/" className="md:text-2xl text-md font-bold text-gray-800 hover:text-indigo-600 transition duration-300">
        🎬 MovieMate
      </Link>

      <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-gray-700 hover:text-indigo-600 transition font-medium">Home</Link>
        <Link to="/trending" className="text-gray-700 hover:text-indigo-600 transition font-medium">Trending</Link>
        <Link to="/tvshow" className="text-gray-700 hover:text-indigo-600 transition font-medium">TV Shows</Link>
        <Link to="/about" className="text-gray-700 hover:text-indigo-600 transition font-medium">About</Link>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Search movies..."
          className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm text-gray-700"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
      </div>
    </nav>
  );
}

export default Nav;
