import { combineReducers } from "redux";
import  { ForgotPasswordReducer, LoginReducer, ResetPasswordReducer, UpdatePasswordReducer } from "../LoginState/LoginReducer";
import { EditUserReducer, UserByIdReducer, UserReducer, UsersListReducer } from "../UserState/UserReducer";
import { ClientReducer, ClientsListReducer} from "../ClientState/ClientReducer";
import {EditProjectReducer, ProjectReducer,ProjectsListReducer} from "../ProjectState/ProjectReducer"
import {UploadFileReducer} from "../FileState/uploadFileReducer";

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
    ProjectReducer,
    ProjectsListReducer,
    EditProjectReducer,
    UploadFileReducer,
});
const rootR = (state, action) => rootReducer(state, action);
export default rootR;
