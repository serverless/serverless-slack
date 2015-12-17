'use strict';

/**
 * Authorization Routes
 */

// Require Logic
var service = require('../package');

// Lambda Handler
module.exports.getAccessToken = service.controllers.authorization.getAccessToken;