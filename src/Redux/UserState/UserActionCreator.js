export const USER_ACTION = {
    RESET_USER_STATE: 'RESET_USER_STATE',
    REQUEST: 'USER_REQUEST',
    ERROR: 'USER_ERROR',
    RESPONSE: 'USER_RESPONSE'
  };

  export const setResetStateUser = () => ({
    type: USER_ACTION.RESET_USER_STATE,
    data: undefined
  });
  
  export const requestUserAction = (params) =>({
    type:USER_ACTION.REQUEST,
    data: params
  })
  export const responseUserAction = (res) => ({
    type: USER_ACTION.RESPONSE,
    data: res
  });
  
  export const errorUserAction = (err) => ({
    type: USER_ACTION.ERROR,
    data: err
  });
  