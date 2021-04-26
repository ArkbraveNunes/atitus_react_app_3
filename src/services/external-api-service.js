import querystring from "query-string";
import { API_URL, API_TOKEN_PROD, API_TOKEN_DEV} from "@env";
import RequestFactory from '../factories/request-factory';

export default class ExternalApiService {
  constructor() {
    this.baseUrl = 'https://api.api-futebol.com.br';
    this.headers =  { 'Authorization': `Bearer live_ec011b9e3f4a03d66e449bf85c0e8a`};
    this.axios = new RequestFactory({});
  }

  async defaultGetRequest(url, headers) {
    try {
        const { data } = await this.axios.getInstance().get(`${this.baseUrl}${url}`, { headers: {...this.headers, ...headers} })
        return data;
    } catch (error) {
        console.log(error);
        const config = this.axios.errorHandler(error);
        throw config;
    }
  }

  getChampionships(id = null) {
    const url = `/v1/campeonatos/${id}`;
    return this.defaultGetRequest(url, {});
  }

  getChampionshipKeys(id, key = null) {
    const url = `/v1/campeonatos/${id}/fases/${key ? key : ``}`;
    return this.defaultGetRequest(url, {});
  }
};
