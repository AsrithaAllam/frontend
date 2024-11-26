import { ApiUrl } from "../../../Constants/Api";
import {
  REQUEST_METHOD,
  WebService,
} from "../../WebServiceManager/RequestService";
import UploadFileRequestBody from "./UploadFileRequestBoady";

export default class UploadFileService {
  request = new UploadFileRequestBody();
  static shared = new UploadFileService();

  uploadFileRequest = (payload) => {
    return new Promise((resolve, reject) => {
      WebService.clientShared
        .callServiceApi(
          ApiUrl.uploadFile(),
          this.request.uploadFileRequest(payload, REQUEST_METHOD.POST)
        )
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    }); 
  }
}