import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selecetPaginatedDirectors, selectDirectors } from "../store/directors/selectors";
import { performFetchDirectors, performPaginateDirectors } from "../store/directors/slice";
import { Link } from "react-router-dom";
import "../styles/directors.css";


const Directors = () => {
    const dispatch = useDispatch();
    const { data, metadata } = useSelector(selecetPaginatedDirectors);
    
    
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    
    useEffect(() => {
        if(metadata.total > 0 ) {
            setTotalPages(Math.ceil(metadata.total / metadata.take));
        }
    }, [metadata]);
    
    useEffect(() => {
      dispatch(performPaginateDirectors({ take: 3, skip: 0 }));
    }, [dispatch]);
    
    const handlePaginationClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        const newSkip = (pageNumber - 1) * metadata.take;
        dispatch(performPaginateDirectors({ take: metadata.take, skip: newSkip }));
    };

    return (
        <><div className="directors">
            <h2>Reziseri</h2>
            <Link to="/directors/create">Kreiraj direktora</Link>
            {data && data.length > 0 ? (
                <ul className="directors-wrapper">
                    {data.map((director: Director) => (
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
        </div><div className="pagination">
                <button
                    onClick={() => handlePaginationClick(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Prethodna
                </button>
                <span>
                    Stranica {currentPage} od {totalPages}
                </span>
                <button
                    onClick={() => handlePaginationClick(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Sledeća
                </button>
            </div></>
    )
};

export default Directors;