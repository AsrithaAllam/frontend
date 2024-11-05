import LOCAL_KEYS, { parseLocalStorageJSON } from "../../../helpers/Localstorage";
import { RequestBody } from "../../WebServiceManager/RequestBody";
import { RequestHeader } from "../../WebServiceManager/RequestHeader";

export default class UserRequestBody {
  userRequest(obj, method) {
    const header = new RequestHeader();
    const request = new RequestBody(
      method,
      header.applicationJsonWithoutToken(),
      obj
    );
    return request;
  }
  
  usersListRequest(method) {
    const header = new RequestHeader();
    const request = new RequestBody(
      method,
      header.applicationJson(parseLocalStorageJSON(LOCAL_KEYS.ACCESS_TOKEN))
    );
    return request;
  }
  userByIdRequest (method) {
    const header = new RequestHeader();
    const request = new RequestBody(
      method,
      header.applicationJson(parseLocalStorageJSON(LOCAL_KEYS.ACCESS_TOKEN))
    );
    return request;
  }

  editUserRequest (method,obj) {
    const header = new RequestHeader();
    const request = new RequestBody(
      method,
      header.applicationJson(parseLocalStorageJSON(LOCAL_KEYS.ACCESS_TOKEN)),
      obj
    );
    return request;
  }

}
