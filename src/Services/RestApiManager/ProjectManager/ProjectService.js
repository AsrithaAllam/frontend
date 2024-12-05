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

  projectsListRequest = (payload) => {
    return new Promise((resolve, reject) => {
      WebService.clientShared
        .callServiceApi(
          ApiUrl.projectsListRequest(payload.page, payload.size, payload.search),
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
  editProjectRequest = (payload) => {
    return new Promise((resolve, reject) => {
      WebService.clientShared
        .callServiceApi(
          ApiUrl.editProject(payload.id),
          this.request.editProjectRequest( REQUEST_METHOD.PUT)
        )
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  projectByIdRequest = (payload) => {
    return new Promise((resolve, reject) => {
      WebService.clientShared
        .callServiceApi(
          ApiUrl.getProjectById(payload),
          this.request.projectByIdRequest(REQUEST_METHOD.GET)
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