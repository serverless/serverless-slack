/**
 * Controller: Authorization
 * - Authorizes Slack via Oauth
 */

var Team = require('./teams'),
    request = require('request');

// Get Access Token
module.exports.getAccessToken = function(event, context) {

  // Prepare response to get Access Token
  var SlackClientId     = process.env.SLACK_OAUTH_CLIENT_ID;
  var SlackClientSecret = process.env.SLACK_OAUTH_CLIENT_SECRET;

  // Construct URL
  var url = 'https://slack.com/api/oauth.access?'
      + 'client_id=' + SlackClientId + '&'
      + 'client_secret=' + SlackClientSecret + '&'
      + 'code=' + event.code;

  // Add redirect url, if it is set as ENV
  if (process.env.SLACK_AUTH_REDIRECT_URL) {
    url = url + '&redirect_uri=' + process.env.SLACK_AUTH_REDIRECT_URL;
  }

  // Send request to get Access Token
  return request(url, function (error, response, body) {

    if (!error && response.statusCode == 200) {
      console.log(body);

      Team.show(body.team_id, function(error, team) {

        if (error) {

        } else {

        }


        // Return response
        return context.done(null, {
          message: ""
        });

      });

    } else {
      console.log(error, response, body);

      // Return error
      return context.done({
        message: "Sorry, something went wrong with the authorization process"
      });
    }
  });
};