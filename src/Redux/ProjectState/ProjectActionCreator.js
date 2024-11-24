export const PROJECT_ACTION = {
    RESET_PROJECT_STATE: 'RESET_PROJECT_STATE',
    REQUEST: 'PROJECT_REQUEST',
    ERROR: 'PROJECT_ERROR',
    RESPONSE: 'PROJECT_RESPONSE',

    RESET_PROJECTS_LIST_STATE: 'RESET_PROJECTS_LIST_STATE',
    REQUEST_PROJECTS_LIST:"REQUEST_PROJECTS_LIST",
    RESPONSE_PROJECTS_LIST:"RESPONSE_PROJECTS_LIST",
    ERROR_PROJECTS_LIST:"ERROR_PROJECTS_LIST",

    RESET_EDIT_PROJECT:"RESET_EDIT_PROJECT",
    REQUEST_EDIT_PROJECT:"REQEST_EDIT_PROJECT",
    RESPONSE_EDIT_PROJECT:"RESPONSE_EDIT_PROJECT",
    ERROR_EDIT_PROJECT:"RESET_EDIT_PROJECT",

    RESET_PROJECT_BY_ID_STATE :"RESET_PROJECT_BY_ID_STATE",
    REQUEST_PROJECT_BY_ID:"REQUEST_PROJECT_BY_ID",
    RESPONSE_PROJECT_BY_ID:"RESPONSE_PROJECT_BY_ID",
    ERROR_PROJECT_BY_ID:"ERROR_PROJECT_BY_ID",
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


  export const setResetStateProjectsList = () => ({
    type: PROJECT_ACTION.RESET_PROJECTS_LIST_STATE,
    data: undefined
  });
  
  export const requestProjectsListAction = (params) =>({
    type:PROJECT_ACTION.REQUEST_PROJECTS_LIST,
    data: params
  });
  export const responseProjectsListAction = (res) => ({
    type: PROJECT_ACTION.RESPONSE_PROJECTS_LIST,
    data: res
  });
  
  export const errorProjectsListAction = (err) => ({
    type: PROJECT_ACTION.ERROR_PROJECTS_LIST,
    data: err
  });

  export const setResetEditProject = () => ({
    type: PROJECT_ACTION.RESET_EDIT_PROJECT,
    data: undefined
  });
  
  export const requestEditProject = (params) =>({
    type:PROJECT_ACTION.REQUEST_EDIT_PROJECT,
    data: params
  })
  export const responseEditProject = (res) => ({
    type: PROJECT_ACTION.RESPONSE_EDIT_PROJECT,
    data: res
  });
  
  export const errorEditProject = (err) => ({
    type: PROJECT_ACTION.ERROR_EDIT_PROJECT,
    data: err
  });

  export const setResetStateProjectById = () => ({
    type: PROJECT_ACTION.RESET_PROJECT_BY_ID_STATE,
    data: undefined
  });
  
  export const requestProjectById = (params) =>({
    type:PROJECT_ACTION.REQUEST_PROJECT_BY_ID,
    data: params
  })
  export const responseProjectById = (res) => ({
    type: PROJECT_ACTION.RESPONSE_PROJECT_BY_ID,
    data: res
  });
  
  export const errorProjectById = (err) => ({
    type: PROJECT_ACTION.ERROR_PROJECT_BY_ID,
    data: err
  });
  