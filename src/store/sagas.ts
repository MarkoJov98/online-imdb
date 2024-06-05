import * as authSagas from "./auth/saga";
import { Saga } from "redux-saga";
import * as moviesSagas from "./movies/saga"

// import of every [feature]/saga​

const sagas = { ...authSagas, ...moviesSagas } as Record<string, Saga>;
export default sagas;
