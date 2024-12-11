export const TIMESHEET_UID_PID_ACTION = {
  RESET_TIMESHEET_UID_PID_STATE: "RESET_TIMESHEET_UID_PID_STATE",
  REQUEST_TIMESHEET_UID_PID: "TIMESHEET_UID_PID_REQUEST",
  ERROR_TIMESHEET_UID_PID: "TIMESHEET_UID_PID_ERROR",
  RESPONSE_TIMESHEET_UID_PID: "TIMESHEET_UID_PID_RESPONSE",
};

export const setResetTimesheetuidpidState= () => ({
    type: TIMESHEET_UID_PID_ACTION.RESET_TIMESHEET_UID_PID_STATE,
    data: undefined
  });
  
  export const requestTimesheetuidpid = (params) =>({
    type:TIMESHEET_UID_PID_ACTION.REQUEST_TIMESHEET_UID_PID,
    data: params
  })
  export const responseTimesheetuidpid = (res) => ({
    type: TIMESHEET_UID_PID_ACTION.RESPONSE_TIMESHEET_UID_PID,
    data: res
  });
  
  export const errorTimesheetuidpid = (err) => ({
    type: TIMESHEET_UID_PID_ACTION.ERROR_TIMESHEET_UID_PID,
    data: err
  });