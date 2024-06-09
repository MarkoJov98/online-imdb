const selectMovies = (state: { movies: { moviesList: { data: Movie[] } } }) => state.movies.moviesList.data

const selectSingleMovie = (state: {movies: {movie: SingleMovie} }) =>state.movies.movie;

const selectGenres = (state: {movies: {genres: { data: Genre []} }}) => state.movies.genres.data;

const selectPaginatedMovies = (state: { movies: { paginateMovies: {data: Movie[], metadata: any}}}) => state.movies.paginateMovies;

export { selectMovies, selectPaginatedMovies, selectSingleMovie , selectGenres};