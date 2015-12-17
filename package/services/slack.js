'use strict';

/**
 * Service: Slack
 * - The Slack API
 */

// Instantiate Slack Client
var Slack = require('slack-node');

// Export
module.exports = function(teamToken) {

  // Requires API Token to instantiate
  return new Slack(teamToken);

};