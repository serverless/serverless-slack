# serverless-slackbot

**Note:** Work in progress...

This is a Slackbot boilerplate that runs without servers (entirely on AWS Lambda).  It is designed to give you almost everything you need to build your own Slack Application and distribute it.

Unfortunately, this doesn't connect/support Slack's RTM (Websockets) API because AWS/Lambda do not support websockets.  But, it still can do tons of great stuff!

**The best part is there are no servers required for this Slackbot**.  You get charged only when its called and you don't need to worry about scaling :)

## Features:

* Handle Slack App Authorization and store Team data in DynamoDB
* Process Outgoing Webhooks (receive messages coming from Slack)
* Process Incoming Webhooks (post message to Slack)
* Process SlashCommands
* Loaded with [slack-node](https://github.com/clonn/slack-node-sdk) so you can access the full Slack API.
* Uses Lambda and DynamoDb which will allow you to auto-scale infinitely
* Multi-stage support for testing/production/multi-developer teams.

## Getting Started

[Register a Slack App](https://api.slack.com/applications)


In your Serverless project root directory, run:

```
serverless module install https://github.com/serverless/serverless-slackbot
```

Then deploy the resources that have been added to your Serverless Project's `resources-cd.json` template:

```
serverless deploy resources
```

Set these environment variables in your Serverless Project's Stage and Region, use `serverless env set`:

* SLACK_OAUTH_CLIENT_ID
* SLACK_OAUTH_CLIENT_SECRET
* SLACK_AUTH_REDIRECT_URL *(Optional - Only set this up if you set up a custom domain with API Gateway)*

Deploy the module's functions and endpoints.  Use the authorization endpoint as the **Redirect URI** for your Slack app.

You will have to [register some Slash Commands](https://api.slack.com/applications) for your app on Slack's site if you are interested in those.