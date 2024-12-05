import { call, put, takeLatest } from "@redux-saga/core/effects";
import UserService from "../../Services/RestApiManager/UserManager/UserService";
import { responseUserAction, errorUserAction, USER_ACTION, responseUsersListAction, errorUsersListAction, responseUserById, errorUserById, responseEditUser, errorEditUser, responseUsersListActionWithOutPagination, errorUsersListActionWithOutPagination} from "./UserActionCreator"

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
  
  export function* usersListWithOutPagination(action){
    try {
      const response = yield call(UserService.shared.usersListWithOutPaginationRequest, action.data);
      yield put(responseUsersListActionWithOutPagination(response));
    } catch (error) {
      yield put(errorUsersListActionWithOutPagination(error));
    }
  }
  export function* userByIdRequest(action) {
    try {
      const response = yield call(UserService.shared.userByIdRequest, action.data);
      yield put(responseUserById(response));
    } catch (error) {
      yield put(errorUserById(error));
    }
  }


  export function* editUserRequest(action) {
    try {
      const response = yield call(UserService.shared.editUserRequest, action.data);
      yield put(responseEditUser(response));
    } catch (error) {
      yield put(errorEditUser(error));
    }
  }
  
  export function* userWatcherSaga() {
    yield takeLatest(USER_ACTION.REQUEST, userRequest);
    yield takeLatest(USER_ACTION.REQUEST_USERS_LIST, usersListRequest)
    yield takeLatest(USER_ACTION.REQUEST_USER_BY_ID,userByIdRequest)
    yield takeLatest(USER_ACTION.REQUEST_EDIT_USER,editUserRequest)
    yield takeLatest(USER_ACTION.REQUEST_USERS_LIST_WITHOUT_PAGINATION,usersListWithOutPagination)
  }