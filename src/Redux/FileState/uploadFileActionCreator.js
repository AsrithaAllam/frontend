export const FILE_ACTION = {
  RESET_UPLOAD_FILE_STATE: "RESET_UPLOAD_FILE_STATE",
  REQUEST: "UPLOAD_FILE_REQUEST",
  ERROR: "UPLOAD_FILE_ERROR",
  RESPONSE: "UPLOAD_FILE_RESPONSE",
};


export const setResetStateuploadFile = () => ({
    type: FILE_ACTION.RESET_UPLOAD_FILE_STATE,
    data: undefined
  });
  
  export const requestUploadFileAction = (params) =>({
    type:FILE_ACTION.REQUEST,
    data: params
  })
  export const responseUploadFileAction = (res) => ({
    type: FILE_ACTION.RESPONSE,
    data: res
  });
  
  export const errorUploadFileAction = (err) => ({
    type: FILE_ACTION.ERROR,
    data: err
  });