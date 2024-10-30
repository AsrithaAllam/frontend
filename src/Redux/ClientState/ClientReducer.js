import * as ClientActionCreator from "./ClientActionCreator";


export function defaultClientState() {
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
  export const ClientReducer = (state, action) => {
    if (
      !state ||
      action.type === ClientActionCreator.CLIENT_ACTION.RESET_CLIENT_STATE
    ) {
      return { ...state, ...defaultClientState() };
    }
  
    if (action.type === ClientActionCreator.CLIENT_ACTION.REQUEST) {
      return { ...state, isLoading: true };
    }
  
    if (action.type === ClientActionCreator.CLIENT_ACTION.RESPONSE) {
      return { ...state, isResponse: action.data, isLoading: false };
    }
  
    if (action.type === ClientActionCreator.CLIENT_ACTION.ERROR) {
      return { ...state, isError: action.data, isLoading: false };
    }
  
    return state; 
  };
