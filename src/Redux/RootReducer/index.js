import { combineReducers } from "redux";
import  { ForgotPasswordReducer, LoginReducer, ResetPasswordReducer, UpdatePasswordReducer } from "../LoginState/LoginReducer";
import { EditUserReducer, UserByIdReducer, UserReducer, UsersListReducer } from "../UserState/UserReducer";
import { ClientReducer, ClientsListReducer} from "../ClientState/ClientReducer";
import {ProjectReducer,ProjectsListReducer} from "../ProjectState/ProjectReducer"
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
});
const rootR = (state, action) => rootReducer(state, action);
export default rootR;
