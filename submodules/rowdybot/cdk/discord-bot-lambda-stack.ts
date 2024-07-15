import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import 'dotenv/config';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

require('dotenv').config()

export class DiscordBotLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const dockerFunction = new lambda.DockerImageFunction(
      this,
      "DockerFunction",
      {
        code: lambda.DockerImageCode.fromImageAsset("./src"),
        memorySize: 1024,
        timeout: cdk.Duration.seconds(600),
        architecture: lambda.Architecture.X86_64,
        environment: {
          AWS_ID: process.env.AWS_ACCESS_KEY_ID ?? (() => { throw new Error("AWS_ACCESS_KEY_ID is not set"); })(),
          AWS_KEY: process.env.AWS_SECRET_ACCESS_KEY ?? (() => { throw new Error("AWS_SECRET_ACCESS_KEY is not set"); })(),
          ID: process.env.ID ?? (() => { throw new Error("Discord Bot ID is not set"); })(),
          DISCORD_PUBLIC_KEY: process.env.DISCORD_PUBLIC_KEY ?? (() => { throw new Error("Discord Public Key is not set"); })(),
          AGENT_ALIAS: process.env.AGENT_ALIAS ?? (() => { throw new Error("AGENT_ALIAS is not set"); })(),
          AGENT_ID: process.env.AGENT_ID ?? (() => { throw new Error("AGENT_ID is not set"); })(),
          CITATION_BUCKET: process.env.CITATION_BUCKET ?? (() => { throw new Error("CITATION_BUCKET is not set"); })(),
          DYNAMO_TABLE: process.env.DYNAMO_TABLE ?? (() => { throw new Error("DYNAMO_TABLE is not set"); })(),
        },
      }
    );

    const api = new apigateway.LambdaRestApi(this, `InteractionsAPI${id}`, {
      handler: dockerFunction,
      proxy: true,
    });

    const functionUrl = dockerFunction.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
      cors: {
        allowedOrigins: ["*"],
        allowedMethods: [lambda.HttpMethod.ALL],
        allowedHeaders: ["*"],
      },
    });

    new cdk.CfnOutput(this, "FunctionUrl", {
      value: functionUrl.url,
    });

    new cdk.CfnOutput(this, "ApiGatewayUrl", {
      value: api.url,
    }); 
  }
}
