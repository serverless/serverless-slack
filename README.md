# serverless-slackbot

Create webhooks and slash commands for your Slack team without servers.

In your Serverless project root directory, run:

```
serverless module install https://github.com/serverless/serverless-slackbot
```

## Creating Slash Commands

Once you install the module, a simple slash command webhook is created for you. If you open up `<module-dir>/slashcommands/s-function.json` you'll find all the information you need about the webhook.

## Creating Webhooks

## Accessing Slack API

## Environment Variables
You must set these environment variables in your Serverless Project's Stage and Region:

* SERVERLESS_REGION
* AWS_ACCESS_KEY_ID
* AWS_SECRET_ACCESS_KEY
* SLACK_OAUTH_CLIENT_ID
* SLACK_OAUTH_CLIENT_SECRET
* SLACK_AUTH_REDIRECT_URL *(Optional - Only set this up if you set up a custom domain with API Gateway)*