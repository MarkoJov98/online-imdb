import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { selectSingleMovie } from "../store/movies/selectors";
import { performDeleteMovie, performFetchSingleMovie } from "../store/movies/slice";
import "../styles/singleDirector.css";
import { selectComments } from "../store/comments/selectors";
import { performFetchComments } from "../store/comments/slice";
import Comments from "../components/Comments";
import { selectAuthUser } from "../store/auth/selectors";
import { performGetUserProfile } from "../store/auth/slice";


const SingleMoviePage = () => {
    const { movieId } = useParams();
    const dispatch = useDispatch();
    const movie = useSelector(selectSingleMovie);
    const comments = useSelector(selectComments);
    const userData = useSelector(selectAuthUser);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(performFetchSingleMovie(Number(movieId)))
        dispatch(performFetchComments(Number(movieId)))
        if(userData) {
            dispatch(performGetUserProfile(userData))
            // console.log(userData)
        }
    }, [dispatch, movieId,]);
    const isCurrentUserCreator = Number(userData.id) === movie.creator_id;

    const handleDelete = () => {
        const confirmDelete = window.confirm("Da li ste sigurni da zelite da obrisete film?");
        if(confirmDelete) {
            dispatch(performDeleteMovie(Number(movieId)))
            navigate("/movies");
        }
    }

    return (
        <div className="single-movie">
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
            <img src={movie?.image} alt="movie" />
            <p>Opis flma: {movie?.description}</p>
            {isCurrentUserCreator && (
                <button onClick={handleDelete}>Obrisi film</button>
            )}
            {isCurrentUserCreator && (
                 <Link to={`/edit-movie/${movie.id}`}>
                 <button>Uredi film</button>
                 </Link>
            )}
            <Comments comments={comments} movie_id={Number(movieId) } userId={Number(userData.id)}/>
        </div>
    );
}

export default SingleMoviePage;