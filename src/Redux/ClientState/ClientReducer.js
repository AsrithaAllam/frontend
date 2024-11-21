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
      loading: false,
      response: null,
      error: null,
      page: 0,
      size: 10
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
      return { ...state, loading: true, page: action.data.page, size: action.data.size };
    }
  
    if (action.type === ClientActionCreator.CLIENT_ACTION.RESPONSE_CLIENTS_LIST) {
<<<<<<< HEAD
      return { ...state, clientsResponse:action.data, clientsLoading: false };
=======
      return { ...state, response: action.data, loading: false };
>>>>>>> c15c0660379600978360684d599e2ffe69e4b827
    }
  
    if (action.type === ClientActionCreator.CLIENT_ACTION.ERROR_CLIENTS_LIST) {
      return { ...state, error: action.data, loading: false, response: null, page: 0, size: 10 };
    }
  
    return state; 
  };