import { ApiUrl } from "../../../Constants/Api";
import {
  REQUEST_METHOD,
  WebService,
} from "../../WebServiceManager/RequestService";
import LoginRequestBody from "./LoginRequestBody";

export default class LoginService {
  request = new LoginRequestBody();
  static shared = new LoginService();

  loginRequest = (payload) => {
    return new Promise((resolve, reject) => {
      WebService.clientShared
        .callServiceApi(
          ApiUrl.loginRequest(),
          this.request.loginRequest(payload, REQUEST_METHOD.POST)
        )
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  forgotPasswordRequest = (payload) => {
    return new Promise((resolve, reject) => {
      WebService.clientShared
        .callServiceApi(
          ApiUrl.forgotPasswordRequest(payload.email),
          
          this.request.forgotPasswordRequest( REQUEST_METHOD.POST)
        )
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  resetPasswordRequest = (payload) => {
    return new Promise((resolve, reject) => {
      WebService.clientShared
        .callServiceApi(
          ApiUrl.resetPasswordRequest(payload.token),
          this.request.resetPasswordRequest(REQUEST_METHOD.PUT,{newPassword: payload.newPassword, confirmPassword:payload.confirmPassword})
        )
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  updatePasswordRequest = (payload ,id) => {
    return new Promise((resolve, reject) => {
      WebService.clientShared
        .callServiceApi(
          ApiUrl.updatePasswordRequest(id),
          
          this.request.updatePasswordRequest(payload, REQUEST_METHOD.PUT) // requestbody
        )
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };


}
