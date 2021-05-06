export enum EnvVar {
  remoteFlag = 'BUNDLEMON_REMOTE',
  projectId = 'BUNDLEMON_PROJECT_ID',
  projectApiKey = 'BUNDLEMON_PROJECT_APIKEY',
  serviceURL = 'BUNDLEMON_SERVICE_URL',
}

export const serviceUrl = process.env[EnvVar.serviceURL] || 'https://bundlemon.dev';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJSON = require('../../package.json');

export const version = packageJSON.version;
