import { combineReducers } from "redux";
import  { ForgotPasswordReducer, LoginReducer, ResetPasswordReducer, UpdatePasswordReducer } from "../LoginState/LoginReducer";
import { EditUserReducer, UserByIdReducer, UserReducer, UsersListReducer, UsersListWithOutPagination } from "../UserState/UserReducer";
import { ClientReducer, ClientsListReducer,EditClientReducer,
    ClientByIdReducer,
    ClientsListWithOutPagination} from "../ClientState/ClientReducer";
import {EditProjectReducer, ProjectReducer,ProjectsListReducer,ProjectByIdReducer, ProjectUserReducer} from "../ProjectState/ProjectReducer"
import {UploadFileReducer} from "../FileState/uploadFileReducer";
import { TimesheetUidPidReducer } from "../Timesheet_Uid_Pid_State/Timesheet_Uid_Pid_Reducer";

const rootReducer = combineReducers({
    LoginReducer,
    ForgotPasswordReducer,
    ResetPasswordReducer,
    UpdatePasswordReducer,
    UserReducer,
    UsersListReducer,
    UserByIdReducer,
    EditUserReducer,
    ClientReducer,
    ClientsListReducer,
    EditClientReducer,
    ClientByIdReducer,
    ProjectReducer,
    ProjectsListReducer,
    EditProjectReducer,
    ProjectByIdReducer,
    UploadFileReducer,
    UsersListWithOutPagination,
    ClientsListWithOutPagination,
    ProjectUserReducer,
    TimesheetUidPidReducer,
});
const rootR = (state, action) => rootReducer(state, action);
export default rootR;
