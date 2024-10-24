import LOCAL_KEYS, { parseLocalStorageJSON } from "../../../helpers/Localstorage";
import { RequestBody } from "../../WebServiceManager/RequestBody";
import { RequestHeader } from "../../WebServiceManager/RequestHeader";

export default class LoginRequestBody {
  loginRequest(obj, method) {
    const header = new RequestHeader();
    const request = new RequestBody(
      method,
      header.applicationJsonWithoutToken(),
      obj
    );
    return request;
  }

  forgotPasswordRequest( method) {
    const header = new RequestHeader();
    const request = new RequestBody(
      method,
      header.applicationJsonWithoutToken(),
    );
    return request;
  }
  resetPasswordRequest (method){
    const header = new RequestHeader();
    const request = new RequestBody(
      method,
      header.applicationJsonWithoutToken()
    )
    return request;
  }
  
  updatePasswordRequest(obj, method) {
    const header = new RequestHeader();
    const request = new RequestBody(
      method,
      header.applicationJson(parseLocalStorageJSON(LOCAL_KEYS.ACCESS_TOKEN)),
      obj
    );
    return request;
  }
}
