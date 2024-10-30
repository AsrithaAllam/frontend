import { call, put, takeLatest } from "@redux-saga/core/effects";
import ClientService from "../../Services/RestApiManager/ClientManager/ClientService";
import { responseClientAction, errorClientAction, CLIENT_ACTION} from "./ClientActionCreator"

export function* clientRequest(action) {
    try {
      const response = yield call(ClientService.shared.clientRequest, action.data);
      yield put(responseClientAction(response));
    } catch (error) {
      yield put(errorClientAction(error));
    }
  }


  export function* clientWatcherSaga() {
    yield takeLatest(CLIENT_ACTION.REQUEST, clientRequest);
  }