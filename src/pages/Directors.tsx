import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDirectors } from "../store/directors/selectors";
import { performFetchDirectors } from "../store/directors/slice";
import { Link } from "react-router-dom";
import "../styles/directors.css";


const Directors = () => {
    const dispatch = useDispatch();
    const directorsList = useSelector(selectDirectors);
    console.log(directorsList);
    

    useEffect(() => {
        dispatch(performFetchDirectors())
    }, [dispatch]);

    return (
        <div className="directors">
            <h2>Reziseri</h2>
            {directorsList.length > 0 ? (
                <ul className="directors-wrapper">
                    {directorsList.map((director: Director) => (
                        <li key={director.id}>
                        <Link to={`/directors/${director.id}`}>
                            <p>Ime reditelja: {director.name}</p>
                            <p>Prezime reditelja: {director.surname}</p>
                            <p>Datum rodjenja: {new Date(director.date_of_birth).toLocaleDateString()}</p>
                            <img src={director.image} alt="slika reditelja" />
                        </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Trenutno nema dostupnih reditelja</p>
            )}
        </div>
    )
};

export default Directors;