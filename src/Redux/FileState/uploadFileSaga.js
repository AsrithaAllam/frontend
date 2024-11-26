import { call, put, takeLatest } from "@redux-saga/core/effects";
import UploadFileService from "../../Services/RestApiManager/FileManager/UploadFileService";
import {  FILE_ACTION, errorUploadFileAction, responseUploadFileAction} from "./uploadFileActionCreator"

export function* uploadFileRequest(action) {
    try {
      const response = yield call(UploadFileService.shared.uploadFileRequest, action.data);
      yield put(responseUploadFileAction(response));
    } catch (error) {
      yield put(errorUploadFileAction(error));
    }
  }


export function* uploadFileWatcherSaga() {
    yield takeLatest(FILE_ACTION.REQUEST, uploadFileRequest);
  }