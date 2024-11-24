

import LOCAL_KEYS, { parseLocalStorageJSON } from "../../../helpers/Localstorage";
import { RequestBody } from "../../WebServiceManager/RequestBody";
import { RequestHeader } from "../../WebServiceManager/RequestHeader";

export default class ProjectRequestBody {
    projectRequest(obj, method) {
    const header = new RequestHeader();
    const request = new RequestBody(
      method,
      header.applicationJsonWithoutToken(),
      obj
    );
    return request;
  }

  projectsListRequest(method) {
    const header = new RequestHeader();
    const request = new RequestBody(
      method,
      header.applicationJson(parseLocalStorageJSON(LOCAL_KEYS.ACCESS_TOKEN))
    );
    return request;
  }
  editProjectRequest (method) {
    const header = new RequestHeader();
    const request = new RequestBody(
      method,
      header.applicationJson(parseLocalStorageJSON(LOCAL_KEYS.ACCESS_TOKEN))
    );
    return request;
  }
  projectByIdRequest (method) {
    const header = new RequestHeader();
    const request = new RequestBody(
      method,
      header.applicationJson(parseLocalStorageJSON(LOCAL_KEYS.ACCESS_TOKEN))
    );
    return request;
  }


}