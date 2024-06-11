const selectDirectors = (state: {directors: { directorsList: {data: Director[]}}} ) => state.directors.directorsList.data;

const selectSingleDirector = (state: {directors: {singleDirector: Director}}) => state.directors.singleDirector;

const selecetPaginatedDirectors =(state: {directors: {paginatedDirectors: {data: Director[], metadata: any}}}) => state.directors.paginatedDirectors;

export { selectDirectors , selectSingleDirector, selecetPaginatedDirectors};