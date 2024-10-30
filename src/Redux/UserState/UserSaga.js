import { call, put, takeLatest } from "@redux-saga/core/effects";
import UserService from "../../Services/RestApiManager/UserManager/UserService";
import { responseUserAction, errorUserAction, USER_ACTION, responseUsersListAction, errorUsersListAction} from "./UserActionCreator"

export function* userRequest(action) {
    try {
      const response = yield call(UserService.shared.userRequest, action.data);
      yield put(responseUserAction(response));
    } catch (error) {
      yield put(errorUserAction(error));
    }
  }

  export function* usersListRequest(action) {
    try {
      const response = yield call(UserService.shared.usersListRequest, action.data);
      yield put(responseUsersListAction(response));
    } catch (error) {
      yield put(errorUsersListAction(error));
    }
  }


  export function* userWatcherSaga() {
    yield takeLatest(USER_ACTION.REQUEST, userRequest);
    yield takeLatest(USER_ACTION.REQUEST_USERS_LIST, usersListRequest)
  
  }