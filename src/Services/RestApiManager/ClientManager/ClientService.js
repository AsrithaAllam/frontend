import { ApiUrl } from "../../../Constants/Api";
import {
  REQUEST_METHOD,
  WebService,
} from "../../WebServiceManager/RequestService";
import ClientRequestBody from "./ClientRequestBody";

export default class ClientService {
  request = new ClientRequestBody();
  static shared = new ClientService();

  clientRequest = (payload) => {
    return new Promise((resolve, reject) => {
      WebService.clientShared
        .callServiceApi(
          ApiUrl.addClient(),
          this.request.clientRequest(payload, REQUEST_METHOD.POST)
        )
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  clientsListRequest = (payload) => {
    return new Promise((resolve, reject) => {
      WebService.clientShared
        .callServiceApi(
          ApiUrl.getAllClients(payload.page, payload.size, payload.search),
          this.request.clientsListRequest( REQUEST_METHOD.GET)
        )
        .then((response) => {
          resolve(response);
        }) 
        .catch((error) => {
          reject(error);
        });
    });
  }
}