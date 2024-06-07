import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const middlewareActions = {
    performFetchDirectors: () => {},
    performFetchSingleDirector: (_state: any, action: PayloadAction<number>) => {},
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
        ...middlewareActions
    },
})

export const { setDirectorsList, performFetchDirectors , setSingleDirector} = directorsSlice.actions;

export default directorsSlice.reducer;