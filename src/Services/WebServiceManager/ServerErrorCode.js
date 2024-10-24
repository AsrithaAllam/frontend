export const HttpStatusCode = {
    NETWORK_CONNECTION: "Network Error",
    BAD_CREDENTIAL: 406,
    FORBIDDEN_REQUEST: 403,
    INVALID_REQUEST: 400,
    SERVICE_NOT_AVAILABLE: 503,
  };
  export class ErrorMessages {
    static statusMessage(code) {
      switch (code) {
        case HttpStatusCode.BAD_CREDENTIAL:
          return "Bad credentials";
  
        case HttpStatusCode.FORBIDDEN_REQUEST:
          return "Forbidden, Invalid data";  
  
        case HttpStatusCode.INVALID_REQUEST:
          return "Invalid Request";
  
        case HttpStatusCode.NETWORK_CONNECTION:
          return "No Internet";
  
        case HttpStatusCode.SERVICE_NOT_AVAILABLE:
          return "Service Unavailable";
  
        default:
          return "Something went wrong";
      }
    }
  
    static errorCode(error) {
      const errorObj = {
        message: error?.response?.data?.message,
        code: error?.response?.status,
        errorData: error?.response,
        error,
      };
      return errorObj;
    }
  
  }
  