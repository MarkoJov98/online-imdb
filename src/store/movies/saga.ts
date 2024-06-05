import { SagaIterator } from "redux-saga";

import movieService from "../../services/MoviesService";
import { call, put, takeLatest } from "redux-saga/effects";
import { performFetchMovies, setMoviesList } from "./slice";


function* fetchMovies (): SagaIterator {
    try {
        const response = yield call(movieService.getMovies);
        // console.log(respone);
        
        yield put(setMoviesList(response))
    }   catch (error) {
        console.log(error);
    }
}

export function* watchFetchMovies(): SagaIterator {
    yield takeLatest(performFetchMovies, fetchMovies)
}