import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectSingleDirector } from "../store/directors/selectors";
import { Link } from "react-router-dom";
import { performDeleteDirector, performFetchSingleDirector } from "../store/directors/slice";


const SingleDirectorPage = () => {
    const {directorId} = useParams();
    const dispatch = useDispatch();
    const director = useSelector(selectSingleDirector);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(performFetchSingleDirector(Number(directorId)))
    }, [dispatch, directorId])

    const handleDelete = () => {
        const confirmDelete = window.confirm("Da li ste sigurni da zelite da obrisete rezisera");
        if(confirmDelete) {
            dispatch(performDeleteDirector(Number(directorId)))
            navigate("/directors")
        }
    }

    return (
        <div className="single-director">
            <h3>Informacije o reziseru</h3>
            <p>Ime: {director.name}</p>
            <p>Prezime: {director.surname}</p>
            <p>Datum Rodjenja: {new Date(director.date_of_birth).toLocaleDateString()}</p>
            <p>Filmovi:  {director.movies?.map((movie) => movie.title).join(", ")}</p>
            <img src={director.image} alt="director" />
            <div>
            <Link to="/directors"> ⬅️Povratak na rezisere</Link>
            </div>
            <button onClick={handleDelete}>Obrisi rezisera</button>
        </div>
    );
}

export default SingleDirectorPage;