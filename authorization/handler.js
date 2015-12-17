'use strict';

/**
 * Authorization Routes
 */

// Require Logic
var service = require('../_module');

// Lambda Handler
module.exports.getAccessToken = service.controllers.authorization.getAccessToken;