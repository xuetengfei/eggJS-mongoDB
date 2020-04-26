/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1586246944727_7506';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    myAppName: 'egg-02',
    userDataInterface: 'https://randomuser.me/api/',
    logger: {
      dir: `${appInfo.root}/log`,
    },
  };

  config.mongoose = {
    clients: {
      user: {
        url: 'mongodb://127.0.0.1:27017',
        options: {
          useUnifiedTopology: true,
          dbName: 'user',
        },
      },
      test: {
        url: 'mongodb://127.0.0.1',
        options: {
          useUnifiedTopology: true,
          dbName: 'test',
        },
      },
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
