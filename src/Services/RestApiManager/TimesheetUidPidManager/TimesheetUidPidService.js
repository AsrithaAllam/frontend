import { ApiUrl } from "../../../Constants/Api";
import {
  REQUEST_METHOD,
  WebService,
} from "../../WebServiceManager/RequestService";
import TimesheetUidPidRequestBody from "./TimesheetUidPidRequestBody";
 
export default class TimesheetUidPidService {
  request = new TimesheetUidPidRequestBody();
  static shared = new TimesheetUidPidService();

  timesheetUidPidRequest = (payload) => {
    return new Promise((resolve, reject) => {
      WebService.clientShared
        .callServiceApi(
          ApiUrl.TimesheetUidPidRequest(),
          this.request.timesheetUidPidRequest(payload, REQUEST_METHOD.POST)
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