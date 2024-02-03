import React from 'react';
import { useSelector } from 'react-redux';
import Movie from './Movie';

function Favorites() {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5" style={{ color: 'orange', border: '2px solid orange', padding: '10px', borderRadius: '10px' }}>
        Favorite Movies
      </h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {favorites.map((movie) => (
          <div key={movie.id} className="col">
            <Movie movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;