import { call, put, takeLatest } from "@redux-saga/core/effects";
import {
  errorTimesheetuidpid,
  responseTimesheetuidpid,
  TIMESHEET_UID_PID_ACTION,
} from "./Timesheet_Uid_Pid_ActionCreator";
import TimesheetUidPidService from "../../Services/RestApiManager/TimesheetUidPidManager/TimesheetUidPidService"

export function* timesheetUidPidRequest(action) {
  try {
    const response = yield call(TimesheetUidPidService.shared.timesheetUidPidRequest, action.data);
    yield put(responseTimesheetuidpid(response));
  } catch (error) {
    yield put(errorTimesheetuidpid(error));
  }
}

export function* TimesheetUidPidWatcherSaga() {
  yield takeLatest(TIMESHEET_UID_PID_ACTION.REQUEST_TIMESHEET_UID_PID, timesheetUidPidRequest);
}
