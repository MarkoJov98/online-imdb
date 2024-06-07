import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectSingleDirector } from "../store/directors/selectors";
import { performFetchSingleMovie } from "../store/movies/slice";
import { Link } from "react-router-dom";


const SingleDirectorPage = () => {
    const {directorId} = useParams();
    const dispatch = useDispatch();
    const director = useSelector(selectSingleDirector);

    useEffect(() => {
        dispatch(performFetchSingleMovie(Number(directorId)))
    }, [dispatch, directorId])

    return (
        <div className="single-director">
            <h3>Informacije o reziseru</h3>
            <p>Ime: {director.name}</p>
            <p>Prezime: {director.surname}</p>
            <p>Datum Rodjenja: {new Date(director.date_of_birth).toLocaleDateString()}</p>
            <p>Filmovi:  {director.movies?.map((movie) => movie.title).join(", ")}</p>
            <img src={director.image} alt="image director" />
            <div>
            <Link to="/directors"> ⬅️Povratak na rezisere</Link>
            </div>
            

        </div>
    );
}

export default SingleDirectorPage;