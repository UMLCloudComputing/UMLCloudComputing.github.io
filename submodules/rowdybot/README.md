![image](https://github.com/UMLCloudComputing/rowdybot/assets/136134023/7de8019c-f964-4835-a2c2-6975b4cdeea0)

<div align="center">

[![Contributors](https://img.shields.io/github/contributors/UMLCloudComputing/rowdybot.svg?style=for-the-badge)](https://github.com/UMLCloudComputing/rowdybot/graphs/contributors)
[![Forks](https://img.shields.io/github/forks/UMLCloudComputing/rowdybot.svg?style=for-the-badge)](https://github.com/UMLCloudComputing/rowdybot/network/members)
[![Stargazers](https://img.shields.io/github/stars/UMLCloudComputing/rowdybot.svg?style=for-the-badge)](https://github.com/UMLCloudComputing/rowdybot/stargazers)
[![Issues](https://img.shields.io/github/issues/UMLCloudComputing/rowdybot.svg?style=for-the-badge)](https://github.com/UMLCloudComputing/rowdybot/issues)
[![MIT License](https://img.shields.io/github/license/UMLCloudComputing/rowdybot.svg?style=for-the-badge)](https://github.com/UMLCloudComputing/rowdybot/blob/master/LICENSE)
</div>

## 📘 About
A Discord Bot to answers all your questions about UML! Has LLM integration to respond to a wide variety of questions.

## 👨‍💻 Contributing

Contributions are what make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

<details>
<summary>Creating a New Branch and Making a Pull Request</summary>

Follow these steps to contribute to the project with a new feature or bug fix:

### Step 1: Create a New Branch
Before starting your work, ensure you're on the `main` branch and that it's up to date.

```sh
git checkout main
git pull origin main
```

Create a new branch for your feature or bug fix. Follow a naming convention like `feature/<feature-name>` or `bugfix/<bug-name>`.

```sh
git checkout -b feature/my-new-feature
# or
git checkout -b bugfix/my-bug-fix
```

### Step 2: Make Your Changes
Implement your feature or fix the bug in your branch. Commit your changes using clear, concise, and conventional commit messages following the guidelines at [conventionalcommits.org](https://www.conventionalcommits.org).

```sh
git add .
git commit -m "feat: add my new feature"
# or
git commit -m "fix: correct a bug"
```

Optionally, if you assigned yourself an issue, you can automatically create and link a branch using the GitHub UI. Click on the "Create a branch" button and select the option to create a new branch for the issue.

### Step 3: Push Your Changes
Push your changes to the repository.

```sh
git push origin feature/my-new-feature
# or
git push origin bugfix/my-bug-fix
```

#### Style Guide
- Use clear, concise, and conventional commit messages. Commit messages should follow this specification https://www.conventionalcommits.org/en/v1.0.0/
- Follow the best software development practices and write clean, maintainable code.
- For ReactJS, follow this style guide: <https://dev.to/abrahamlawson/react-style-guide-24pp>. Except use indendantation of 4 spaces instead of 2.

### Step 4: Create a Pull Request
Go to the GitHub repository page and click on the "Pull request" button. Select your branch and provide a detailed description of your changes. Explain why your changes should be merged into the main branch.

### Step 5: Review and Merge
Wait for the project maintainers to review your pull request. They may request changes. Once your pull request is approved, a project maintainer will merge it into the main branch.

Thank you for your contribution!

</details>

## ⭐ How it works

<details>

<summary>Expand</summary>

The interaction model with the bot is asynchronous.

Upon executing a slash command, Discord will call the URL specified in "Interaction Endpoints URL" (which can be specified in the discord app development portal).
The result of discord calling this URL will execute our Lambda Function (which is created through running `cdk deploy` on this repository). The lambda function handles the interaction request and sends a response back to the user.

When the bot is not in use, the Lambda Function will not run, significantly saving costs compared to an EC2 instance.
</details>

## 🚀 Setting up.
<details>
<summary>Installing Dependencies</summary>

- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- [Node.JS](https://github.com/nvm-sh/nvm)
- Python `sudo apt install python3`
- AWS CDK `npm install -g aws-cdk`
- Pyyaml `pip install pyyaml`
- Requests `pip install requests`

</details>

<details>
<summary>Requesting Access to LLM Models</summary>

1. Head to your main AWS Dashboard and search for Amazon Bedrock. Click on Amazon Bedrock

![image](https://github.com/UMLCloudComputing/rowdybot/assets/136134023/26fdea83-2d4e-4a06-a4d1-e15071ec6b8e)

2. Click on Get Started

![image](https://github.com/UMLCloudComputing/rowdybot/assets/136134023/db7aa135-d3ea-494c-8048-c6e75f7c64ae)

Click on the Titan Models category and request access to Titan Text G1 - Premiere, Titan Text G1 - Lite, and Titan Text Embeddings v2
**If you're using the Cloud Computing Club account, then the necessary models have already been requested.**
![image](https://github.com/UMLCloudComputing/rowdybot/assets/136134023/a6b0b9c3-f5f2-402d-a41e-418e54f9aafb)

</details>

<details>
<summary>Setting up a new Discord Application</summary>

1. Go to discord.dev and create a new application.
2. Follow the documentation here to create a knowledge base that is connected to Pinecone https://docs.pinecone.io/integrations/amazon-bedrock

Navigate to application creation
![image](https://github.com/UMLCloudComputing/rowdybot/assets/136134023/faa98e19-935e-4d27-a37d-afccdbb9cc77)

Put the name of your application here and accept the terms of service.
![image](https://github.com/UMLCloudComputing/rowdybot/assets/136134023/cf796994-3e4d-4e8f-b208-0e191fa0a6d3)

6. Get your Bot ID, Secret Key, and Public Key. Examples of where you find them are below.

Bot ID:
![image](https://github.com/UMLCloudComputing/rowdybot/assets/136134023/fc627f8a-ef30-4a3a-a8e3-1fc1dff7884c)

Secret Key:
![image](https://github.com/UMLCloudComputing/rowdybot/assets/136134023/bead23af-2180-4ad3-a254-afb1d1d2121a)

Public Key:
![image](https://github.com/UMLCloudComputing/rowdybot/assets/136134023/595f713f-c415-4b1d-937f-86929e0c5e00)

7. Save them to a safe place. You will be needing these in the next step.
</details>

<details>
<summary>Development Setup</summary>
   
1. Install the tools listed in the Dependencies section of the README.md
2. Clone the repository to a your local device.
3. Create an IAM user and give them full access to Amazon Bedrock, DynamoDB, S3, and AWS Lambda.
4. Run `aws configure` to setup your AWS credentials.
5. Create a .env in the root of the repository. Enter your AWS credentials as such:
```
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
```
1. Create a DyanmoDB table and note down the name. You will need this in the following steps
2. Create an Amazon Bedrock Knowledge Base with these instructions https://docs.pinecone.io/integrations/amazon-bedrock. You may optionally create another S3 bucket to hold the citations for the files that get ingested into the LLM. You can do so by creating a file with the same filename as the file you'd like to cite with `.json` appended to the end of it. Add the key "url" in the json file and specify the source URL of the file. Make sure to note down the name of your Citation Bucket if you choose to make one.
3. Create an Amazon Bedrock Agent and attach a the knowledge base your created. Follow these instructions for the creation of an Agent https://docs.aws.amazon.com/bedrock/latest/userguide/agents-create.html
4. Create an alias for the Amazon Bedrock Agent https://docs.aws.amazon.com/bedrock/latest/userguide/agents-deploy.html. Note down both the ID of the Agent and the ID of the Alias. 
5. Save the following values that you noted down into your `.env` file .
```
TOKEN=<Discord Bot Secret Key>
ID=<Discord Bot ID>
DISCORD_PUBLIC_KEY=<Discord Bot Public Key>

# AWS Credentials
AWS_ACCESS_KEY_ID=<AWS Access Key ID>
AWS_SECRET_ACCESS_KEY=<AWS Access Secret Key>

# Resource IDs
LAMBDA_FUNC=<Lambda Function Name (name this whatever you want)>
DYNAMO_TABLE=<Name of your DynamoDB Table>
CITATION_BUCKET=<Name of your Citations Database (optional)>
AGENT_ID=<ID of the Amazon Bedrock Agent>
AGENT_ALIAS=<ID of the Amazon Bedrock Agent Alias>
```
8. Finally, run `cdk bootstrap` to setup the cdk project.

</details>

## 👉 Commands

<details>
<summary>Register Commands</summary>

1. Create an `.env` file in the root directory of the project. Do not upload this file to github, it contains secrets.
2. Make sure these environmental variables are in your `.env` file.
   1. `TOKEN=<your discord bot token>`
   2. `ID=<your discord bot ID>`
3. Enter new commands in this format, with each one on a new line in the file `commands/discord_commands.yaml`
```
- name: <name of your command>
  description: <command description>
  options:
    - name: <parameter 1>
      description: <parameter description>
      type: 3 # string
      required: true
    - name: <parameter 2>
      description: <parameter 2 description>
      type: 3 # string
      required: true
```
4. From your root directory, run `python3 register_commands.py`
5. You should receive the status `201` or `200` printing out in your terminal.
</details>

<details>
<summary>Define Commands</summary>

1. Commands can be defined in the file `src/app/main.py`
2. You can register commands in the `interact` function by adding more `elif` statements. 
   1. The parameters of the command that are received from the user is in encoded in the variable `data`. The statement `data["options"][n]["value"]` will extract the argument `n`.   
   2. The message that the bot returns to the user is specified in the string variable `message_content`. It is crucial that `message_content` is a string.
   3. Following the example of the `/weather` command, you may choose to call an external function that returns a string for better code readability.
  
</details>

## 📦 Deploying

<details>
<summary>Deployments</summary>

1. Run `cdk bootstrap` to setup the project for deployment.
2. Deploy to lambda by running `cdk deploy`.
3. If `cdk deploy` fails due to insufficient privileges to run docker, type `sudo cdk deploy`. If that doesn't work, type `sudo -i` to become root, `cd` back to the project root and run `cdk deploy` again.
4. If successful, `cdk deploy` should have this: `DiscordBotLambdaTest.ApiGatewayUrl = <Your API Gateway URL>` in the output.
5. Copy the API Gateway URL and go to your Discord Developer's Portal (discord.dev). Set this as Interactions Endpoint for your Bot.
![image](https://github.com/UMLCloudComputing/rowdybot/assets/136134023/6e0171af-3151-4223-9590-b7d9953aca39)


</details>

## 🏗 Technologies:

- ![AWS Lambda](https://img.shields.io/badge/AWS_Lambda-FF9900?style=for-the-badge&logo=awslambda&logoColor=white)
- ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
- ![Infastructure as Code](https://img.shields.io/badge/Infastructure_as_Code-FFA500?style=for-the-badge&logo=terraform&logoColor=white)
- ![Amazon Bedrock](https://img.shields.io/badge/Amazon_Bedrock-CA2C92?style=for-the-badge&logo=amazonbedrock&logoColor=white)



## 🎉 Invite link
[Invite Link](https://discord.com/oauth2/authorize?client_id=1241285489969856514&permissions=8&scope=bot%20applications.commands)

## 🎉 Acknowledgments

Many thanks to the [UMass Lowell Cloud Computing Club](https://umasslowellclubs.campuslabs.com/engage/organization/cloudcomputingclub) members, our faculty advisor [Dr. Johannes Weis](https://www.uml.edu/sciences/computer-science/people/weis-johannes.aspx), and the [UMass Lowell Computer Science Department](https://www.uml.edu/Sciences/computer-science/) for their support and guidance.



[![Contributors](https://contributors-img.web.app/image?repo=UMLCloudComputing/rowdybot)](https://github.com/UMLCloudComputing/rowdybot/graphs/contributors)

