import { configureStore } from "@reduxjs/toolkit";

import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";
import authReducer from "./auth/slice";
import moviesReducer from "./movies/slice"
import directorsReducer from "./directors/slice"


const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    auth: authReducer,
    movies: moviesReducer,
    directors: directorsReducer,
   
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
  ],
});

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}
