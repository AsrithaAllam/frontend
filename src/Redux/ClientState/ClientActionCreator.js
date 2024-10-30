export const CLIENT_ACTION = {
    RESET_CLIENT_STATE: 'RESET_CLIENT_STATE',
    REQUEST: 'CLIENT_REQUEST',
    ERROR: 'CLIENT_ERROR',
    RESPONSE: 'CLIENT_RESPONSE'
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
  