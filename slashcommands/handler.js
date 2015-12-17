'use strict';

/**
 * Handlers: SlashCommands
 */

// Require Logic
var slashCommands = require('./slashcommands');

// Lambda Handler
module.exports.hello = function(event, context) {

  slashCommands.hello(event, function(error, response) {
    return context.done(error, response);
  });
};