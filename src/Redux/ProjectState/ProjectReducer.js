import * as ProjectActionCreator from "./ProjectActionCreator";


export function defaultProjectState() {
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
  export const ProjectReducer = (state, action) => {
    if (
      !state ||
      action.type === ProjectActionCreator.PROJECT_ACTION.RESET_PROJECT_STATE
    ) {
      return { ...state, ...defaultProjectState() };
    }
  
    if (action.type === ProjectActionCreator.PROJECT_ACTION.REQUEST) {
      return { ...state, isLoading: true };
    }
  
    if (action.type === ProjectActionCreator.PROJECT_ACTION.RESPONSE) {
      return { ...state, isResponse: action.data, isLoading: false };
    }
  
    if (action.type === ProjectActionCreator.PROJECT_ACTION.ERROR) {
      return { ...state, isError: action.data, isLoading: false };
    }
  
    return state; 
  };


  export function defaultProjectsListState() {
    return {
      usersLoading: false,
      usersResponse: null,
      usersError: null,
    };
  }

  export const ProjectsListReducer = (state, action) => {
    if (
      !state ||
      action.type === ProjectActionCreator.PROJECT_ACTION.RESET_PROJECTS_LIST_STATE
    ) {
      return { ...state, ...defaultProjectsListState() };
    }
  
    if (action.type === ProjectActionCreator.PROJECT_ACTION.REQUEST_PROJECTS_LIST) {
      return { ...state, projectsLoading: true };
    }
  
    if (action.type === ProjectActionCreator.PROJECT_ACTION.RESPONSE_PROJECTS_LIST) {
      return { ...state, projectsResponse: action.data, projectsLoading: false };
    }
  
    if (action.type === ProjectActionCreator.PROJECT_ACTION.ERROR_PROJECTS_LIST) {
      return { ...state, projectsError: action.data, projectsLoading: false };
    }
  
    return state; 
  };

  export function defaultEditProjectState() {
    return {
      Loading: false,
      Response: null,
      Error: null,
    };

  }
   export const EditProjectReducer = (state, action) => {
    if (
      !state ||
      action.type === ProjectActionCreator.PROJECT_ACTION.RESET_EDIT_PROJECT
    ) {
      return { ...state, ...defaultEditProjectState() };
    }
  
    if (action.type === ProjectActionCreator.PROJECT_ACTION.REQUEST_EDIT_PROJECT) {
      return { ...state, Loading: true };
    }
  
    if (action.type === ProjectActionCreator.PROJECT_ACTION.RESPONSE_EDIT_PROJECT) {
      return { ...state, Response: action.data,Loading: false };
    }
  
    if (action.type === ProjectActionCreator.PROJECT_ACTION.ERROR_EDIT_PROJECT) {
      return { ...state, Error: action.data, Loading: false };
    }
  
    return state; 
  };
  
  export function defaultProjectById() {
    return {
      byIdLoading: false,
      byIdResponse: null,
      byIdError: null,
    };
  }

  export const ProjectByIdReducer = (state, action) => {
    if (
      !state ||
      action.type === ProjectActionCreator.PROJECT_ACTION.RESET_PROJECT_BY_ID_STATE
    ) {
      return { ...state, ...defaultProjectById() };
    }
  
    if (action.type === ProjectActionCreator.PROJECT_ACTION.REQUEST_PROJECT_BY_ID) {
      return { ...state, byIdLoading: true };
    }
  
    if (action.type === ProjectActionCreator.PROJECT_ACTION.RESPONSE_PROJECT_BY_ID) {
      return { ...state, byIdResponse:action.payload , byIdLoading: true };
    }
  
    if (action.type === ProjectActionCreator.PROJECT_ACTION.ERROR_PROJECT_BY_ID) {
      return { ...state, byIdError: action.data, byIdLoading: false };
    }
  
    return state; 
  };


