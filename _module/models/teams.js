'use strict';

/**
 * Model: Team
 * - A Slack team that has authorized your Slack Application
 */

// Config DynamoDb
var AWS = require('aws-sdk');
var dynamodbDocClient = new AWS.DynamoDB.DocumentClient({
  accessKeyId:     process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region:          process.env.SERVERLESS_REGION
});
var tableName = 'serverless-slackbot-teams-' + process.env.SERVERLESS_DATA_MODEL_STAGE;

/**
 * Team Class
 * @constructor
 */

var Team = function() {};

/**
 * Show
 */

Team.prototype.show = function(teamId, cb) {

  var params = {
    TableName : tableName,
    Key: {
      id: teamId
    }
  };

  return dynamodbDocClient.get(params, cb);
};

/**
 * Create
 */

Team.prototype.create = function() {

};

/**
 * Update
 */

Team.prototype.update = function() {

};


module.exports = new Team();