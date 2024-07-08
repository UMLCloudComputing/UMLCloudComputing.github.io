import requests
import json
import requests
import json

url = "https://www.uml.edu/api/website/az_directory/v1.0/links_by_letter"  # Replace with your desired URL

response = requests.get(url)
data = response.json()

urls = []

for letter in data:
    for links in letter['DirectoryLinks']:
        urls.append(links['Url'])

with open('urls.json', 'w') as file:
    json.dump({"urls": urls}, file)