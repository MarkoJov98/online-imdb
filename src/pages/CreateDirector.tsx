import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { performCreateDirector } from "../store/directors/slice";
import "../styles/form.css";


const CreateDirector = () => {
    const dispatch = useDispatch();
    const [ directorForm, setDirectorForm ] = useState<DirectorData>({
        name: "",
        surname: "",
        date_of_birth:"",
        image: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name , value } = e.target;
        setDirectorForm((previousValue) => ({...previousValue, [name] : value}))
    };

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(directorForm);
        
        dispatch(performCreateDirector(directorForm));
    };

    return (
        <div>
            <h3>Stranica kreiranja rezisera</h3>
            <form onSubmit={handleSubmit} className="form" >
                <label>
                    Ime: 
                    <input type="text" name="name" value={directorForm.name} onChange={handleChange} />
                </label>
                <label>
                    Prezime:
                    <input type="text" name="surname" value={directorForm.surname} onChange={handleChange}/> 
                </label>
                <label>
                    Datum rodjenja:
                    <input type="date" name="date_of_birth" value={directorForm.date_of_birth} onChange={handleChange}/> 
                </label>
                <label>
                    Slika:
                    <input type="url" name="image" value={directorForm.image} onChange={handleChange}/> 
                </label>
                <button type="submit" className="submit-button">DOdaj rezisera</button>
            </form>
          
        </div>
    );
};


export default CreateDirector;
