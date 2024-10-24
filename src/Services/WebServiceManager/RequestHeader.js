import {
    ACCEPT_SERVICE,
    DEFAULT_ACCEPT_SERVICE,
    DEFAULT_AUTH_TOKEN,
  } from "../../Constants/Api/index";
  
  export class RequestHeader {
    accept = DEFAULT_ACCEPT_SERVICE;
    authorization = DEFAULT_AUTH_TOKEN;
    content_type = ACCEPT_SERVICE.APPLICATION_JSON;
  
    /**
     * get Application json setting for Header
     */
    applicationJson(authToken) {
      return {
        accept: ACCEPT_SERVICE.APPLICATION_JSON,
        authorization: authToken,
        "content-type": this.content_type,
      };
    }
  
    /**
     * get Multipart setting for Header
     */
    multiPartData(authToken) {
      return {
        Accept: ACCEPT_SERVICE.APPLICATION_JSON,
        authorization: authToken,
        "Content-type": ACCEPT_SERVICE.MULTIPART_DATA,
      };
    }
  
  
    /**
     * get Application json setting for Header without token
     */
    applicationJsonWithoutToken() {
      return {
        accept: ACCEPT_SERVICE.APPLICATION_JSON,
        'content-type': this.content_type,
      };
    }
  
  
  
  }
  