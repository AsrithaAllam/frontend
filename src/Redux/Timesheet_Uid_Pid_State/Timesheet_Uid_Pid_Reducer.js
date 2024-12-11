import * as Timesheet_Uid_Pid_ActionCreator from "./Timesheet_Uid_Pid_ActionCreator";


export function defaultTimesheetUidPidState() {
    return {
      loading: false,
      response: null,
      error: null,
    };
  } 
  /**
   * User Reducer its take state and action
   * @param state
   * @param action
   */
  export const TimesheetUidPidReducer = (state, action) => {
    if (
      !state ||
      action.type === Timesheet_Uid_Pid_ActionCreator.TIMESHEET_UID_PID_ACTION.RESET_TIMESHEET_UID_PID_STATE
    ) {
      return { ...state, ...defaultTimesheetUidPidState() };
    }
  
    if (action.type === Timesheet_Uid_Pid_ActionCreator.TIMESHEET_UID_PID_ACTION.REQUEST_TIMESHEET_UID_PID) {
      return { ...state, loading: true };
    }
  
    if (action.type === Timesheet_Uid_Pid_ActionCreator.TIMESHEET_UID_PID_ACTION.RESPONSE_TIMESHEET_UID_PID) {
      return { ...state, response: action.data, loading: false };
    }
  
    if (action.type === Timesheet_Uid_Pid_ActionCreator.TIMESHEET_UID_PID_ACTION.ERROR_TIMESHEET_UID_PID) {
      return { ...state, error: action.data, loading: false };
    }
  
    return state; 
  };