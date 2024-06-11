import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const middlewareActions = {
    performFetchDirectors: () => {},
    performFetchSingleDirector: (_state: any, action: PayloadAction<number>) => {},
    performCreateDirector: (_state: any, action: PayloadAction<DirectorData>) => {},
    performDeleteDirector: (_state: any, action: PayloadAction<number>) => {},
    performPaginateDirectors: (_state: any, action: PayloadAction<any>) => {},
}
export const directorsSlice = createSlice({
    name: "directors",
    initialState: {
        directorsList: {data: []},
        singleDirector: [],
        paginatedDirectors: {data: [], metadata: {}}
    },
    reducers: {
        setDirectorsList: (state, action) => {
            state.directorsList = action.payload;
        },
        setSingleDirector: (state, action) => {
            state.singleDirector = action.payload;
        },
        createDirector : (state, action) => {
            state.directorsList = action.payload;
        },
        deleteDirector: (state, action) => {
            state.directorsList = action.payload;
        },
        setPaginatedDirector: (state, action) => {
            state.paginatedDirectors = action.payload;
        },
        ...middlewareActions
    },
})

export const { setDirectorsList, performFetchDirectors , setSingleDirector, createDirector, performFetchSingleDirector, performCreateDirector, deleteDirector , performDeleteDirector, setPaginatedDirector, performPaginateDirectors} = directorsSlice.actions;

export default directorsSlice.reducer;