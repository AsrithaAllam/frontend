export const setToLocalStorage = (key, value) => {
    if (!key || typeof key !== "string") {
      throw new Error("Invalid key");
    }
  
    if (typeof value === "object") {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
  };
  
  export const parseLocalStorageJSON = (key) => {
    if (!key || typeof key !== "string") {
      throw new Error("Invalid key");
    }
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch {
      return localStorage.getItem(key);
    }
  };
  
  export const removeFromLocalStorage = () => {
    try {
      localStorage.clear();
    } catch {
      return false;
    }
  };
  
  const LOCAL_KEYS = {
    ACCESS_TOKEN: "accessToken",
    REFRESH_TOKEN: "refreshToken",
    USER_DETAILS: "userDetails",
  };
  
  export default LOCAL_KEYS;
  