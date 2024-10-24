import { call, put, takeLatest } from "@redux-saga/core/effects";
import { errorForgotPassword, errorLoginAction, errorResetPassword, errorUpdatePassword, LOGIN_ACTION, responseForgotPassword, responseLoginAction, responseResetPassword, responseUpdatePassword } from "./LoginActionCreator";
import LoginService from "../../Services/RestApiManager/LoginManager/LoginService";

export function* loginRequest(action) {
  try {
    const response = yield call(LoginService.shared.loginRequest, action.data);
    yield put(responseLoginAction(response));
  } catch (error) {
    yield put(errorLoginAction(error));
  }
}
export function* forgotPasswordRequest(payload) {
  try{
    const response = yield call(LoginService.shared.forgotPasswordRequest, payload.data);
    yield put (responseForgotPassword(response))
  }catch(error){
    yield put(errorForgotPassword(error));
  }
} 
export function * resetPasswordRequest (payload){
try{
  const response = yield call(LoginService.shared.resetPasswordRequest,payload.data);
  yield put (responseResetPassword(response))

}catch(error){
  yield put (errorResetPassword(error))

}
}

export function* updatePasswordRequest(payload) {
  console.log(payload,"payload")
  try{
    const response = yield call(LoginService.shared.updatePasswordRequest, payload.data.values,payload.data.id);
    yield put (responseUpdatePassword(response))
  }catch(error){
    yield put(errorUpdatePassword(error));
  }
} 

export function* loginWatcherSaga() {
  yield takeLatest(LOGIN_ACTION.REQUEST, loginRequest);
  yield takeLatest(LOGIN_ACTION.REQUEST_FORGOT_PASSWORD,forgotPasswordRequest);
  yield takeLatest(LOGIN_ACTION.REQUEST_RESET_PASSWORD,resetPasswordRequest);
  yield takeLatest(LOGIN_ACTION.REQUEST_UPDATE_PASSWORD,updatePasswordRequest); 

}