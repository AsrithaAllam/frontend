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
    static getAllUsers =(page, size,search) =>{
      if(search && search.length >0){
         return BASE_URL +`user/all?page=${page}&size=${size}&search=${search}`;
      }else{
       return BASE_URL +`user/all?page=${page}&size=${size}`;
      }
    }
    static getAllUsersWithOUtPagination= () =>{
      return BASE_URL + `adminrest/users`;
    }

    static getAllClientsWithOUtPagination = () =>{
      return BASE_URL +`adminrest/clients`;
    }

    static getUserById =(id)=>{
      return BASE_URL +`user/${id}`
    }
    static editUser =(id) =>{
      return BASE_URL +`user/update/${id}`
    }
    static addClient = () =>{
      return BASE_URL +"adminrest/saveclient";
    }
    static getAllClients =(page, size, search) =>{
      if(search && search.length > 0){
        return BASE_URL +`adminrest/allclients?page=${page}&size=${size}&search=${search}`;
      }else{
        return BASE_URL +`adminrest/allclients?page=${page}&size=${size}`;
      }
    }
    static projectRequest = () =>{
      return BASE_URL +"adminrest/project";
    }
    static projectsListRequest = (page, size, search) =>{
      if(search && search.length > 0){
        return BASE_URL +`adminrest/allproject?page=${page}&size=${size}&search=${search}`;
      }else{
        return BASE_URL +`adminrest/allproject?page=${page}&size=${size}`;
      }
    }
   
    static uploadFile =() =>{
      return BASE_URL +'file'
    }

    static editProject =(id)=>{
      return BASE_URL +`adminrest/project/${id}`
    }
    static editClient=(id)=>{
      return BASE_URL +`adminrest/client/${id}`
   }
   static getClientById =(id)=>{
     return BASE_URL +`adminrest/client/${id}`
   }
   static getProjectById=(id)=>{
    return BASE_URL +`adminrest/project/${id}`
   }
   static projectUserAssociation =(id)=>{
    return BASE_URL +`adminrest/projects/${id}`
   }
   static TimesheetUidPidRequest =() =>{
    return BASE_URL +"";
   }

  }
