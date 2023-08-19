import axiosBase from 'axios';

class ApiClient {

  constructor() {
    this.axios = axiosBase.create({
      baseURL: process.env.REACT_APP_HOST,
      // baseURL: 'http://localhost:8000',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Credentials': true,
      },
      responseType: 'json',
    });
  }

  async apiGet(url , query = {}){
    return await this.axios.get(url, { ...query });
  }

  async apiPost(url, body = {}){
    return await this.axios.post(url, body);
  }

  async apiPut(url, body = {}){
    return await this.axios.put(url, body);
  }

  async apiDelete(url , body = {}) {
    return await this.axios.delete(url, { data: body });
  }
}

export const apiClient = new ApiClient();