"use strict";(self.webpackChunkumlcloudcomputing=self.webpackChunkumlcloudcomputing||[]).push([[3485],{4829:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=i(4848),t=i(8453);const r={sidebar_position:5,slug:"/activities/part-1-aws-infrastructure-and-backend/5-creating-lambda-function"},o="Creating the Lambda Function",a={id:"activities/PhotoSky/Part 1: AWS Infrastructure and Backend/creating-lambda-function",title:"Creating the Lambda Function",description:"In this section, we'll implement the Lambda function that will handle our application logic for PhotoSky. This function will manage image uploads, retrievals, and deletions, interfacing with our S3 bucket and responding to API Gateway requests.",source:"@site/docs/activities/PhotoSky/Part 1: AWS Infrastructure and Backend/5-creating-lambda-function.md",sourceDirName:"activities/PhotoSky/Part 1: AWS Infrastructure and Backend",slug:"/activities/part-1-aws-infrastructure-and-backend/5-creating-lambda-function",permalink:"/docs/activities/part-1-aws-infrastructure-and-backend/5-creating-lambda-function",draft:!1,unlisted:!1,editUrl:"https://github.com/UMLCloudComputing/UMLCloudComputing.github.io/edit/main/docs/activities/PhotoSky/Part 1: AWS Infrastructure and Backend/5-creating-lambda-function.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,slug:"/activities/part-1-aws-infrastructure-and-backend/5-creating-lambda-function"},sidebar:"activitiesSidebar",previous:{title:"\ud83d\udd4b Implementing AWS CDK Stack",permalink:"/docs/activities/part-1-aws-infrastructure-and-backend/4-implementing-aws-cdk-stack"},next:{title:"Deploying and Testing the Backend",permalink:"/docs/activities/part-1-aws-infrastructure-and-backend/6-deploying-and-testing-backend"}},l={},d=[{value:"Understanding the Role of Our Lambda Function",id:"understanding-the-role-of-our-lambda-function",level:2},{value:"Setting Up the Lambda Function",id:"setting-up-the-lambda-function",level:2},{value:"Implementing S3.py",id:"implementing-s3py",level:3},{value:"Implementing main.py",id:"implementing-mainpy",level:3},{value:"Understanding the Lambda Function in more detail",id:"understanding-the-lambda-function-in-more-detail",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"creating-the-lambda-function",children:"Creating the Lambda Function"})}),"\n",(0,s.jsx)(n.p,{children:"In this section, we'll implement the Lambda function that will handle our application logic for PhotoSky. This function will manage image uploads, retrievals, and deletions, interfacing with our S3 bucket and responding to API Gateway requests."}),"\n",(0,s.jsx)(n.h2,{id:"understanding-the-role-of-our-lambda-function",children:"Understanding the Role of Our Lambda Function"}),"\n",(0,s.jsx)(n.p,{children:"Our Lambda function will serve as the backend for PhotoSky, handling several key operations:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Generating presigned URLs for S3 uploads and downloads"}),"\n",(0,s.jsx)(n.li,{children:"Listing images in the S3 bucket"}),"\n",(0,s.jsx)(n.li,{children:"Creating preview images"}),"\n",(0,s.jsx)(n.li,{children:"Deleting images from the S3 bucket"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"setting-up-the-lambda-function",children:"Setting Up the Lambda Function"}),"\n",(0,s.jsxs)(n.p,{children:["Our Lambda function is defined in two main files: ",(0,s.jsx)(n.code,{children:"main.py"})," and ",(0,s.jsx)(n.code,{children:"S3.py"}),". These files are both located in ",(0,s.jsx)(n.code,{children:"src/app/"}),". ",(0,s.jsx)("br",{}),"\nLet's implement these files step by step."]}),"\n",(0,s.jsx)(n.h3,{id:"implementing-s3py",children:"Implementing S3.py"}),"\n",(0,s.jsxs)(n.p,{children:["First, let's modify our ",(0,s.jsx)(n.code,{children:"S3.py"})," file, which will contain our S3 utility class:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate to the ",(0,s.jsx)(n.code,{children:"src/app"})," directory from the proejct's root directory using the terminal:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd src/app\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create (if it's not already there) and open ",(0,s.jsx)(n.code,{children:"S3.py"})," in your text editor."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Within Github Codespaces and VS Code, the file can be created by graphically navigating to ",(0,s.jsx)(n.code,{children:"src/app/"})," and then right clicking and choosing to create a new file."]})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Add the following code to ",(0,s.jsx)(n.code,{children:"S3.py"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import boto3\nimport logging\nfrom PIL import Image\nimport io\nfrom botocore.exceptions import ClientError\n"})}),"\n",(0,s.jsx)(n.p,{children:"The code above specifies our imports."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["We'll use the Pillow library (",(0,s.jsx)(n.code,{children:"PIL"}),") to process Image data."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"boto3"})," library will be used to create a S3 client. ",(0,s.jsx)(n.code,{children:"boto3"})," is the AWS Python SDK which can be used to create, configure, and manage AWS services. Read more @ the ",(0,s.jsx)(n.a,{href:"https://boto3.amazonaws.com/v1/documentation/api/latest/index.html",children:"docs"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"io"})," library will be used in conjunction with Pillow to process images."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"logging"})," and ",(0,s.jsx)(n.code,{children:"botocore.exceptions"})," are used for logging and ",(0,s.jsx)(n.code,{children:"boto3"})," exception handling. ",(0,s.jsx)("br",{})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class S3:\n    def __init__(self, bucket_name):\n        self.client = boto3.client('s3')\n        self.bucket_name = bucket_name\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We start by defining our S3 class. This class will encapsulate all S3 operations, acting as a wrapper for boto3 client operations for S3. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"    def object_exists(self, object_name):\n        try:\n            self.client.head_object(Bucket=self.bucket_name, Key=object_name)\n            return True\n        except ClientError:\n            return False\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"object_exists"})," function checks whether the specified bucket exists by analyzing it's metadata (",(0,s.jsx)(n.code,{children:"self.client.head_object"}),"). This is useful to shortcircuit and verify other operations.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:"{4-7, 9-19, 21-30} showLineNumbers",children:'   def create_preview_image(self, object_name, result_width=100, result_height=100):\n       try:\n           original_image = self.client.get_object(Bucket=self.bucket_name, Key=object_name)\n           image_data = original_image[\'Body\'].read()\n           image = Image.open(io.BytesIO(image_data))\n\n           # Crop and resize logic\n           width, height = image.size\n           min_dimension = min(width, height)\n           left = (width - min_dimension) / 2\n           top = (height - min_dimension) / 2\n           right = (width + min_dimension) / 2\n           bottom = (height + min_dimension) / 2\n\n           cropped = image.crop((left, top, right, bottom))\n           preview_image = cropped.resize((result_width, result_height))\n\n           # Save the preview image\n           preview_image_bytes = io.BytesIO()\n           preview_image.save(preview_image_bytes, format=image.format)\n           preview_image_bytes.seek(0)\n\n           preview_object_name = f"preview_{object_name}"\n           self.client.put_object(Bucket=self.bucket_name, Key=preview_object_name, Body=preview_image_bytes)\n\n           return preview_object_name\n\n       except ClientError as e:\n           logging.error(f"Error creating preview image: {e}")\n           return None\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"create_preview_image"})," function handles the process of creating a preview image for an image within an the S3 bucket. This is used by the front-end when it attempts to display previews of images stored in your library. ",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"\nNotice the use of Pillow. It's critical to perform the image resizes and build a thumbnail preview.\nThe process can be described as follows:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Obtain the image and read it into an object using ",(0,s.jsx)(n.code,{children:"Image"})]}),"\n",(0,s.jsxs)(n.li,{children:["Resize the image to a specified size (",(0,s.jsx)(n.code,{children:"result_width"})," & ",(0,s.jsx)(n.code,{children:"result_height"}),")."]}),"\n",(0,s.jsx)(n.li,{children:"Place the preview image back into our S3 bucket with a specific key name to indicate that it's a preview for a particular object."}),"\n",(0,s.jsxs)(n.li,{children:["If the client fails to obtain an image, log the error and return ",(0,s.jsx)(n.code,{children:"None"}),"."]}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"   def create_presigned_post(self, object_name, fields=None, conditions=None, expiration=3600):\n       try:\n           response = self.client.generate_presigned_post(\n               Bucket=self.bucket_name,\n               Key=object_name,\n               Fields=fields,\n               Conditions=conditions,\n               ExpiresIn=expiration\n           )\n           return response\n       except ClientError as e:\n           logging.error(f\"Error creating presigned POST URL: {e}\")\n           return None\n\n   def create_presigned_get(self, object_name, expiration=3600):\n       try:\n           response = self.client.generate_presigned_url(\n               'get_object',\n               Params={'Bucket': self.bucket_name, 'Key': object_name},\n               ExpiresIn=expiration\n           )\n           return response\n       except ClientError as e:\n           logging.error(f\"Error creating presigned GET URL: {e}\")\n           return None\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"create_presigned_post"})," & ",(0,s.jsx)(n.code,{children:"create_presigned_get"})," are intended to handle ",(0,s.jsx)(n.code,{children:"POST"})," and ",(0,s.jsx)(n.code,{children:"GET"})," requests with a presigned URL. This presigned URL allows for an image to be temporarily visible for individuals without access permissions for our AWS resources. As functions, these are quite simple, they only make the appropriate calls using the ",(0,s.jsx)(n.code,{children:"boto3"})," library to obtain presigned URLs for the respective requests. They also implement exception handling & logging. They do not do any additional processing with the obtained response and simply pass it forwards using the return statement. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"   def list_images(self):\n       try:\n           response = self.client.list_objects_v2(Bucket=self.bucket_name)\n           images = []\n           if 'Contents' in response:\n               for obj in response['Contents']:\n                   images.append({'id': obj['Key'], 'url': self.create_presigned_get(obj['Key'])})\n           return images\n       except ClientError as e:\n           logging.error(f\"Error listing images: {e}\")\n           return []\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"list_images"})," function is used to get a list of the images within our S3 bucket. Again, this utilizes the ",(0,s.jsx)(n.code,{children:"boto3"})," library obtain the results. The list of images are accumulated with each image being a dictionary of it's ",(0,s.jsx)(n.code,{children:"id"})," and it's ",(0,s.jsx)(n.code,{children:"url"})," (presigned url) using our recently created function ",(0,s.jsx)(n.code,{children:"create_presigned_get"}),". As is true with all the functions above, exception handling and logging is implemented."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'   def delete_image(self, object_name):\n       try:\n           self.client.delete_object(Bucket=self.bucket_name, Key=object_name)\n           return True\n       except ClientError as e:\n           logging.error(f"Error deleting image: {e}")\n           return False\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"delete_image"})," function processes image deletion by acting as a wrapper function over ",(0,s.jsx)(n.code,{children:"boto3"}),"'s ",(0,s.jsx)(n.code,{children:"delete_object"})," function for the S3 client. Again, exception handling and logging is implemented."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This ",(0,s.jsx)(n.code,{children:"S3"})," class provides methods for interacting with our S3 bucket, including creating preview images, generating presigned URLs, listing images, and deleting images. Note the enhanced exception handling and logging throughout the class."]}),"\n",(0,s.jsx)(n.h3,{id:"implementing-mainpy",children:"Implementing main.py"}),"\n",(0,s.jsxs)(n.p,{children:["Now, let's implement ",(0,s.jsx)(n.code,{children:"main.py"})," within ",(0,s.jsx)(n.code,{children:"src/app/"}),", which will handle our API requests:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create (if it doesn't already exist) and open ",(0,s.jsx)(n.code,{children:"main.py"})," in your text editor."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Add the following code to ",(0,s.jsx)(n.code,{children:"main.py"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import json\nimport os\nimport logging\nfrom S3 import S3\n"})}),"\n",(0,s.jsx)(n.p,{children:"The imports above define the kinds of operations we'll be using."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Configure logging\nlogging.basicConfig(level=logging.INFO)\nlogger = logging.getLogger(__name__)\n"})}),"\n",(0,s.jsx)(n.p,{children:"As a best practice, we configure logging to keep track of how our stack is working."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def handler(event, context):\n    s3 = S3(os.getenv(\"BUCKET_NAME\"))\n    method = event['httpMethod']\n    path = event['path']\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Here we define our ",(0,s.jsx)(n.code,{children:"handler"})," function to process incoming API requests. These requests will follow the REST format of HTTP requests."]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"   # CORS headers\n   headers = {\n       'Access-Control-Allow-Origin': '*',\n       'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',\n       'Access-Control-Allow-Headers': 'Content-Type',\n       'Access-Control-Allow-Credentials': 'true'\n   }\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We utilize these CORS headers to specify access control on our S3 Bucket. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Access-Control-Allow-Origin"})," specifies whether the response can be shared with requesting code from the speciefied origin."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Access-Control-Allow-Methods"})," specifies which RESTful methods can be used on the S3 Bucket."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Access-Control-Allow-Headers"})," specifies which HTTP headers can be used during the actual request."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Access-Control-Allow-Credentials"})," notifies the browser whether the server allows cross-origin HTTP requests to include credentials."]}),"\n",(0,s.jsxs)(n.li,{children:["For more info check out ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers",children:"MDN Web Docs"}),"."]}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"   # Handle CORS preflight requests\n   if method == 'OPTIONS':\n       return {\n           'statusCode': 200,\n           'headers': headers,\n           'body': json.dumps({'message': 'CORS preflight successful'})\n       }\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The code above enables our lamdba function to handle the ",(0,s.jsx)(n.code,{children:"OPTIONS"})," method. This request handles all CORS preflight requests.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"   try:\n       # Handle GET /list-images\n       if method == 'GET' and path == '/list-images':\n           images = s3.list_images()\n           return {\n               'statusCode': 200,\n               'headers': headers,\n               'body': json.dumps({'images': images})\n           }\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The code above handles the ",(0,s.jsx)(n.code,{children:"GET"})," method requests specifically to list images. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"       # Handle POST /get-presigned-url\n       elif method == 'POST' and path == '/get-presigned-url':\n           body = json.loads(event['body'])\n           filename = body.get('filename')\n           filetype = body.get('filetype')\n\n           if not filename or not filetype:\n               return {\n                   'statusCode': 400,\n                   'headers': headers,\n                   'body': json.dumps({'message': 'Filename and filetype required'})\n               }\n\n           presigned_url = s3.create_presigned_post(filename, conditions=None)\n           if presigned_url:\n               return {\n                   'statusCode': 200,\n                   'headers': headers,\n                   'body': json.dumps(presigned_url)\n               }\n           else:\n               raise Exception('Error generating presigned URL')\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The code above handles the ",(0,s.jsx)(n.code,{children:"POST"})," method requests with the functionality to create presigned URLs. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"       # Handle DELETE /delete-image/{filename}\n       elif method == 'DELETE' and path.startswith('/delete-image/'):\n           filename = path.split('/')[-1]\n\n           if not s3.object_exists(filename):\n               return {\n                   'statusCode': 404,\n                   'headers': headers,\n                   'body': json.dumps({'message': 'File not found'})\n               }\n\n           if s3.delete_image(filename):\n               return {\n                   'statusCode': 200,\n                   'headers': headers,\n                   'body': json.dumps({'message': 'Image deleted successfully'})\n               }\n           else:\n               raise Exception('Error deleting image')\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The code above handles the ",(0,s.jsx)(n.code,{children:"DELETE"})," method requests. It's used to perform deletions of images on our S3 bucket. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"       # Handle GET /{filename} for downloading images and creating previews\n       elif method == 'GET':\n           query = event['queryStringParameters']\n           filename = path.lstrip('/')\n\n           if query and query.get('preview'):\n               if s3.object_exists(filename):\n                   if not s3.object_exists(\"preview_\" + filename):\n                       logger.info(\"Creating preview image\")\n                       preview_filename = s3.create_preview_image(filename)\n                       if not preview_filename:\n                           raise Exception('Error creating preview image')\n                   filename = \"preview_\" + filename\n               else:\n                   return {\n                       'statusCode': 404,\n                       'headers': headers,\n                       'body': json.dumps({'message': 'File not found'})\n                   }\n\n           presigned_url = s3.create_presigned_get(filename)\n           if presigned_url:\n               return {\n                   'statusCode': 200,\n                   'headers': headers,\n                   'body': json.dumps({'url': presigned_url})\n               }\n           else:\n               raise Exception('Error generating presigned URL')\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The code above handles the ",(0,s.jsx)(n.code,{children:"GET"})," method requests specifically to get image previews as well as create presigned URLs. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"       # Fallback for unsupported paths/methods\n       else:\n           return {\n               'statusCode': 404,\n               'headers': headers,\n               'body': json.dumps({'message': 'Not found'})\n           }\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The code above handles the any other unrecognized method requests. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"   except Exception as e:\n       logger.error(f\"Error processing request: {str(e)}\")\n       return {\n           'statusCode': 500,\n           'headers': headers,\n           'body': json.dumps({'message': 'Internal server error'})\n       }\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The code above implements exception handling with error logging. ",(0,s.jsx)("br",{})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To recap: ",(0,s.jsx)("br",{}),"\nThis ",(0,s.jsx)(n.code,{children:"handler"})," function processes incoming API requests, interacts with the S3 bucket using our ",(0,s.jsx)(n.code,{children:"S3"})," class, and returns appropriate responses. Recall the added exception handling and logging throughout the function.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"\nAll the shown just above is for part of the same ",(0,s.jsx)(n.code,{children:"handler"})," function within ",(0,s.jsx)(n.code,{children:"main.py"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"understanding-the-lambda-function-in-more-detail",children:"Understanding the Lambda Function in more detail"}),"\n",(0,s.jsx)(n.p,{children:"Let's break down the main components of our Lambda function:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Environment Variables"}),": We use ",(0,s.jsx)(n.code,{children:'os.getenv("BUCKET_NAME")'})," to get the S3 bucket name from environment variables. This allows us to keep our configuration separate from our code and easily change it for different environments."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"CORS Handling"}),": We set up CORS headers to allow cross-origin requests, which is necessary for our frontend to communicate with the API."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Exception Handling"}),": We've implemented a try-except block to catch and log any exceptions that occur during request processing. This helps with debugging and ensures we always return a valid response to the client."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Logging"}),": We use Python's built-in ",(0,s.jsx)(n.code,{children:"logging"})," module to log important events and errors. This is crucial for monitoring and debugging our Lambda function in production."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"API Endpoints"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"GET /list-images"}),": Retrieves a list of all images in the S3 bucket."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"POST /get-presigned-url"}),": Generates a presigned URL for uploading an image to S3."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"DELETE /delete-image/{filename}"}),": Deletes a specific image from the S3 bucket."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"GET /{filename}"}),": Retrieves a presigned URL for downloading an image. If the ",(0,s.jsx)(n.code,{children:"preview"})," query parameter is set, it creates and returns a preview image."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"S3 Interactions"}),": All S3 operations are encapsulated in the ",(0,s.jsx)(n.code,{children:"S3"})," class, which provides methods for creating preview images, generating presigned URLs, listing images, and deleting images."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"We've now implemented a robust Lambda function that will serve as the backend for our PhotoSky application. This function handles all the necessary operations for managing images in our S3 bucket and provides the API that our frontend will interact with."}),"\n",(0,s.jsx)(n.p,{children:"Key points to remember:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Always use environment variables for configuration that might change between environments."}),"\n",(0,s.jsx)(n.li,{children:"Implement proper exception handling and logging to make debugging easier."}),"\n",(0,s.jsx)(n.li,{children:"Use CORS headers to allow your frontend to communicate with your API."}),"\n",(0,s.jsx)(n.li,{children:"Encapsulate complex operations (like S3 interactions) in separate classes for better organization and reusability."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In the next section, we'll deploy and test our backend to ensure everything is working correctly."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var s=i(6540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);