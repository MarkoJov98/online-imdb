import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
    performFetchMovies: () => {},
    performPaginateMovies: () => {},
    performFetchSingleMovie: (_state: any, action: PayloadAction<number>) => {},
}

export const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        moviesList: { data: []},
        movie: [],
        paginateMovies: { data: [], metadata: {}},
    },
    reducers: {
        setMoviesList: (state, action) => {
            state.moviesList = action.payload;
        },
        setMovie: (state, action) => {
            state.movie = action.payload;
        },
        setPaginateMovies: (state, action) => {
            state.paginateMovies = action.payload;
        },
        ...middlewareActions,
    },

});


export const { setMoviesList , performFetchMovies, setPaginateMovies, performPaginateMovies, setMovie, performFetchSingleMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
