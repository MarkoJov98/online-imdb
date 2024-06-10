import { createSlice , PayloadAction} from "@reduxjs/toolkit";

const middlewareActions = {
    performFetchComments: (_state: any, action: PayloadAction<any>) => {},
    performPostComment: (_state: any, action: PayloadAction<PostData>) => {},
    performDeleteComment: (_state: any, action: PayloadAction<number>) =>{},
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
        deleteComment: (state, action) => {
            state.comment = action.payload;
        },
        ...middlewareActions
    },
})

export const {setComment, performFetchComments, setPostComment, performPostComment, performDeleteComment} = commentsSlice.actions;

export default commentsSlice.reducer;