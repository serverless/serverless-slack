'use strict';

var SlackSDK = require('slack-node'),
    Team     = require('./team');

/**
 * Slack
 * @constructor
 */

var Slack = function() {};

/**
 * Send Incoming Webhook
 * - Sends a message into Slack
 */

Slack.prototype.sendIncomingWebhook = function(teamId, options, cb) {

  // Find Team
  var team = new Team();
  team.show(teamId, function(error, slackTeam) {

    // Instantiate Slack
    var slackSdk = new SlackSDK(slackTeam.access_token);

    return slackSdk.webhook(options, cb);
  });
};

module.exports = Slack;