export const CLIENT_ACTION = {
    RESET_CLIENT_STATE: 'RESET_CLIENT_STATE',
    REQUEST: 'CLIENT_REQUEST',
    ERROR: 'CLIENT_ERROR',
    RESPONSE: 'CLIENT_RESPONSE',

    RESET_CLIENTS_LIST_STATE: 'RESET_CLIENTS_LIST_STATE',
    REQUEST_CLIENTS_LIST:"REQUEST_CLIENTS_LIST",
    RESPONSE_CLIENTS_LIST:"RESPONSE_CLIENTS_LIST",
    ERROR_CLIENTS_LIST:"ERROR_CLIENTS_LIST",
 
    RESET_EDIT_CLIENT:"RESET_EDIT_CLIENT",
    REQUEST_EDIT_CLIENT:"REQUEST_EDIT_CLIENT",
    RESPONSE_EDIT_CLIENT:"RESPONSE_EDIT_CLIENT",
    ERROR_EDIT_CLIENT:"RESET_EDIT_CLIENT",

    RESET_CLIENT_BY_ID_STATE :"RESET_CLIENT_BY_ID_STATE",
    REQUEST_CLIENT_BY_ID:"REQUEST_CLIENT_BY_ID",
    RESPONSE_CLIENT_BY_ID:"RESPONSE_CLIENT_BY_ID",
    ERROR_CLIENT_BY_ID:"ERROR_CLIENT_BY_ID",
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
  

  export const setResetEditClient = () => ({
    type: CLIENT_ACTION.RESET_EDIT_CLIENT,
    data: undefined
  });
  
  export const requestEditClient = (params) =>({
    type:CLIENT_ACTION.REQUEST_EDIT_CLIENT,
    data: params
  })
  export const responseEditClient = (res) => ({
    type: CLIENT_ACTION.RESPONSE_EDIT_CLIENT,
    data: res
  });
  
  export const errorEditClient = (err) => ({
    type: CLIENT_ACTION.ERROR_EDIT_CLIENT,
    data: err
  });


  export const setResetStateClientById = () => ({
    type: CLIENT_ACTION.RESET_CLIENT_BY_ID_STATE,
    data: undefined
  });
  
  export const requestClientById = (params) =>({
    type:CLIENT_ACTION.REQUEST_CLIENT_BY_ID,
    data: params
  })
  export const responseClientById = (res) => ({
    type: CLIENT_ACTION.RESPONSE_CLIENT_BY_ID,
    data: res
  });
  
  export const errorClientById = (err) => ({
    type: CLIENT_ACTION.ERROR_CLIENT_BY_ID,
    data: err
  });