import axios from "axios";
import { ErrorMessages } from "./ServerErrorCode";
// import LOCAL_KEYS, {
//   parseLocalStorageJSON,
//   setToLocalStorage,
//   removeFromLocalStorage,
// } from "../../Utilites/LocalStorage";
// import { appMessages } from "../../Constants";
import { ApiUrl } from "../../Constants/Api/index";
import LOCAL_KEYS, { parseLocalStorageJSON, removeFromLocalStorage, setToLocalStorage } from "../../helpers/Localstorage";


export const REQUEST_METHOD = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH",
};

export class WebService {
  instance = axios.create();
  static clientShared = new WebService();

  constructor() {
    this.instance.interceptors.request.use(
      (config) => {
        const accessToken = parseLocalStorageJSON(LOCAL_KEYS.ACCESS_TOKEN);
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    this.instance.interceptors.response.use(
      async (response) => {
        return response;
      },
      async (error) => {
        const originalRequest = error.config;
        if (
          (error.response.status === 401) &&
          !originalRequest._retry
        ) {
          originalRequest._retry = true;
          try {
            const refreshToken = parseLocalStorageJSON(
              LOCAL_KEYS.REFRESH_TOKEN
            );
            const response = await this.instance.post(ApiUrl.refreshToken(), { refreshToken });
            const { access_token, refresh_token } = response.data;
            if (access_token && refresh_token) {
              setToLocalStorage(
                LOCAL_KEYS.ACCESS_TOKEN,
                access_token
              );
              setToLocalStorage(
                LOCAL_KEYS.REFRESH_TOKEN,
                refresh_token
              );
              originalRequest.headers.Authorization = `Bearer ${access_token}`;
            }
            return axios(originalRequest);
            
          } catch (error) {
            setTimeout(() => {
              console.log(error)
              // toast.error(appMessages.INVALID_SESSION);
            }, 2000);
            removeFromLocalStorage();
            window.location.reload();
          }
        }
        return Promise.reject(error);
      }
    );
  }

  getRequestMethod(request) {
    const requestMethods = {
      GET: "get",
      POST: "post",
      PUT: "put",
      DELETE: "delete",
      PATCH: "patch",
    };
    return requestMethods[request.method];
  }

  callServiceApi = async (url, request) => {
    try {
      const requestObj = {
        method: this.getRequestMethod(request),
        url,
        data: request.method === "GET" ? undefined : request.data,
        // params: request.method === "GET" ? request.data : undefined,
        headers: request.headers,
      };
      const response = await this.instance.request(requestObj);
      return Promise.resolve(response.data);
    } catch (error) {
      console.log(
        error,
        `---start------- \n request \n $  \n error URL ${url}`,
        request
      );
      return Promise.reject(ErrorMessages.errorCode(error));
    }
  };
}
