export const CLIENT_ACTION = {
    RESET_CLIENT_STATE: 'RESET_CLIENT_STATE',
    REQUEST: 'CLIENT_REQUEST',
    ERROR: 'CLIENT_ERROR',
    RESPONSE: 'CLIENT_RESPONSE',

    RESET_CLIENTS_LIST_STATE: 'RESET_CLIENTS_LIST_STATE',
    REQUEST_CLIENTS_LIST:"REQUEST_CLIENTS_LIST",
    RESPONSE_CLIENTS_LIST:"RESPONSE_CLIENTS_LIST",
    ERROR_CLIENTS_LIST:"ERROR_CLIENTS_LIST",
 
  };

  export const setResetStateClient = () => ({
    type: CLIENT_ACTION.RESET_CLIENT_STATE,
    data: undefined
  });
  
  export const requestClientAction = (params) =>({
    type:CLIENT_ACTION.REQUEST,
    data: params
  })
  export const responseClientAction = (res) => ({
    type: CLIENT_ACTION.RESPONSE,
    data: res
  });
  
  export const errorClientAction = (err) => ({
    type: CLIENT_ACTION.ERROR,
    data: err
  });




  export const setResetStateClientsList = () => ({
    type: CLIENT_ACTION.RESET_CLIENTS_LIST_STATE,
    data: undefined
  });
  
  export const requestClientsListAction = (params) =>({
    type: CLIENT_ACTION.REQUEST_CLIENTS_LIST,
    data: params
  })
  export const responseClientsListAction = (res) => ({
    type: CLIENT_ACTION.RESPONSE_CLIENTS_LIST,
    data: res
  });
  
  export const errorClientsListAction = (err) => ({
    type: CLIENT_ACTION.ERROR_CLIENTS_LIST,
    data: err
  });
  