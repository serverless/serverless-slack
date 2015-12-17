/**
 * Controller: SlashCommands
 */

var Slack    = require('../models/slack'),
  qs       = require('qs'),
  response = { text: 'This is a default response' };

module.exports.receive = function(event, context) {

  var event = qs.parse(event.body);

  // Make sure the POST request came from Slack using the event token
  if (event.token != process.env.EVENT_TOKEN) {
    return context.done('Access Denied');
  }

  // Example Slash Command.
  if (event.command === '/hello') {
    response.text = 'Hey There!';
  }

  // Example Slash Command.
  if (event.command === '/myname') {
    response.text = 'Your name is ' + event.user_name;
  }

  return context.done(null, response);
};