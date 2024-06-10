import { Saga, SagaIterator } from "redux-saga";
import { call, takeLatest, put } from "redux-saga/effects";
import directorsService from "../../services/DirectorsService";
import { performCreateDirector, performDeleteDirector, performFetchDirectors, performFetchSingleDirector, setDirectorsList, setSingleDirector } from "./slice";
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

function* createDirector (action: {payload: any}): SagaIterator {
    try {
        const response = yield call(directorsService.createDirector, action.payload);
        console.log(response);
        
        yield put(setDirectorsList(response));
        yield put(performFetchDirectors())
    } catch(error) {
        console.log(error);
    };
};
function* deleteDirector (action: {payload: number}): SagaIterator {
    try {
        const response = yield call(directorsService.deleteDirector, action.payload);
        console.log(response);
        yield put(performFetchDirectors())
    } catch (error) {
        console.log(error);
    };
};

export function* watchFetchDirectors(): SagaIterator {
    yield takeLatest(performFetchDirectors, fetchDirectors);
};

export function* watchFetchSingleDirector(): SagaIterator {
    yield takeLatest(performFetchSingleDirector, fetchSingleDirector);
};

export function* watchCreateDirector(): SagaIterator {
    yield takeLatest(performCreateDirector, createDirector);
};

export function* watchDeleteDirector(): SagaIterator {
    yield takeLatest(performDeleteDirector, deleteDirector);
};