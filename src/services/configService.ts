interface Configuration {
  secrets?: Secrets;
}

interface Secrets {
  reddit: string;
  weatherApi: string;
}

const decode = (json: any, secretsJson?: any): Configuration => {
  let secretsObj: Secrets | undefined;
  if (secretsJson) {
    secretsObj = {
      reddit: secretsJson.redditSecret,
      weatherApi: secretsJson.weatherApiSecret
    };
  }

  return {
    secrets: secretsObj
  };
};

let config: Configuration;

export const getConfig = (): Configuration => {
  if (config) {
    return config;
  }

  const json = require('../config.json');
  let secretsJson: any | null = null;
  try {
    secretsJson = require('../config.secret.json');
  } catch (e) {
    // tslint:disable-next-line:no-console
    console.warn('config.secret.json not found');
  }

  config = decode(json, secretsJson);
  return config;
};
