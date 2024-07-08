import requests
import boto3
import json
from bs4 import BeautifulSoup
from urllib.parse import urlparse
import streamlit as st
import streamlit_authenticator as stauth
import re
from io import BytesIO
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

S3_ID = os.getenv('AWS_ACCESS_KEY_ID')
S3_KEY = os.getenv('AWS_SECRET_ACCESS_KEY')

def ingest_data(knowledge_base, knowledge_source):
    client = boto3.client('bedrock-agent', aws_access_key_id=S3_ID, aws_secret_access_key=S3_KEY)
    response = client.start_ingestion_job(
        dataSourceId=knowledge_source,
        knowledgeBaseId=knowledge_base
    )

def load_from_database(dataBucket, metadataBucket):
    with open('urls.json', 'r') as file:
        urls = json.load(file)

    for list_item in urls['urls']:
        update_bucket(list_item, dataBucket, metadataBucket)
    

def download_html_and_create_json(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    html_content = soup

    parsed_url = urlparse(url)
    filename = re.sub(r'\W+', '_', parsed_url.netloc + parsed_url.path) + ".html"

    with open(filename, 'w') as file:
        file.write(html_content)

    url_data = {"urls": url}

    with open(filename + '.json', 'w') as json_file:
        json.dump(url_data, json_file)
    
    return filename

def update_bucket(url, bucket_name, source_bucket):
    s3 = boto3.client('s3', aws_access_key_id=S3_ID, aws_secret_access_key=S3_KEY)
    
    response = requests.get(url)
    html_content = response.content

    parsed_url = urlparse(url)
    filename = re.sub(r'\W+', '_', parsed_url.netloc + parsed_url.path) + ".html"

    s3.put_object(Bucket=bucket_name, Key=filename, Body=html_content)

    url_data = {"url": url}
    json_content = json.dumps(url_data).encode('utf-8')  # Convert to bytes

    s3.put_object(Bucket=source_bucket, Key=filename + '.json', Body=BytesIO(json_content))

    return filename

st.title('Knowledge Base Tools')

url = st.text_input('Enter the URL')

if st.button("Add URL to database"):
    with open('urls.json', 'r') as file:
        data = json.load(file)
        data['urls'].append(url)
    
    with open('urls.json', 'w') as file:
        json.dump(data, file)
    
    st.success('URL added to database.')

bucket = st.text_input('Enter the bucket name')
source = st.text_input('Enter the metadata bucket name')

with open('urls.json', 'r') as file:
    data = json.load(file)
    
    urls = data['urls']

    with st.sidebar:
        st.write("### URLs from JSON file:")
        for index, url in enumerate(urls, start=1):
            st.write(f"{index}. {url}")

if st.button("Load from Database"):
    load_from_database(bucket, source)

knowledge_base = st.text_input('Enter the knowledge base name')
knowledge_source = st.text_input('Enter the knowledge base source ID')

if st.button("Start Ingestion Job"):
    ingest_data(knowledge_base, knowledge_source)
