import { all, fork } from "redux-saga/effects";
import { loginWatcherSaga } from "../LoginState/LoginSaga";

export default function* rootSaga() {
  yield all([
    fork(loginWatcherSaga),
  ]);
}
