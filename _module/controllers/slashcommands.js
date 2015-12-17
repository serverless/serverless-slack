/**
 * Controller: SlashCommands
 */

var Slack = require('../models/slack');

module.exports.receive = function(event, cb) {

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