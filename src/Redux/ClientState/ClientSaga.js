import { call, put, takeLatest } from "@redux-saga/core/effects";
import ClientService from "../../Services/RestApiManager/ClientManager/ClientService";
import { responseClientAction, errorClientAction, CLIENT_ACTION,responseClientsListAction,errorClientsListAction,
  responseEditClient,errorEditClient,responseClientById,errorClientById,
} from "./ClientActionCreator"

export function* clientRequest(action) {
    try {
      console.log("action data is here",action.data);
      const response = yield call(ClientService.shared.clientRequest, action.data);
      yield put(responseClientAction(response));
    } catch (error) {
      yield put(errorClientAction(error));
    }
  }

  export function* clientByIdRequest(action) {
    try {
      const response = yield call(ClientService.shared.clientByIdRequest, action.data);
      yield put(responseClientById(response));
    } catch (error) {
      yield put(errorClientById(error));
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

  export function * editClientRequest (action){
    try{
      const response = yield call (ClientService.shared.editClientRequest,action.data);
      yield put(responseEditClient(response));
    }
    catch (error) {
      yield put(errorEditClient(error));
    }
  }

  export function* clientWatcherSaga() {
    yield takeLatest(CLIENT_ACTION.REQUEST, clientRequest);
    yield takeLatest(CLIENT_ACTION.REQUEST_CLIENTS_LIST, clientsListRequest);
    yield takeLatest(CLIENT_ACTION.REQUEST_EDIT_CLIENT, editClientRequest);
  }