import boto3
import os
# from dotenv import load_dotenv

# load_dotenv()

DYNAMO_ID = os.getenv('AWS_ID')
DYNAMO_KEY = os.getenv('AWS_KEY')
DYNAMO_TABLE = os.getenv('DYNAMO_TABLE')


def reset_table():
    dynamodb = boto3.resource(
        'dynamodb',
        region_name='us-east-1',
        aws_access_key_id=DYNAMO_ID,
        aws_secret_access_key=DYNAMO_KEY
    )
    table = dynamodb.Table(DYNAMO_TABLE)
    table.delete()
    table.wait_until_not_exists()
    print("Table deleted Successfully")

    table = dynamodb.create_table(
        TableName=DYNAMO_TABLE,
        KeySchema=[
            {
                'AttributeName': 'userID',
                'KeyType': 'HASH'
            }
        ],
        AttributeDefinitions=[
            {
                'AttributeName': 'userID',
                'AttributeType': 'S'
            }
        ],
        ProvisionedThroughput={
            'ReadCapacityUnits': 5,
            'WriteCapacityUnits': 5
        }
    )
    table.wait_until_exists()
    print("Table reset successfully!")

def get_item(id):
    dynamodb = boto3.resource(
        'dynamodb',
        region_name='us-east-1',
        aws_access_key_id=DYNAMO_ID,
        aws_secret_access_key=DYNAMO_KEY
    )
    try:
        table = dynamodb.Table(DYNAMO_TABLE) 
        response = table.get_item(Key={"userID": id})
        item = response.get("Item")
        return item["Query"]
    except Exception:
        return -1


def add_item(id, value):
    dynamodb = boto3.resource(
        'dynamodb',
        region_name='us-east-1',
        aws_access_key_id=DYNAMO_ID,
        aws_secret_access_key=DYNAMO_KEY
    )

    table = dynamodb.Table(DYNAMO_TABLE)

    response = table.put_item(
        Item={
            'userID': id,
            'Query' : value,
        }
    )

    if response['ResponseMetadata']['HTTPStatusCode'] == 200:
        print("Item added successfully!")
    else:
        print("Error adding item.")