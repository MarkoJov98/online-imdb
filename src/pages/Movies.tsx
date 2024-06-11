import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  performPaginateMovies } from "../store/movies/slice";
import { selectPaginatedMovies  } from "../store/movies/selectors";
import { Link } from "react-router-dom";
import "../styles/movies.css"


const Movies = () => {
  const dispatch = useDispatch();
  const { data, metadata } = useSelector(selectPaginatedMovies);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (metadata.total > 0) {
      setTotalPages(Math.ceil(metadata.total / metadata.take));
    }
  }, [metadata]);

  useEffect(() => {
    dispatch(performPaginateMovies({ take: 5, skip: 0 }));
  }, [dispatch]);

  const handlePaginationClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const newSkip = (pageNumber - 1) * metadata.take;
    dispatch(performPaginateMovies({ take: metadata.take, skip: newSkip }));
  };

  return (
    <>
    <div className="movies">
      <h2>Stranica filmova</h2>
      <Link to="/movies/create">Kreiraj novi film</Link>
      {data.length > 0 ? (
        <ul className="movies-wrapper">
          {data.map((movie: Movie) => (
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
    <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePaginationClick(currentPage - 1)}
        >
          &lt; Prethodna
        </button>
        <span>
          Stranica {currentPage} od {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePaginationClick(currentPage + 1)}
        >
          Sledeća &gt;
        </button>
      </div>
    </>
  );
};

export default Movies;
