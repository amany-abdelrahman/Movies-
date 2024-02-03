import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorites, removeFromFavorites } from '../Store/Action'
import { useLanguage } from "../Context/LangContext";

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const history = useHistory();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const { language } = useLanguage();
  const apiKey = "460e898ed9502b75a0c383d8c9d0eafd&page";

  useEffect(() => {
    let url;

    if (search) {
      // Fetch movies when searching
      url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}&page=${page}`;
    } else {
      // Fetch movies based on language, currentList, or page changes
      url = `https://api.themoviedb.org/3/movie/popular?language=${language}&api_key=${apiKey}&page=${page}`;
    }

    axios
      .get(url)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [language, search, page, apiKey]);

  const handleMovie = (movieId) => {
    history.push(`/movie/${movieId}`);
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  const isFavorite = (movieId) => favorites.some((favMovie) => favMovie.id === movieId);

  const handleFavorite = (movie) => {
    if (isFavorite(movie.id)) {
      dispatch(removeFromFavorites(movie.id));
    } else {
      dispatch(addFavorites(movie));
    }
  };
  return (
    <>
      <h1
        className="text-center mb-5 mt-5"
        style={{
          backgroundImage: "linear-gradient(45deg, #3498db, #2ecc71)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        {search === "" ? "Popular Movies" : `Search Results for "${search}"`}
      </h1>
      <div className="container text-center">
        <form onSubmit={handleSearch} className="mb-3">
          <input
            type="text"
            placeholder="Search for movies"
            value={search}
            onChange={handleInput}
            style={{
              padding: "8px",
              marginRight: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              width: "400px",
              fontSize: "16px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "8px 16px",
              borderRadius: "4px",
              background: "linear-gradient(45deg, #3498db, #2ecc71)",
              color: "#fff",
              border: "none",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </form>
        <div className="row">
          {movies.map((movie) => (
            <div
              className="card col-3 border-0"
              key={movie.id}
              style={{ marginBottom: "1rem" }}
              onClick={() => handleMovie(movie.id)}
            >
              <div className="movie-list">
                <img
                  className="card-img-top img-fluid"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="card-body">
                  <Link
                    to={`/movie/${movie.id}`}
                    className="text-decoration-none"
                  >
                    <h5
                    className="card-title text-center"
                    style={{
                      backgroundImage: "linear-gradient(45deg, #3498db, #2ecc71)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                      fontSize: "20px",
                      fontWeight: "bold",
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',}}>
                        <span>{movie.title}</span>
                        <span
                        onClick={() => handleFavorite(movie)}
                        style={{
                          cursor: 'pointer',
                          marginLeft: '10px',
                          fontSize: '24px',
                          color: isFavorite(movie.id) ? '#ffcc00' : 'transparent',
                          padding: '2px',}}>
                            ⭐
                        </span>
                      </h5>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="pagination"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {page > 1 && (
            <button
              onClick={() => handlePageChange(page - 1)}
              style={{
                padding: "8px 16px",
                borderRadius: "4px",
                background: "linear-gradient(45deg, #3498db, #2ecc71)",
                color: "#fff",
                border: "none",
                fontSize: "16px",
                cursor: "pointer",
                marginRight: "8px",
              }}
            >
              Previous
            </button>
          )}
          <span style={{ marginTop: "10px", fontWeight: "bold" }}>{page}</span>
          <button
            onClick={() => handlePageChange(page + 1)}
            style={{
              padding: "8px 16px",
              borderRadius: "4px",
              background: "linear-gradient(45deg, #3498db, #2ecc71)",
              color: "#fff",
              border: "none",
              fontSize: "16px",
              marginLeft: "8px",
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
