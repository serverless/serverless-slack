/**
 * Controller: SlashCommands
 */

var Slack = require('../models/slack');

module.exports.receive = function(event, context) {

  //TODO: Check Verification Token (set as ENV var) to ensure request came from Slack

  console.log(event, context);

  return context.done(null, {
    message: "Sorry, something went wrong saving your team's information"
  });

};