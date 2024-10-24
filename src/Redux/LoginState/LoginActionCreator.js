import axios from 'axios';
import { toast } from "react-toastify";
import LoginService from "../../Services/RestApiManager/LoginManager/LoginService";


export const LOGIN_ACTION = {
  RESET_LOGIN_STATE: 'RESET_LOGIN_STATE',
  REQUEST: 'LOGIN_REQUEST',
  ERROR: 'LOGIN_ERROR',
  RESPONSE: 'LOGIN_RESPONSE',

  RESET_FORGOT_PASSWORD_STATE: "RESET_FORGOT_PASSWORD_STATE",
  REQUEST_FORGOT_PASSWORD: "REQUEST_FORGOT_PASSWORD",
  ERROR_FORGOT_PASSWORD: "ERROR_FORGOT_PASSWORD",
  RESPONSE_FORGOT_PASSWORD: 'RESPONSE_FORGOT_PASSWORD',

  RESET_PASSWORD_STATE: "RESET_PASSWORD_STATE",
  REQUEST_RESET_PASSWORD: "REQUEST_RESET_PASSWORD",
  ERROR_RESET_PASSWORD: "ERROR_RESET_PASSWORD",
  RESPONSE_RESET_PASSWORD: 'RESPONSE_RESET_PASSWORD',

  RESET_UPDATE_PASSWORD_STATE : "RESET_UPDATE_PASSWORD_STATE",
  REQUEST_UPDATE_PASSWORD: "REQUEST_UPDATE_PASSWORD",
  ERROR_UPDATE_PASSWORD: "ERROR_UPDATE_PASSWORD",
  RESPONSE_UPDATE_PASSWORD: 'RESPONSE_UPDATE_PASSWORD'


};

export const setResetStateLogin = () => ({
  type: LOGIN_ACTION.RESET_LOGIN_STATE,
  data: undefined
});

export const requestLoginAction = (params) =>({
  type:LOGIN_ACTION.REQUEST,
  data: params
})
export const responseLoginAction = (res) => ({
  type: LOGIN_ACTION.RESPONSE,
  data: res
});

export const errorLoginAction = (err) => ({
  type: LOGIN_ACTION.ERROR,
  data: err
});

export const setResetForgotPassword = () => ({
  type: LOGIN_ACTION.RESET_FORGOT_PASSWORD_STATE,
  data: undefined
});

export const requestForgotPassword = (params) => ({
  type: LOGIN_ACTION.REQUEST_FORGOT_PASSWORD,
  data: params
});

export const responseForgotPassword = (res) => ({
  type: LOGIN_ACTION.RESPONSE_FORGOT_PASSWORD,
  data: res
});

export const errorForgotPassword = (err) => ({
  type: LOGIN_ACTION.ERROR_FORGOT_PASSWORD,
  data: err
});

export const setResetStatePassword = () => ({
  type: LOGIN_ACTION.RESET_PASSWORD_STATE,
  data: undefined
});

export const requestResetPassword = (params) =>({
  type:LOGIN_ACTION.REQUEST_RESET_PASSWORD,
  data: params
})
export const responseResetPassword = (res) => ({
  type: LOGIN_ACTION.RESPONSE_RESET_PASSWORD,
  data: res
});

export const errorResetPassword = (err) => ({
  type: LOGIN_ACTION.ERROR_RESET_PASSWORD,
  data: err
});

export const setResetUpdatePassword = () => ({
  type: LOGIN_ACTION.RESET_UPDATE_PASSWORD_STATE,
  data: undefined
});

export const requestUpdatePassword = (params) => ({
  type: LOGIN_ACTION.REQUEST_UPDATE_PASSWORD,
  data: params
});

export const responseUpdatePassword = (res) => ({
  type: LOGIN_ACTION.RESPONSE_UPDATE_PASSWORD,
  data: res
});
export const errorUpdatePassword = (err) => ({
  type: LOGIN_ACTION.ERROR_UPDATE_PASSWORD,
  data: err
});