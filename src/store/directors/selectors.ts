const selectDirectors = (state: {directors: { directorsList: {data: Director[]}}} ) => state.directors.directorsList.data;

const selectSingleDirector = (state: {directors: {singleDirector: Director}}) => state.directors.singleDirector;

export { selectDirectors , selectSingleDirector}