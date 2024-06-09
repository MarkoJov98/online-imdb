import { createSlice , PayloadAction} from "@reduxjs/toolkit";

const middlewareActions = {
    performFetchComments: (_state: any, action: PayloadAction<any>) => {},
    performPostComment: (_state: any, action: PayloadAction<any>) => {},
}

const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        comment: { data: []},
    },
    reducers: {
        setComment: (state, action) => {
            state.comment = action.payload;
        },
        setPostComment: (state, action) => {
            state.comment = action.payload;
        },
        ...middlewareActions
    },
})

export const {setComment, performFetchComments, setPostComment, performPostComment} = commentsSlice.actions;

export default commentsSlice.reducer;