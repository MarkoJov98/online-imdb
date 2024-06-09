import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
    performFetchMovies: () => {},
    performPaginateMovies: (_state: any, action: PayloadAction<any>) => {},
    performFetchSingleMovie: (_state: any, action: PayloadAction<number>) => {},
    performFetchGenres: () => {},
    performCreateMovie: (_state: any, action: PayloadAction<any>) => {},
    performDeleteMovie: (_state: any, action: PayloadAction<number>) => {},

}

export const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        moviesList: { data: []},
        movie: [],
        genres: {data: []},
        paginateMovies: { data: [], metadata: {}},
    },
    reducers: {
        setMoviesList: (state, action) => {
            state.moviesList = action.payload;
        },
        setMovie: (state, action) => {
            state.movie = action.payload;
        },
        setGenres: (state, action ) => {
            state.genres = action.payload;
        },
        setPaginateMovies: (state, action) => {
            state.paginateMovies = action.payload;
        },
        createMovie: (state, action) => {
            state.moviesList = action.payload;
        },
        deleteMovie: (state, action) => {
            state.moviesList = action.payload;
        },
        ...middlewareActions,
    },

});


export const { setMoviesList , performFetchMovies, setPaginateMovies, performPaginateMovies, setMovie, performFetchSingleMovie, setGenres, performFetchGenres, performCreateMovie, createMovie, deleteMovie, performDeleteMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
