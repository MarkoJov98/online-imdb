const selectMovies = (state: { movies: { moviesList: { data: Movie[] } } }) => state.movies.moviesList.data;

const selectSingleMovie = (state: {movies: {movie: SingleMovie} }) =>state.movies.movie;

const selectPaginatedMovies = (state: { movies: { paginateMovies: {data: Movie[], metadata: any}}}) => state.movies.paginateMovies;

export { selectMovies, selectPaginatedMovies, selectSingleMovie };