import os
import requests
import llm
import course
import json
import db
from datetime import datetime
from nacl.signing import VerifyKey
from nacl.exceptions import BadSignatureError

DISCORD_PUBLIC_KEY = os.environ.get("DISCORD_PUBLIC_KEY")
MAX_QUERIES = 10

def verify(event):
    signature = event['headers']['x-signature-ed25519']
    timestamp = event['headers']['x-signature-timestamp']

    # validate the interaction

    verify_key = VerifyKey(bytes.fromhex(DISCORD_PUBLIC_KEY))

    message = timestamp + event['body']

    try:
        verify_key.verify(message.encode(), signature=bytes.fromhex(signature))
    except BadSignatureError:
        print("Bad signature")
        return False
    return True


def handler(event, context):
    try:
        # Verify the cryptographic Signature
        if not verify(event):
            return {'statusCode': 401, 'body': json.dumps('Unauthorized')}

        body = json.loads(event['body'])

        if body['type'] == 1:
            return {'statusCode': 200, 'body': json.dumps({'type': 1})}
        else:
            return interact(body)
    except:
        raise

def interact(raw_request):

    # Let discord know that this bot is alive
    if raw_request["type"] == 1:  # PING
        response_data = {"type": 1}  # PONG
    
    # Discord sends a request based on the slash command entered
    # This will intepret the request
    else:
        # Auxiliary Command Data. Used to extract arguments
        data = raw_request["data"]
        token = raw_request["token"]
        id = raw_request["id"]
        userID = raw_request["member"]["user"]["id"]
        print(userID)

        # The command being execute
        command_name = data["name"]

        if db.get_item("date") == -1:
            db.add_item("date", datetime.now().strftime("%Y-%m-%d"))
        else:
            date_string = db.get_item("date")
            current_date = datetime.strptime(date_string, "%Y-%m-%d")

            if current_date.month < datetime.now().month:
                db.reset_table()
            if current_date.year < datetime.now().year:
                db.reset_table()
            if current_date.day < datetime.now().day:
                db.reset_table()
                
            db.add_item("date", datetime.now().strftime("%Y-%m-%d"))

        match command_name:
            
            # Reset user Query Limits
            case "reset":
                send("Resetting Query Limits", id, token)
                db.reset_table()
                message_content = ":green_circle: Query Limits reset successfully!"
                update(message_content, token)
            # Command /hello
            case "hello":
                # message_content is the response to the user
                message_content = "Hello there!"

            # Command /echo
            case "echo":
                original_message = data["options"][0]["value"]
                message_content = f"Echoing: {original_message}"

            # Command /chat [arg1: message]
            case "chat":

                if db.get_item(userID) == -1:
                    db.add_item(userID, 0)
                
                if db.get_item(userID) >= MAX_QUERIES:
                    message_content = "You have reached the limit of 10 queries per day. Please wait for a while.\n"
                    message_content += ":red_circle: 10 / 10"
                else:
                    # Immediately send an interaction response back to discord to prevent a timeout
                    send(":sparkles: Rowdy is thinking :sparkles:", id, token)

                    # Invoke the LLM model
                    original_message = data["options"][0]["value"]
                    result = llm.invoke_llm(original_message, userID)

                    result += "\n :green_circle: " + str(db.get_item(userID) + 1) + " / 10"

                    # Edit the interaction response sent earlier
                    update(result, token)

                    newCount = db.get_item(userID) + 1
                    db.add_item(userID, newCount)

                    message_content = "None"

            # Command /weather [arg1: city]
            # Gets the weather in just Lowell for now. Ignores the argument for city
            case "weather":
                message_content = weather()

            # Command /course [arg1: COURSE ID] [arg2: option]
            case "course":
                course_id = data["options"][0]["value"]
                course_op = data["options"][1]["value"]
                message_content = course.course_info(course_op, course_id)

            # Command /pizza
            # Fun little command that prints pizza.
            case "pizza":
                message_content = "PIZZA! 🍕🍕🍕🍕🍕"

            # Command /dog
            # Sends a link embedded within the link's image of a dog   
            case "dog":
                message_content = dog()
        

    send(message_content, id, token)  # Send the message back to Discord
    return {}

# You can define dedicated functions for commands as well

def weather():
    response = requests.get('https://api.weather.gov/gridpoints/BOX/74,59/forecast')
    data = response.json()
    forecast = data['properties']['periods'][0]
    return f"Weather in Lowell, MA: {forecast['shortForecast']}, {forecast['temperature']}°{forecast['temperatureUnit']}"

def send(message, id, token):
    url = f"https://discord.com/api/interactions/{id}/{token}/callback"

    callback_data = {
        "type": 4,
        "data": {
            "content": message
        }
    }

    response = requests.post(url, json=callback_data)
    
    print("Response status code: ")
    print(response.status_code)

def update(message, token):
    app_id = os.environ.get("ID")

    url = f"https://discord.com/api/webhooks/{app_id}/{token}/messages/@original"

    # JSON data to send with the request
    data = {
        "content": message
    }

    # Send the PATCH request
    response = requests.patch(url, json=data)

    print("Response status code: ")
    print(response.status_code)

def dog():

    # Request content of page, then parse it with JSON-to-Python-dictionary function called .json()
    page = requests.get("https://dog.ceo/api/breeds/image/random").json()
    
    # Check if page status is not success. If it is not success, then return a fixed message
    if page["status"] != "success":
        return "No dog :("
    
    # Otherwise, get the URL value in the "message" key of the page Python dictionary, then return the URL
    get_dog = page["message"]
    return get_dog
