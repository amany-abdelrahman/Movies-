import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavorites } from '../Store/Action'
function FavPage() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const handleRemoveFromFavorites = (movieId) => {
    dispatch(removeFromFavorites(movieId));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5" 
        style={{ backgroundImage: "linear-gradient(45deg, #3498db, #2ecc71)", 
        WebkitBackgroundClip: "text", color: "transparent" }}>
        Favorites 
      </h1>
      {favorites.length === 0 ? (
        <p className="text-center">You don't have any movies in favorites.</p>
      ) : (
        <div className="row g-4">
          {favorites.map((movie) => (
            <div key={movie.id} className="col">
              <div className="card h-100 border-0">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className="card-img-top"
                  style={{ objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title" 
                  style={{ backgroundImage: "linear-gradient(45deg, #3498db, #2ecc71)", 
                  WebkitBackgroundClip: "text", color: "transparent" }}>
                    {movie.title}</h5>
                  <button
                    className="btn btn-primary col-12" style={{
                      backgroundImage: 'linear-gradient(45deg, #3498db, #2ecc71)',
                      color: '#fff',
                      border: 'none',}}
                    onClick={() => handleRemoveFromFavorites(movie.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default FavPage;
