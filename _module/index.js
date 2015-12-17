'use strict';

/**
 * _Module
 */

// Load Serverless ENV vars
var ServerlessHelpers = require('serverless-helpers-js').loadEnv();

// Export
module.exports = {
  models: {
    teams:          require('./models/team'),
    slack:          require('./models/slack')
  },
  controllers: {
    authorization:  require('./controllers/authorization'),
    slashcommands:  require('./controllers/slashcommands'),
    webhooks:       require('./controllers/webhooks')
  }
};