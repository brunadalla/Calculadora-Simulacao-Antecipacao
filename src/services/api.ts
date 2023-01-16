import axios from "axios";

const instance = axios.create({
    baseURL: 'https://frontend-challenge-7bu3nxh76a-uc.a.run.app',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export default instance