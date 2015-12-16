/**
 * Lib
 */

// Load Serverless ENV vars
var ServerlessHelpers = require('serverless-helpers-js').loadEnv();

// Load Controllers
var Auth     = require('./controllers/authorization');
var Commands = require('./controllers/commands');
var Webhooks = require('./controllers/webhooks');







// Default response
module.exports.respond = function(event, cb) {

  var response = {
    message: "Your Serverless function ran successfully!"
  };

  return cb(null, response);
};