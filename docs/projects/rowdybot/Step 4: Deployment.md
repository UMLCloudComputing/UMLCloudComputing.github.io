---
sidebar_position: 5
---

## 📦 Deploying

1. Run `cdk bootstrap` to setup the project for deployment.
2. Deploy to lambda by running `cdk deploy`.
3. If `cdk deploy` fails due to insufficient privileges to run docker, type `sudo cdk deploy`. If that doesn't work, type `sudo -i` to become root, `cd` back to the project root and run `cdk deploy` again.
4. If successful, `cdk deploy` should have this: `DiscordBotLambdaTest.ApiGatewayUrl = <Your API Gateway URL>` in the output.
5. Copy the API Gateway URL and go to your Discord Developer's Portal (discord.dev). Set this as Interactions Endpoint for your Bot.
![image](https://github.com/UMLCloudComputing/rowdybot/assets/136134023/6e0171af-3151-4223-9590-b7d9953aca39)