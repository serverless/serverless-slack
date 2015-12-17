/**
 * Controller: SlashCommands
 */

var Slack    = require('../models/slack'),
    response = { text: 'This is a default response' };

module.exports.receive = function(event, context) {

  // Make sure the POST request comes from Slack using the event token
  if (event.token != process.env.EVENT_TOKEN) {
    return context.done('Access Denied');
  }

  // Example Slash Command.
  if (event.command === '/hello') {
    response.text = 'Hey There!';
  }

  return context.done(null, response);
};