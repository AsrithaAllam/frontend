
import LOCAL_KEYS, { parseLocalStorageJSON } from "../../../helpers/Localstorage";
import { RequestBody } from "../../WebServiceManager/RequestBody";
import { RequestHeader } from "../../WebServiceManager/RequestHeader";

export default class ClientRequestBody {
    clientRequest(obj, method) {
    const header = new RequestHeader();
    const request = new RequestBody(
      method,
      header.applicationJsonWithoutToken(),
      obj
    );
    return request; 
  }
 
  clientsListRequest(method) {
    const header = new RequestHeader();
    const request = new RequestBody(
      method,
      header.applicationJson(parseLocalStorageJSON(LOCAL_KEYS.ACCESS_TOKEN))
    );
    return request;
  }
 
  editClientRequest (method) {
    const header = new RequestHeader();
    const request = new RequestBody(
      method,
      header.applicationJson(parseLocalStorageJSON(LOCAL_KEYS.ACCESS_TOKEN))
    );
    return request;
  }

clientByIdRequest (obj,method) {
  const header = new RequestHeader();
  const request = new RequestBody(
    method,
    header.applicationJson(parseLocalStorageJSON(LOCAL_KEYS.ACCESS_TOKEN)),
    obj
    
  );
  return request;
}
}