import { all, fork } from "redux-saga/effects";
import { loginWatcherSaga } from "../LoginState/LoginSaga";
import { userWatcherSaga } from "../UserState/UserSaga";
import {clientWatcherSaga } from "../ClientState/ClientSaga";
import { projectWatcherSaga } from "../ProjectState/ProjectSaga";
import {uploadFileWatcherSaga} from "../FileState/uploadFileSaga";
export default function* rootSaga() {
  yield all([
    fork(loginWatcherSaga),
    fork(userWatcherSaga),
    fork(clientWatcherSaga),
    fork(projectWatcherSaga),
    fork(uploadFileWatcherSaga),
  ]);
}
