'use strict';

/**
 * _Module
 */

// Load Serverless ENV vars
var ServerlessHelpers = require('serverless-helpers-js').loadEnv();

// Export
module.exports = {
  services: {
    slack:         require('./services/slack')
  },
  models: {
    teams:         require('./models/team')
  },
  controllers: {
    authorization: require('./controllers/authorization'),
    slashCommands: require('./controllers/slashcommands'),
    webhooks:      require('./controllers/webhooks')
  }
};