import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
    performFetchMovies: () => {},
}

export const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        moviesList: { data: []},
    },
    reducers: {
        setMoviesList: (state, action) => {
            state.moviesList = action.payload;
        },
        ...middlewareActions,
    },

});


export const { setMoviesList , performFetchMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
