import LOCAL_KEYS, {
  parseLocalStorageJSON,
} from "../../../helpers/Localstorage";
import { RequestBody } from "../../WebServiceManager/RequestBody";
import { RequestHeader } from "../../WebServiceManager/RequestHeader";

export default class TimesheetUidPidRequestBody {

    
  timesheetUidPidRequest(method) {
    const header = new RequestHeader();
    const request = new RequestBody(
      method,
      header.applicationJson(parseLocalStorageJSON(LOCAL_KEYS.ACCESS_TOKEN))
    );
    return request;
  }
}
