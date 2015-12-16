/**
 * Lib
 */

// Require Serverless ENV vars
var ServerlessHelpers = require('serverless-helpers-js').loadEnv();

// Instantiate Slack Client
var Slack             = require('slack-node'),
    SlackClientId     = process.env.SLACK_OAUTH_CLIENT_ID,
    SlackClientSecret = process.env.SLACK_OAUTH_CLIENT_SECRET;

module.exports = function(userId) {

  // Look up user and fetch token

  new Slack(slackApiToken);

};

//slack.api("users.list", function(err, response) {
//  console.log(response);
//});
//
//slack.api('chat.postMessage', {
//  text:'hello from nodejs',
//  channel:'#general'
//}, function(err, response){
//  console.log(response);
//});