export class RequestBody {
    data;
    method;
    headers;
  
    constructor(method, header, body) {
      this.method = method;
      this.headers = header;
      this.data = body;
    }
  
    getFomData(body) {
      const formData = new FormData();
      for (const key in body) {
        if (Object.prototype.hasOwnProperty.call(body, key))
          formData.append(key, body[key]);
      }
      return formData;
    }
  
    getJsonRequest() {
      this.data = JSON.stringify(this.data);
      return this;
    }
  
    getFormDataRequest() {
      this.data = this.getFomData(this.data);
      return this;
    }
  }
  