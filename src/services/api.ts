import axios, { AxiosRequestConfig } from 'axios';

const handleRequest = (method: any, hasData: boolean) => async (config?: AxiosRequestConfig) => {
  try {
    config = config || {};
    if (hasData) {
      const response = await method(config.url, config.data, config);
      return response;
    }

    const response = await method(config.url, config);
    return response;
  }
  catch (e) {
    console.warn('Network request error:', e);
    return null;
  }
};

export default {
  get: handleRequest(axios.get, false),
  post: handleRequest(axios.post, true)
};
