import { ApiUrl } from "../../../Constants/Api";
import {
  REQUEST_METHOD,
  WebService,
} from "../../WebServiceManager/RequestService";
import ProjectRequestBody from "./ProjectRequestBody";

export default class ProjectService {
  request = new ProjectRequestBody();
  static shared = new ProjectService();

  projectRequest = (payload) => {
    return new Promise((resolve, reject) => {
      WebService.clientShared
        .callServiceApi(
          ApiUrl.projectRequest(),
          this.request.projectRequest(payload, REQUEST_METHOD.POST)
        )
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  projectsListRequest = () => {
    return new Promise((resolve, reject) => {
      WebService.clientShared
        .callServiceApi(
          ApiUrl.projectsListRequest(),
          this.request.projectsListRequest( REQUEST_METHOD.GET)
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