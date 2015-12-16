/**
 * Slack SlashCommands Controller
 */

var Slack = require('../models/slack');

module.exports.hello = function(event, cb) {

  var text = 'Hey ' + event.user_name + '!';

  var response = {
    "text": text,
    "attachments": [
      {
        "text": text
      }
    ]
  };

  return cb(null, response);

};