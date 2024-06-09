import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { performFetchMovies } from "../store/movies/slice";
import { selectMovies  } from "../store/movies/selectors";
import { Link } from "react-router-dom";
import "../styles/movies.css"


const Movies = () => {
  const dispatch = useDispatch();
  const movieList = useSelector(selectMovies);

  // console.log(movieList);

  useEffect(() => {
    dispatch(performFetchMovies());
  }, [dispatch]);

  return (
    <>
    <div className="movies">
      <h2>Stranica filmova</h2>
      <Link to="/movies/create">Kreiraj novi film</Link>
      {movieList.length > 0 ? (
        <ul className="movies-wrapper">
          {movieList.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <p>Naziv filma: {movie.title}</p>
              </Link>
              <p>Ime reditelja: {movie.director.name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Trenutno nema dostupnih filmova</p>
        )}
    </div>
    </>
  );
};

export default Movies;
