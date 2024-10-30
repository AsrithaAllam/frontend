export const PROJECT_ACTION = {
    RESET_PROJECT_STATE: 'RESET_PROJECT_STATE',
    REQUEST: 'PROJECT_REQUEST',
    ERROR: 'PROJECT_ERROR',
    RESPONSE: 'PROJECT_RESPONSE'
  };

  export const setResetStateProject = () => ({
    type: PROJECT_ACTION.RESET_PROJECT_STATE,
    data: undefined
  });
  
  export const requestProjectAction = (params) =>({
    type:PROJECT_ACTION.REQUEST,
    data: params
  })
  export const responseProjectAction = (res) => ({
    type: PROJECT_ACTION.RESPONSE,
    data: res
  });
  
  export const errorProjectAction = (err) => ({
    type: PROJECT_ACTION.ERROR,
    data: err
  });
  