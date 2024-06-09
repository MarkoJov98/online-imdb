import * as authSagas from "./auth/saga";
import { Saga } from "redux-saga";
import * as moviesSagas from "./movies/saga"
import * as directorsSagas from "./directors/saga";
import * as commentsSagas from "./comments/saga"

// import of every [feature]/saga​

const sagas = { ...authSagas, ...moviesSagas, ...directorsSagas, ...commentsSagas} as Record<string, Saga>;
export default sagas;
