import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectSingleMovie } from "../store/movies/selectors";
import { performFetchSingleMovie } from "../store/movies/slice";
import "../styles/singleDirector.css";


const SingleMoviePage = () => {
    const { movieId } = useParams();
    const dispatch = useDispatch();
    const movie = useSelector(selectSingleMovie);

    useEffect(() => {
        dispatch(performFetchSingleMovie(Number(movieId)))
    }, [dispatch, movieId]);


    return (
        <div>
            <h3>Naslov filma: {movie.title}</h3>
            <p>Datum izlaska: {new Date(movie.release_date).toLocaleDateString()}</p>
            <p>Trajanje filma: {movie?.duration}</p>
            <p>IMDB ocena: {movie?.user_score}</p>
            <a href={movie.trailer} target="_blank" rel="noreferrer">Pogledaj trailer</a>
            <Link to={movie.director? `/directors/${movie.director.id}` : "/" }><p>Reditelj: {movie.director?.name} {movie.director?.surname ? movie.director.surname : ''}</p> </Link>
            <p>Kreator filma: {movie.creator?.name} {movie.creator?.surname ? movie.creator.surname : ""}</p>
            <p>Zanr: {movie.genres?.map((genr) => (
                <span key={genr.id}> {genr.name}</span>
            ))}</p>
            <img src={movie?.image} alt="movie image" />
            <p>Opis flma: {movie?.description}</p>
            
        </div>
    );
}

export default SingleMoviePage;