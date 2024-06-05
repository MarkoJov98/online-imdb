const selectMovies = (state: { movies: { moviesList: { data: Movie []} } }) => state.movies.moviesList.data;



export { selectMovies };