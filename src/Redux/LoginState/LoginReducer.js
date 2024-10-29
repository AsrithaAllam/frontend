import * as LoginActionCreator from "./LoginActionCreator";

// export function getLoginState(state) {
//   return state.LoginReducer;
// }

export function defaultLoginInState() {
  return {
    isLoading: false,
    loginResponse: null,
    loginError: null,
  };
}
/**
 * Login Reducer its take state and action
 * @param state
 * @param action
 */
export const LoginReducer = (state, action) => {
  if (
    !state ||
    action.type === LoginActionCreator.LOGIN_ACTION.RESET_LOGIN_STATE
  ) {
    return { ...state, ...defaultLoginInState() };
  }

  if (action.type === LoginActionCreator.LOGIN_ACTION.REQUEST) {
    return { ...state, isLoading: true };
  }

  if (action.type === LoginActionCreator.LOGIN_ACTION.RESPONSE) {
    return { ...state, loginResponse: action.data, isLoading: false };
  }

  if (action.type === LoginActionCreator.LOGIN_ACTION.ERROR) {
    return { ...state, loginError: action.data, isLoading: false };
  }

  return state; 
};

export function defaultResetPasswordState() {
  return {
    resetLoading: false,
    resetResponse: null,
    resetError: null,
  };
}
  export const ResetPasswordReducer = (
    state = defaultResetPasswordState(),
    action
  ) => {
    switch (action.type) {
      case LoginActionCreator.LOGIN_ACTION.RESET_PASSWORD_STATE:
        return { ...state, ...defaultResetPasswordState() };

      case LoginActionCreator.LOGIN_ACTION.REQUEST_RESET_PASSWORD:
        return { ...state, resetLoading: true };

      case LoginActionCreator.LOGIN_ACTION.RESPONSE_RESET_PASSWORD:
        return { ...state, resetResponse: action.data, resetLoading: false };

      case LoginActionCreator.LOGIN_ACTION.ERROR_RESET_PASSWORD:
        return { ...state, resetError: action.data, resetLoading: false };

      default:
        return state;
    }
  };
  // forgot password
  export function defaultForgotPasswordState() {
    return {
      loading: false,
      response: null,
      error: null,
    };
  }
  export const ForgotPasswordReducer = (state, action) => {
    if (
      !state ||
      action.type ===
        LoginActionCreator.LOGIN_ACTION.RESET_FORGOT_PASSWORD_STATE
    ) {
      return { ...state, ...defaultForgotPasswordState() };
    }

    if (
      action.type === LoginActionCreator.LOGIN_ACTION.REQUEST_FORGOT_PASSWORD
    ) {
      return { ...state, loading: true };
    }

    if (
      action.type === LoginActionCreator.LOGIN_ACTION.RESPONSE_FORGOT_PASSWORD
    ) {
      return { ...state, response: action.data, loading: false };
    }

    if (action.type === LoginActionCreator.LOGIN_ACTION.ERROR_FORGOT_PASSWORD) {
      return { ...state, error: action.data, loading: false };
    }

    return state;
  };
  export function defaultUpdatePasswordState() {
    return {
      updateLoading: false,
      updateResponse: null,
      updateError: null,
    };
  
    
  }
  export const UpdatePasswordReducer = (state, action) => {
    if (
      !state ||
      action.type === LoginActionCreator.LOGIN_ACTION.RESET_UPDATE_PASSWORD_STATE
    ) {
      return { ...state, ...defaultUpdatePasswordState() };
    }
  
    if (action.type === LoginActionCreator.LOGIN_ACTION.REQUEST_UPDATE_PASSWORD) {
      return { ...state, updateLoading: true };
    }
  
    if (action.type === LoginActionCreator.LOGIN_ACTION.RESPONSE_UPDATE_PASSWORD) {
      return { ...state, updateResponse: action.data, updateLoading: false };
    }
  
    if (action.type === LoginActionCreator.LOGIN_ACTION.ERROR_UPDATE_PASSWORD) {
      return { ...state, updateError: action.data, updateLoading: false };
    }
  
    return state;
  };
  
  

