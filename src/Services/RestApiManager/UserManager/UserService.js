import { ApiUrl } from "../../../Constants/Api";
import {
  REQUEST_METHOD,
  WebService,
} from "../../WebServiceManager/RequestService";
import UserRequestBody from "./UserRequestBody";

export default class UserService {
  request = new UserRequestBody();
  static shared = new UserService();

  userRequest = (payload) => {
    return new Promise((resolve, reject) => {
      WebService.clientShared
        .callServiceApi(
          ApiUrl.userRequest(),
          this.request.userRequest(payload, REQUEST_METHOD.POST)
        )
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  usersListRequest = () => {
    return new Promise((resolve, reject) => {
      WebService.clientShared
        .callServiceApi(
          ApiUrl.getAllUsers(),
          this.request.usersListRequest( REQUEST_METHOD.GET)
        )
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  userByIdRequest = (payload) => {
    return new Promise((resolve, reject) => {
      WebService.clientShared
        .callServiceApi(
          ApiUrl.getUserById(payload),
          this.request.userByIdRequest(REQUEST_METHOD.GET)
        )
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  editUserRequest =(payload) =>{
    
    return new Promise ((resolve,reject)=>{
      WebService.clientShared
      .callServiceApi(
        ApiUrl.editUser(),
        this.request.editUserRequest(REQUEST_METHOD.PUT,payload)
      )
      .then((response)=>{
        resolve(response)
      })
      .catch((error)=>{
        reject(error)
      })
    })
  }
}