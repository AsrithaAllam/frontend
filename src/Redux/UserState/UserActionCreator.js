export const USER_ACTION = {
    RESET_USER_STATE: 'RESET_USER_STATE',
    REQUEST: 'USER_REQUEST',
    ERROR: 'USER_ERROR',
    RESPONSE: 'USER_RESPONSE',

    RESET_USERS_LIST_STATE: 'RESET_USERS_LIST_STATE',
    REQUEST_USERS_LIST:"REQUEST_USERS_LIST",
    RESPONSE_USERS_LIST:"RESPONSE_USERS_LIST",
    ERROR_USERS_LIST:"ERROR_USERS_LIST",

    RESET_USER_BY_ID_STATE :"RESET_USER_BY_ID_STATE",
    REQUEST_USER_BY_ID:"REQUEST_USER_BY_ID",
    RESPONSE_USER_BY_ID:"RESPONSE_USER_BY_ID",
    ERROR_USER_BY_ID:"ERROR_USER_BY_ID",

    RESET_EDIT_USER_STATE:"RESET_EDIT_USER",
    REQUEST_EDIT_USER:"REQUEST_EDIT_USER",
    RESPONSE_EDIT_USER:"RESPONSE_EDIT_USER",
    ERROR_EDIT_USER:"ERROR_EDIT_USER"
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

  export const setResetStateUsersList = () => ({
    type: USER_ACTION.RESET_USERS_LIST_STATE,
    data: undefined
  });
  
  export const requestUsersListAction = (params) =>({
    type:USER_ACTION.REQUEST_USERS_LIST,
    data: params
  })
  export const responseUsersListAction = (res) => ({
    type: USER_ACTION.RESPONSE_USERS_LIST,
    data: res
  });
  
  export const errorUsersListAction = (err) => ({
    type: USER_ACTION.ERROR_USERS_LIST,
    data: err
  });

  
  export const setResetStateUserById = () => ({
    type: USER_ACTION.RESET_USER_BY_ID_STATE,
    data: undefined
  });
  
  export const requestUserById = (params) =>({
    type:USER_ACTION.REQUEST_USER_BY_ID,
    data: params
  })
  export const responseUserById = (res) => ({
    type: USER_ACTION.RESPONSE_USER_BY_ID,
    data: res
  });
  
  export const errorUserById = (err) => ({
    type: USER_ACTION.ERROR_USER_BY_ID,
    data: err
  });

  export const setResetStateEditUser = () => ({
    type: USER_ACTION.RESET_EDIT_USER_STATE,
    data: undefined
  });
  
  export const requestEDITuser = (params) =>({
    type:USER_ACTION.REQUEST_EDIT_USER,
    data: params
  })
  export const responseEditUser = (res) => ({
    type: USER_ACTION.RESPONSE_EDIT_USER,
    data: res
  });
  
  export const errorEditUser= (err) => ({
    type: USER_ACTION.ERROR_EDIT_USER,
    data: err
  });
  