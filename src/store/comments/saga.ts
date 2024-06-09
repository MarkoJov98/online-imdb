import { SagaIterator } from "redux-saga";
import { call , put, takeLatest} from "redux-saga/effects";
import commentsService from "../../services/CommentsService";
import { performFetchComments, performPostComment, setComment } from "./slice";


function* fetchComments(action: {payload: number}): SagaIterator {
    try {
        const response = yield call(commentsService.getComments, action.payload);
        yield put(setComment(response))
    } catch (error) {
        console.log(error);
    };
};

export function* watchFetchComments(): SagaIterator {
    yield takeLatest(performFetchComments, fetchComments)
};

function* postComment(action: {payload: any}): SagaIterator {
    try {
        const response = yield call(commentsService.postComment, action.payload)
        yield put(performFetchComments(action.payload.movie_id))
    } catch (error) {
        console.log(error);
    };
};


export function* watchPostComment(): SagaIterator {
    yield takeLatest(performPostComment, postComment);
};