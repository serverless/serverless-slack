'use strict';

/**
 * Authorization Routes
 */

// Require Logic
var service = require('../_module');

// Authorize
module.exports.authorize = service.controllers.authorization.authorize;

// Receive Webhook
module.exports.receiveWebhook = service.controllers.webhooks.receive;

// Receive SlashCommand
module.exports.receiveSlashcommand = service.controllers.slashcommands.receive;