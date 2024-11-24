import * as ClientActionCreator from "./ClientActionCreator";


export function defaultClientState() {
    return {
      isLoading: false,
      isResponse: null,
      isError: null,
    };
  }
  

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
      return { ...state, response: action.data, loading: false };
    }
  
    if (action.type === ClientActionCreator.CLIENT_ACTION.ERROR_CLIENTS_LIST) {
      return { ...state, error: action.data, loading: false, response: null, page: 0, size: 10 };
    }
  
    return state; 
  };

  export function defaultEditClientState() {
    return {
      Loading: false,
      Response: null,
      Error: null,
    };

  }
   export const EditClientReducer = (state, action) => {
    if (
      !state ||
      action.type === ClientActionCreator.CLIENT_ACTION.RESET_EDIT_CLIENT
    ) {
      return { ...state, ...defaultEditClientState() };
    }
  
    if (action.type === ClientActionCreator.CLIENT_ACTION.REQUEST_EDIT_CLIENT) {
      return { ...state, Loading: true };
    }
  
    if (action.type === ClientActionCreator.CLIENT_ACTION.RESPONSE_EDIT_CLIENT) {
      return { ...state, Response: action.data,Loading: false };
    }
  
    if (action.type === ClientActionCreator.CLIENT_ACTION.ERROR_EDIT_CLIENT) {
      return { ...state, Error: action.data, Loading: false };
    }
  
    return state; 
  };

  export function defaultClientById() {
    return {
      byIdLoading: false,
      byIdResponse: null,
      byIdError: null,
    };
  }

  export const ClientByIdReducer = (state, action) => {
    if (
      !state ||
      action.type === ClientActionCreator.CLIENT_ACTION.RESET_CLIENT_BY_ID_STATE
    ) {
      return { ...state, ...defaultClientById() };
    }
  
    if (action.type === ClientActionCreator.CLIENT_ACTION.REQUEST_CLIENT_BY_ID) {
      return { ...state, byIdLoading: true };
    }
  
    if (action.type === ClientActionCreator.CLIENT_ACTION.RESPONSE_CLIENT_BY_ID) {
      return { ...state, byIdResponse:action.payload , byIdLoading: true };
    }
  
    if (action.type === ClientActionCreator.CLIENT_ACTION.ERROR_CLIENT_BY_ID) {
      return { ...state, byIdError: action.data, byIdLoading: false };
    }
  
    return state; 
  };

