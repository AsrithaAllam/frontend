export const ACCEPT_SERVICE = {
    APPLICATION_JSON: "application/json",
    MULTIPART_DATA: "multipart/form-data",
    FORM_URL_ENCODED: "application/x-www-form-urlencoded",
  };
  export const DEFAULT_AUTH_TOKEN = "Basic c3RyaXgtdWk6";
export const DEFAULT_ACCEPT_SERVICE = ACCEPT_SERVICE.FORM_URL_ENCODED;
export const GOOGLE_NETWORK_PING_URL =
  "https://clients3.google.com/generate_204";

  export const BASE_URL =`http://45.79.150.139:8081/unitrack/api/`;
  
export const AuthenticateUrl = `http://45.79.150.139:8081/unitrack/api/auth/authenticate`
export class ApiUrl {
    static loginRequest = () => {
      return BASE_URL + "auth/authenticate";
    };
    static forgotPasswordRequest = (email) =>{
      return BASE_URL + `auth/forgotpassword?email=${email}`;
    }
    static updatePasswordRequest = (id) =>{
      return BASE_URL + `user/${id}/update-password`;
    }
    static resetPasswordRequest = (token) =>{
      return BASE_URL +`auth/reset?token=${token}`;
    }
    static userRequest = () =>{
      return BASE_URL +"user";
    }
    static getAllUsers =() =>{
      return BASE_URL +"user/all"
    }
    static getUserById =(id)=>{
      return BASE_URL +`user/${id}`
    }
}
