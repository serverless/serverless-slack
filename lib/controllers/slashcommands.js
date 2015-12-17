/**
 * Slack SlashCommands Controller
 */

var Slack = require('../services/slack');

module.exports.hello = function(event, cb) {

  var text = 'Hey There!';

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