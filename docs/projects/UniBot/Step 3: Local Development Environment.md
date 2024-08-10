---
sidebar_position: 4
---

### Local Development Setup
   
1. Install the tools listed in the Dependencies section of the README.md
2. Clone the repository to a your local device.
3. Make sure you have a `.env` file.
4. Add the following environmental variables `APP_NAME` and `PINECONE_URL` and `PINECONE_API_KEY` to the `.env` file.
```
# Discord
TOKEN=
ID=
DISCORD_PUBLIC_KEY=

APP_NAME=
PINECONE_URL = 
PINECONE_API_KEY =
```
5. Create an IAM user and give them full access to Amazon Bedrock, DynamoDB, S3, and AWS Lambda.
6. Run `aws configure` to setup your AWS credentials.
7. Create a Pinecone Account, and create a new index. Note down the URL of the Index in `PINECONE_URL`.
8. `aws secretsmanager create-secret --name MySecret --secret-string '{"apiKey":"12345"}'` to create a secret in AWS Secrets Manager. Replace   `12345` with your Pinecone API Key. Replace MySecret with the name of your secret.
9. `aws secretsmanager describe-secret --secret-id MySecret --query 'ARN' --output text` to get the ARN of the secret. Replace MySecret with the name of your secret.
10. Store the ARN in the `.env` file as `PINECONE_API_KEY`.