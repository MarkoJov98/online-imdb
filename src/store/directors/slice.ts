import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const middlewareActions = {
    performFetchDirectors: () => {},
    performFetchSingleDirector: (_state: any, action: PayloadAction<number>) => {},
    performCreateDirector: (_state: any, action: PayloadAction<DirectorData>) => {},
    performDeleteDirector: (_state: any, action: PayloadAction<number>) => {},
}
export const directorsSlice = createSlice({
    name: "directors",
    initialState: {
        directorsList: {data: []},
        singleDirector: [],
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
        ...middlewareActions
    },
})

export const { setDirectorsList, performFetchDirectors , setSingleDirector, createDirector, performFetchSingleDirector, performCreateDirector, deleteDirector , performDeleteDirector} = directorsSlice.actions;

export default directorsSlice.reducer;