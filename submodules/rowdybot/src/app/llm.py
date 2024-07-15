from umlnow import course, Search, API
import re
import course
import boto3
import json
import os

if __name__ == "__main__":
    from dotenv import *
    load_dotenv()

AWS_ID = os.getenv("AWS_ID")
AWS_KEY = os.getenv("AWS_KEY")
MAX_TOKEN = os.getenv("MAX_TOKEN", 256)
AGENT_ALIAS = os.getenv("AGENT_ALIAS")
AGENT_ID = os.getenv("AGENT_ID")
CITATION_BUCKET = os.getenv("CITATION_BUCKET")

def invoke_llm(input, userID):
    # Check if the user is asking about a course
    isCourse = LLMTitanLite(isCourseAugment(input))

    # Course specific question about UML
    if isCourse == "yes":
        # Regex that filters out course IDs
        list = course_process(input)

        # Decide what user is asking about for courses
        outputText = LLMTitanLite(UMLNowAugment(input))

        match outputText:
            case "prerequisites":
                result = course.course_info("prereq", list[0])

                prompt = "Please summarize the following prerequisites concisely\n"

                return LLMTitanLite(prompt + result)


                # parts = result.split("Co-req:")
                # pre = parts[0].strip()
                # co = parts[1].strip() if len(parts) > 1 else ""

                # if co == "":
                #     return f"The prerequisites of the course are {pre}"
                # return f"The prerequisites of {list[0]} are {pre} the co-requisites are {co}"

            case "name": 
                result = course.course_info("name", list[0])
                return f"The name of {list[0]} is {result}"

            case "credits": 
                name = course.course_info("name", list[0])
                result = course.course_info("credits", list[0])
                return f"The course {name} is worth {result} credits"

    else:
        return LLMTitanPremier(input, userID)

# Call The Titan Lite Model (No RAG Capabilities, only for decision making and scraping UML Now)
def LLMTitanLite(input):
    bedrock = boto3.client(
        service_name='bedrock-runtime', 
        region_name='us-east-1',
        aws_access_key_id=AWS_ID,
        aws_secret_access_key=AWS_KEY
        
    )

    modelId = 'amazon.titan-text-lite-v1'
    accept = 'application/json'
    contentType = 'application/json'
    body = json.dumps({
        "inputText": input,
        "textGenerationConfig":{
            "maxTokenCount": MAX_TOKEN,
            "stopSequences":[],
            "temperature":0,
            "topP":0.9
            }
    })

 
    response = bedrock.invoke_model(body=body, modelId=modelId, accept=accept, contentType=contentType)
    response_body = json.loads(response.get('body').read())
    return response_body.get('results')[0].get('outputText')

# Call the Titan Premier Model (RAG Capabilities)
def LLMTitanPremier(input, userID):
    bedrock = boto3.client(
        service_name='bedrock-agent-runtime', 
        region_name='us-east-1',
        aws_access_key_id=AWS_ID,
        aws_secret_access_key=AWS_KEY
            
    )   
    bedrockObj = bedrock.invoke_agent (
        agentAliasId=AGENT_ALIAS,
        agentId=AGENT_ID,
        inputText=input,
        sessionId=userID
    )

    print(bedrockObj)

    eventStream = bedrockObj['completion']
    for event in eventStream:
        print(event)
        if 'chunk' in event:
            data = event['chunk']['bytes'].decode('utf-8')
            returnString = data
        if 'attribution' in event['chunk']:
            for citations in event['chunk']['attribution']['citations']:
                for references in citations['retrievedReferences']:
                    uri = references['location']['s3Location']['uri']
                    filename = extract_filename(uri)
                    metadata = filename + ".json"

                    print(metadata)

                    s3 = boto3.client('s3', aws_access_key_id=AWS_ID, aws_secret_access_key=AWS_KEY)
                    obj = s3.get_object(Bucket=CITATION_BUCKET, Key=metadata)
                    data = json.loads(obj['Body'].read().decode('utf-8'))

                    returnString = returnString + "\n" + data['url']

    return returnString + "\n"

def extract_filename(s3_uri):
    # Regex pattern to match the filename at the end of the URI
    pattern = r'[^/]+$'
    # Search for the pattern in the URI and extract the filename
    match = re.search(pattern, s3_uri)
    if match:
        return match.group()
    else:
        return None

# Augmented Prompts

def UMLNowAugment(message):

    prompt_template3 = '''\n
    What is the user asking about for the course?? Choose from the following:
    prerequisites, name, credits.
    '''
    return message + prompt_template3

def isCourseAugment(message):
    prompt_template = '''\n
    Is the user asking about a course? Choose from the following:
    yes, no.
    '''
    return message + prompt_template

# Regex Matcher
def course_process(message):
    course_matches = []

    # Define the regex pattern for course identifiers
    course_pattern = r"(?i)([a-z]+)[ .]?(\d+)"

    # Search for matches in outputText and store them in the list
    matches = re.findall(course_pattern, message)
    for match in matches:
        # Format the match as 'PREFIX.NUMBER' and add to the list
        course_id = "{}.{}".format(match[0].upper(), match[1])
        course_matches.append(course_id)

    return course_matches





