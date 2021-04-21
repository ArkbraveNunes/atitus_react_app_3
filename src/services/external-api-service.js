import querystring from "query-string";
import { API_URL, API_TOKEN_PROD, API_TOKEN_DEV} from "@env";
import RequestFactory from '../factories/request-factory';

export default class ExternalApiService {
  constructor() {
    this.baseUrl = API_URL;
    this.headers =  { 'Authorization': `Bearer ${API_TOKEN_DEV}`};
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
    const url = `/v1/campeonatos/${querystring.stringify({campeonato_id: id})}`;
    return this.defaultGetRequest(url, {});
  }
};
