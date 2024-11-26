import * as uploadFileActionCreator from "./uploadFileActionCreator";

export function defaultUploadFileState() {
    return {
      Loading: false,
      Response: null,
      Error: null,
    };
  }
  /**
   * User Reducer its take state and action
   * @param state
   * @param action
   */

  export const UploadFileReducer = (state, action) => {
    if (
      !state ||
      action.type === uploadFileActionCreator.FILE_ACTION.RESET_UPLOAD_FILE_STATE
    ) {
      return { ...state, ...defaultUploadFileState() };
    }
  
    if (action.type === uploadFileActionCreator.FILE_ACTION.REQUEST) {
      return { ...state, Loading: true };
    }
  
    if (action.type === uploadFileActionCreator.FILE_ACTION.RESPONSE) {
      return { ...state, Response: action.data, Loading: false };
    }
  
    if (action.type === uploadFileActionCreator.FILE_ACTION.ERROR) {
      return { ...state, Error: action.data, Loading: false };
    }
  
    return state; 
  };