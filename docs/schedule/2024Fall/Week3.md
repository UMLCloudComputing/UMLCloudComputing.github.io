---
slug: /fall-2024/week-3
title: Week 3 
description: Information and notes for the third week of the Fall 2024 semester for the UMass Lowell Cloud Computing Club.
sidebar_position: 3
---

# Week 3

## Tuesday

- Low Head Count
- Ended Early

## Thursday

- **Date:** September 12, Thursday
- **Time:** 6:30pm-8:00pm

### 🚩 Agenda
1. Sign in with attendance code
2. [AWS Core Services Presentation](https://studentuml.sharepoint.com/:p:/s/UMLCloudComputingClub/ERlgCaetR51LukTSs6tS9FYBFJelpc205kJXcLI2WJIPHQ?e=agcpTU) by Alvin Yu
3. Questions
4. Break for Pizza
5. Shift to Hands-on section

### 📓 Meeting Notes

Attendance: 31
Virtual: 1

#### Presentation Section:
AWS Core Services
Presenters: Alvin Yu, Christopher Coco, Nick Bottari
IAM:
- Identity Access MAnagement
- Manage User Accounts and grant fine grained access to AWS Resources
- Mainly used to grant secure premissions to differnt components of your application.
IAM supports MFA

AWS EC2:
- Launches a virtual machine with well defined resources
- General purpose. Can run databases, APIs, storage, websites.
- Billed based on:
    - How LONG the service runs
    - How much DATA is transferred
    - How much STORAGE is attached

AWS Lambda:
- Runs without provisioning server resources
- Only billed for the TIME the service runs
- Billed in GB-seconds

What is an API:
- Application Programming Interface
- Middleman between two pieces of software
- REST API - type of API for HTTP
    - Representational State Transfer (REST)
    - GET, POST, PUT, PATCH, DELETE

AWS Lambda vs EC2:
- EC2 - Constant running service (IE web server)
- Lambda - Occasion operations that need to be run (IE the club's attendance bot)

AWS API Gateway:
- AWS Service to proxy and handle HTTP

AWS S3:
- Object Storage (not a filesystem, more like an API for uploading, and downloading files)
- Stores "files" as "objects", which are in turn stored in buckets
- Bucket names must be unique in global namespace
- Billing based on:
    - Storage used
    - PUT, GET, DELETE requests


How to share S3:
- Get temporary PRESIGNED URL
- Can Upload, download images with REST API
- Example of accessing files on S3 for non-aws users.

AWS CDK:
- Generates CloudFormation templates, a declerative way of specifying which AWS services to launch.
- Can be written with Typescript, JS, Python, Golang

[Fireship AWS Video](https://www.youtube.com/watch?v=ZzI9JE0i6Lc)
- EC2 was the one the first and most fundamental AWS Services
- Lambda is Serverless
    - Traffic scaling happens in the background
- Outposts is a way to run your own servers with AWS APIs.
- Elastic Container Registery - A place to host your Docker containers
- AWS S3 was the first AWS Service
- Elastic Block Storage - Best for high data throughput
- DynamoDB - Scales fast
- AWS RDS - Aurora, MySQL, PostgreSQL
- Lake Formation - Creating Data Lakes - Storage unstructed data
- AWS Bedrock - Sagemaker
    - Uses Pytorch or TF
    - Connects to a Juypter Notebook to do development
- Security 
    - AWS IAM
    - AWS Cognito
    - AWs SNS
    - AWS SES  
- AWS Amplify
    - Frontend SDKs
    - 
