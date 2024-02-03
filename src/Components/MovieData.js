import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function MovieData() {
  const { movieId } = useParams();
  const [MovieData, setMovieData] = useState(null);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=460e898ed9502b75a0c383d8c9d0eafd`)
      .then((res) => {
        setMovieData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [movieId]);
  if (!MovieData) {
    return <div>
    </div>;
  }
  return (
    <>
    <div className="container mt-5">
      <div className="card border-0">
      <div className="row g-0">
          <div className="col-md-4">
        <img
          src={`https://image.tmdb.org/t/p/w500/${MovieData.poster_path}`}
          alt={MovieData.title}
          className="img-fluid"
          style={{width: "100%", maxHeight: "auto"}}
        />
      </div>
      <div className="col-md-8">
      <div className="card-body text-center">
        <h1 className="card-text text-center mb-5 mt-5"
         style={{
            backgroundImage: 'linear-gradient(45deg, #3498db, #2ecc71)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontSize: '30px',
            fontWeight: 'bold',}}> 
            {MovieData.title} </h1>
        <p className="text-start col-12" style={{fontWeight: "bold"}}>Overview</p>
        <p className="text-start col-12">{MovieData.overview}</p>
        <p className="card-text" >Release Date: {MovieData.release_date}</p>
        <p className="card-text">Vote Average: {MovieData.vote_average}</p>
        <p className="card-text">Vote Count: {MovieData.vote_count}</p>
        <p className="card-text">Runtime: {MovieData.runtime} minutes</p>
        <p className="card-text">Popularity: {MovieData.popularity}</p>
      </div>
      </div>
      </div>
    </div>
    </div>
  </>
  );
}
export default MovieData;