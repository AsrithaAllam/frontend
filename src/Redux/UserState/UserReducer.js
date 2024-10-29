import * as UserActionCreator from "./UserActionCreator";


export function defaultUserState() {
    return {
      isLoading: false,
      isResponse: null,
      isError: null,
    };
  }
  /**
   * User Reducer its take state and action
   * @param state
   * @param action
   */
  export const UserReducer = (state, action) => {
    if (
      !state ||
      action.type === UserActionCreator.USER_ACTION.RESET_USER_STATE
    ) {
      return { ...state, ...defaultUserState() };
    }
  
    if (action.type === UserActionCreator.USER_ACTION.REQUEST) {
      return { ...state, isLoading: true };
    }
  
    if (action.type === UserActionCreator.USER_ACTION.RESPONSE) {
      return { ...state, isResponse: action.data, isLoading: false };
    }
  
    if (action.type === UserActionCreator.USER_ACTION.ERROR) {
      return { ...state, isError: action.data, isLoading: false };
    }
  
    return state; 
  };
