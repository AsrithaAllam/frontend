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
