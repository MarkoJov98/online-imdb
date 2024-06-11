import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MultiSelect, Option } from "react-multi-select-component";
import { selectGenres, selectSingleMovie } from "../store/movies/selectors";
import { performCreateMovie, performEditMovie, performFetchGenres, performFetchSingleMovie } from "../store/movies/slice";
import { selectDirectors } from "../store/directors/selectors";
import { performFetchDirectors } from "../store/directors/slice";
import { useNavigate, useParams } from "react-router-dom";

const EditMoviePage = () => {
    const dispatch = useDispatch();
    const genres = useSelector(selectGenres);
    const directors = useSelector(selectDirectors);
    const navigate = useNavigate();
    const { movieId } = useParams();
    const movie = useSelector(selectSingleMovie);
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toISOString().split('T')[0];  // Converts to "YYYY-MM-DD" format
      };

    const [ formMovie, setFormMovie ] = useState<MovieData>({
        title: movie.title? movie.title : '',
        release_date: movie?.release_date ? formatDate(movie.release_date) : '',
        user_score: movie.user_score,
        description: movie.description,
        image: movie.image,
        trailer: movie.trailer,
        duration: movie.duration,
        genres: movie?.genres ? movie?.genres.map((genre: Genre) => genre.id): [],
        director: movie?.director?.id ? movie.director.id : 0,
    });

    useEffect(() => {
        dispatch(performFetchGenres());
        dispatch(performFetchDirectors());
        // dispatch(performFetchSingleMovie(Number(movieId)))
    },[])
    
   

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
    
        if (name === 'user_score' || name === 'director') {
          setFormMovie((previousValue) => ({ ...previousValue, [name]: Number(value) }));
        } else {
          setFormMovie((previousValue) => ({ ...previousValue, [name]: value }));
        }
      };
   

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formMovie);
        
        
        console.log("Form submitted!");
        dispatch(performEditMovie({movieId: movie.id, movieData: formMovie}));
        navigate("/movies");
    };


    const handleMultiSelectChange = (selectedOptions: Option[]) => {
        setFormMovie((prevData) => ({
            ...prevData,
            genres: selectedOptions.map(option => Number(option.value)),
        }));
    };

    const genreOptions: Option[] = genres.map((genr: Genre) => ({
        value: genr.id.toString(),
        label: genr.name
    }));
    return (
        <div>
            <h3>Uredjivanje filma</h3>
            <form onSubmit={handleSubmit} className="form">
                <label>
                    Naslov:
                    <input  type="text" name="title" value={formMovie.title} onChange={handleChange}/>
                </label>
                <label>
                    Datum izlaska:
                    <input type="date" name="release_date" value={formMovie.release_date} onChange={handleChange}/>
                </label>
                <label>
                    IMDB ocena:
                    <input type="number" name="user_score" value={formMovie.user_score} onChange={handleChange}/>
                </label>
                <label>
                    Opis:
                    <input type="text" name="description" value={formMovie.description} onChange={handleChange}/>
                </label>
                <label>
                    Slika:
                    <input type="url" name="image" value={formMovie.image} onChange={handleChange}/>
                </label>
                <label>
                    Trajler:
                    <input type="url" name="trailer" value={formMovie.trailer} onChange={handleChange}/>
                </label>
                <label>
                    Trajanje filma:
                    <input type="text" name="duration" value={formMovie.duration} onChange={handleChange}/>
                </label>
                <label>
                    Zanr:
                    <MultiSelect  options={genreOptions} value={genreOptions.filter(option => formMovie.genres.includes(Number(option.value)))} onChange={handleMultiSelectChange} labelledBy="select-label"/>
                </label>
                <label>
                    Reziseri:
                    <select name="director" value={formMovie.director} onChange={handleChange} required>
                    <option>Select Director</option>
                    {directors.map((director) => (
              <option key={director.id} value={director.id}>{director.name} {director.surname}</option>
            ))}
          </select>
                </label>
                <button type="submit" className="submit-button">Uredi film</button>
            </form>

        </div>
    );
}
export default EditMoviePage;
  