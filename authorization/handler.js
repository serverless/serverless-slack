'use strict';

/**
 * Authorization Routes
 */

// Require Logic
var service = require('../lib');

// Lambda Handler
module.exports.getAccessToken = service.controllers.authorization.getAccessToken;