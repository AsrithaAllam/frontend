import { all, fork } from "redux-saga/effects";
import { loginWatcherSaga } from "../LoginState/LoginSaga";
import { userWatcherSaga } from "../UserState/UserSaga";

export default function* rootSaga() {
  yield all([
    fork(loginWatcherSaga),
    fork(userWatcherSaga),
  ]);
}
