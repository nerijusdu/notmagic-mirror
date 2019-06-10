import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const handleRequest = (method: any, hasData: boolean) => async (userConfig?: AxiosRequestConfig) => {
  try {
    const config = userConfig || {};
    let response: AxiosResponse<any>;
    if (hasData) {
      response = await method(config.url, config.data, config);
    } else {
      response = await method(config.url, config);
    }

    return response;
  } catch (e) {
    // tslint:disable-next-line:no-console
    console.warn('Network request error:', e);
    return null;
  }
};

export default {
  get: handleRequest(axios.get, false),
  post: handleRequest(axios.post, true)
};
