import { Saga, SagaIterator } from "redux-saga";

import movieService from "../../services/MoviesService";
import { call, put, takeLatest } from "redux-saga/effects";
import { performFetchMovies, performFetchSingleMovie, performPaginateMovies, setMovie, setMoviesList } from "./slice";


function* fetchMovies (): SagaIterator {
    try {
        const response = yield call(movieService.getMovies);
        // console.log(response);
        yield put(setMoviesList(response));
    }   catch (error) {
        console.log(error);
    }
};
function* fetchSingleMovie (action: {payload: number}): SagaIterator {
    try {
        const response = yield call(movieService.getSingleMovie, action.payload);
        yield put(setMovie(response));
    } catch(error) {
        console.log(error);
    }
}



function* fetchPaginatedMovies (action: { payload: any}): SagaIterator {
    try {
        const { take, skip } = action.payload
        const response = yield call(movieService.paginateMovies, take, skip);
        console.log(response);
        

    } catch (error) {
        console.log(error);
    }
};

export function* watchFetchMovies(): SagaIterator {
    yield takeLatest(performFetchMovies, fetchMovies)
};

export function* watchFetchSingleMovie(): SagaIterator {
    yield takeLatest(performFetchSingleMovie, fetchSingleMovie)
}

export function* watchPaginateMovies (): SagaIterator {
    yield takeLatest(performPaginateMovies, fetchPaginatedMovies)
};
