import axios from "axios";

export default class RequestFactory {
  constructor({ baseUrl, auth, headers, timeout } = {}) {
    this.axios = axios.create({
      baseURL: baseUrl || '',
      auth: auth || {},
      headers: headers || {},
      timeout: timeout || 10000,
    });
    this.resultError = {};
  }

  getInstance() {
    return axios;
  }

  post(url = null, data = null, config = { auth: {}, headers: {} }) {
    return this.axios.post(url, data, config).then(result => result.data);
  }

  get(url = null, config = { auth: {}, headers: {} }) {
    return this.axios.get(url, config).then(result => result.data);
  }

  put(url = null, data = null, config = { auth: {}, headers: {} }) {
    return this.axios.put(url, data, config).then(result => result.data);
  }

  patch(url = null, data = null, config = { auth: {}, headers: {} }) {
    return this.axios.patch(url, data, config).then(result => result.data);
  }

  delete(url = null, config = { auth: {}, headers: {} }) {
    return this.axios.delete(url, config).then(result => result.data);
  }

  errorHandler(error) {
    if (error.code) {
      switch (error.code) {
        case 'ECONNABORTED':
          this.resultError = 'Timeout Error: Excedido o tempo limite de 10000 ms.';
          break;
        case 'ECONNREFUSED':
          this.resultError = 'Internal Error: Erro interno de comunicação com a Api externa';
          break;
        default:
          this.resultError = 'Unknown Error: Erro desconhecido.';
          break;
      }
    } else if (error.response && error.response.status >= 500) {
      this.resultError = 'External Error: Erro Desconhecido'
    } else {
      this.resultError = error.response.data;
    }
    return this.resultError;
  }
};
