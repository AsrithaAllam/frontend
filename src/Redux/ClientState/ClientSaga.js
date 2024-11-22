import { call, put, takeLatest } from "@redux-saga/core/effects";
import ClientService from "../../Services/RestApiManager/ClientManager/ClientService";
import { responseClientAction, errorClientAction, CLIENT_ACTION,responseClientsListAction,errorClientsListAction} from "./ClientActionCreator"

export function* clientRequest(action) {
    try {
      const response = yield call(ClientService.shared.clientRequest, action.data);
      yield put(responseClientAction(response));
    } catch (error) {
      yield put(errorClientAction(error));
    }
  }

 
  export function* clientsListRequest(action) {
    try {
      const response = yield call(ClientService.shared.clientsListRequest, action.data);
      yield put(responseClientsListAction(response));
    } catch (error) {
      yield put(errorClientsListAction(error));
    }
  }


  export function* clientWatcherSaga() {
    yield takeLatest(CLIENT_ACTION.REQUEST, clientRequest);
    yield takeLatest(CLIENT_ACTION.REQUEST_CLIENTS_LIST, clientsListRequest)
  }