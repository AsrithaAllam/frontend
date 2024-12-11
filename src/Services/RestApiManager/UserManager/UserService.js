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

  usersListRequest = (payload) => {
    return new Promise((resolve, reject) => {
      WebService.clientShared
        .callServiceApi(
          ApiUrl.getAllUsers(payload.page, payload.size, payload.search),
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

  usersListWithOutPaginationRequest = (payload) => {
    return new Promise((resolve, reject) => {
      WebService.clientShared
        .callServiceApi(
          ApiUrl.getAllUsersWithOUtPagination(),
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
        ApiUrl.editUser(payload.id),
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