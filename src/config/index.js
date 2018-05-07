import {get, merge} from 'lodash';

export type AppConfig = {
  appId: string;
  appName: string;
  env: string;
}

export type EnvConfig = {
  default: AppConfig;
  development: AppConfig;
  preprod: AppConfig;
  production: AppConfig;
  test: AppConfig;
}

export class Config {
  static values: EnvConfig = {
    default: {
      appId: 'arkhamjs-skeleton',
      env: process.env.NODE_ENV
    },
    development: {
      appName: 'Arkham Skeleton Development'
    },
    preprod: {
      appName: 'Arkham Skeleton Pre-Production'
    },
    production: {
      appName: 'Arkham Skeleton Production'
    },
    test: {
      appName: 'Arkham Skeleton Test'
    }
  };

  static get(path: string | string[]): any {
    const environment: string = process.env.NODE_ENV || 'development';
    const configValues: object = merge(this.values.default, this.values[environment], {environment});
    return get(configValues, path);
  }
}
