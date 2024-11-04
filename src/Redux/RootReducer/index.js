import { combineReducers } from "redux";
import  { ForgotPasswordReducer, LoginReducer, ResetPasswordReducer, UpdatePasswordReducer } from "../LoginState/LoginReducer";
import { UserByIdReducer, UserReducer, UsersListReducer } from "../UserState/UserReducer";

const rootReducer = combineReducers({
    LoginReducer,
    ForgotPasswordReducer,
    ResetPasswordReducer,
    UpdatePasswordReducer,
    UserReducer,
    UsersListReducer,
    UserByIdReducer,
});
const rootR = (state, action) => rootReducer(state, action);
export default rootR;
