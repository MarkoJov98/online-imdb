import { Saga, SagaIterator } from "redux-saga";

import movieService from "../../services/MoviesService";
import { call, put, takeLatest } from "redux-saga/effects";
import { performCreateMovie, performDeleteMovie, performFetchGenres, performFetchMovies, performFetchSingleMovie, performPaginateMovies, setGenres, setMovie, setMoviesList, setPaginateMovies } from "./slice";


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
};

function* fetchGenres (): SagaIterator {
    try {
        const response = yield call(movieService.getGenres)
        yield put(setGenres(response));
    } catch (error) {
        console.log(error);
    };
};
function* createMovie (action: {payload: any}): SagaIterator {
    try {
        const response = yield call(movieService.createMovie, action.payload)
        console.log(response);
        
        yield put(setMovie(response))
        yield put(performFetchMovies())
    } catch (error) {
        console.log(error);
    }
};
function* deleteMovie (action: {payload: number}) :SagaIterator {
    try {
        const response = yield call(movieService.deleteMovie, action.payload)
        console.log(response);
        yield put(performFetchMovies());
    } catch (error) {
        console.log(error)
    };
};



function* fetchPaginatedMovies (action: { payload: any}): SagaIterator {
    try {
        const { take, skip } = action.payload
        const response = yield call(movieService.paginateMovies, take, skip);
        console.log(response);
        yield put(setPaginateMovies(response))
        yield put(performFetchMovies());
    } catch (error) {
        console.log(error);
    }
};

export function* watchFetchMovies(): SagaIterator {
    yield takeLatest(performFetchMovies, fetchMovies)
};

export function* watchFetchSingleMovie(): SagaIterator {
    yield takeLatest(performFetchSingleMovie, fetchSingleMovie)
};

export function* watchFetchGenres (): SagaIterator {
    yield takeLatest(performFetchGenres, fetchGenres);
};

export function* watchCreateMovie() :SagaIterator {
    yield takeLatest(performCreateMovie, createMovie);
};

export function* watchDeleteMovie() : SagaIterator {
    yield takeLatest(performDeleteMovie, deleteMovie)
};

export function* watchPaginateMovies (): SagaIterator {
    yield takeLatest(performPaginateMovies, fetchPaginatedMovies)
};
