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
      return { ...state, isResponse:action.data, isLoading: false };
    }
  
    if (action.type === ClientActionCreator.CLIENT_ACTION.ERROR) {
      return { ...state, isError: action.data, isLoading: false };
    }
  
    return state; 
  };


  export function defaultClientsListState() {
    return {
      usersLoading: false,
      usersResponse: null,
      usersError: null,
    };
  }

  export const ClientsListReducer = (state, action) => {
    if (
      !state ||
      action.type === ClientActionCreator.CLIENT_ACTION.RESET_CLIENTS_LIST_STATE
    ) {
      return { ...state, ...defaultClientsListState() };
    }
  
    if (action.type === ClientActionCreator.CLIENT_ACTION.REQUEST_CLIENTS_LIST) {
      return { ...state, clientsLoading: true };
    }
  
    if (action.type === ClientActionCreator.CLIENT_ACTION.RESPONSE_CLIENTS_LIST) {
      return { ...state, clientsResponse:action.data, clientsLoading: false };
    }
  
    if (action.type === ClientActionCreator.CLIENT_ACTION.ERROR_CLIENTS_LIST) {
      return { ...state, clientsError: action.data, clientsLoading: false };
    }
  
    return state; 
  };