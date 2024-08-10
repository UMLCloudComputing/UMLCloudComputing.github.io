---
sidebar_position: 3
---

### Discord Application Setup

1. Go to discord.dev and create a new application.

Navigate to application creation
![image](https://github.com/UMLCloudComputing/rowdybot/assets/136134023/faa98e19-935e-4d27-a37d-afccdbb9cc77)

Put the name of your application here and accept the terms of service.
![image](https://github.com/UMLCloudComputing/rowdybot/assets/136134023/cf796994-3e4d-4e8f-b208-0e191fa0a6d3)

2. Get your Bot ID, Secret Key, and Public Key. Examples of where you find them are below.

**Bot ID**:
![image](https://github.com/UMLCloudComputing/rowdybot/assets/136134023/fc627f8a-ef30-4a3a-a8e3-1fc1dff7884c)

**Secret Key**:
![image](https://github.com/UMLCloudComputing/rowdybot/assets/136134023/bead23af-2180-4ad3-a254-afb1d1d2121a)

**Public Key**:
![image](https://github.com/UMLCloudComputing/rowdybot/assets/136134023/595f713f-c415-4b1d-937f-86929e0c5e00)

Save these in your .env file as
```
TOKEN= <Secret Key>
ID= <Bot ID>
DISCORD_PUBLIC_KEY= <Public Key>
```