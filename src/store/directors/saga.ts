import { SagaIterator } from "redux-saga";
import { call, takeLatest, put } from "redux-saga/effects";
import directorsService from "../../services/DirectorsService";
import { performFetchDirectors, setDirectorsList, setSingleDirector } from "./slice";
import { performFetchSingleMovie } from "../movies/slice";

function* fetchDirectors(): SagaIterator {
    try {
        const response = yield call(directorsService.getDirectors);
        console.log(response);
        yield put(setDirectorsList(response))

    }   catch(error) {
        console.log(error);
    };
};

function* fetchSingleDirector (action: {payload: number}): SagaIterator {
    try {
        const response = yield call(directorsService.getSingleDirector, action.payload);
        console.log(response);
        yield put(setSingleDirector(response));
    } catch(error) {
        console.log(error);
    };
};

export function* watchFetchDirectors(): SagaIterator {
    yield takeLatest(performFetchDirectors, fetchDirectors);
};

export function* watchFetchSingleDirector(): SagaIterator {
    yield takeLatest(performFetchSingleMovie, fetchSingleDirector)
}