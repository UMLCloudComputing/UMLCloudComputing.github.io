---
slug: /fall-2024/week-14
title: Week 14
description: Information and notes for the fourteenth week of the Fall 2024 semester for the UMass Lowell Cloud Computing Club.
sidebar_position: 14
---

# Week 14

## Tuesday
No meeting held

## Thursday

### 🎥 Meeting Recording
TBM 
<!-- <div class="iframe-container">
    <iframe 
        src=""
        title="Fall 2024 Week 8" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen
        class="responsive-iframe"
        style={{
            borderRadius: '16px'
        }}
    >
    </iframe>
</div> -->


### 🚩 Agenda
1. Presentation by [Brennan Macaig](https://www.linkedin.com/in/brennan-macaig/) on the role of an SRE
2. Break for Pizza 🍕
3. Break into teams and work on Immersion

### 🪄 Meeting Resources
TBD

### 📓 Meeting Notes
**Attendance:**
- In-Person: 15
- Virtual: 2

Presenter: Brennan Macaig - Site Reliability Engineer

**Site Reliability Engineering - an Introduction**

- Why should you listen?
- What is an SRE?
    - Differences to DevOps?
    - Why care about SRE?
    - How is SRE implemented?
- What is it like?
- At Scale
- AWS
- Stories
- Questions

**Why Listen?**
- Experience with GCP & Azure
- 5 Years of experience in the field
- Worked at small and large companies
- Went to UML (2017-2020)
    - Was a college tour guide and RA for a while
- Used to a full stack dev


**What even is SRE?**
- SRE are software engineers
- Solve operational problems
- Cross between traditional IT and Software development

**Why Care?**
- Limit the impacts of problems on customers
- Customers obsessed people
- Help maintain the SLA (Service level agreement)
- Improve observability into the tech stack
    - Catch errors before impacting revenue
- Co-own productions with developers
- Highly focused on observability
    - Telemetry
    - Documentation
    - Visibility of information

**Why should I care?**
- Rewarding jobs that re relatively high paying
- Fast paced
- Working on unique and unsolved problem
- Real impact into customer experiences


**What makes an SRE an SRE?**
- Be an owner
- Value customers above all
- Implement the *DevOps* philosophy, without being DevOps
- Create tools

**Thinking like an SRE - DevOps**
- 5 Principles
    - Reduce org. silos
    - Accept failure as NORMAL and INEVITABLE
    - Implement chain gradually
    - Leverage tooling and automation
    - Measure everything
- SRE is *not* DevOps

**Thinking like an SRE - Not DevOps**
- Own production *with* devs.
- Make gradual changes and canarying and testing
- Leverage/create tooling and automation, especially to eliminate *toil*, tech debt, and overhead.
- Toil - "Toil is the kind of work tied to running a production service that tends to be manual, repetitive, automatable, tactical, devoid of enduring value, and that scales linearly as a service grows"

**Terms**
- SLIs
    - Service level indicator
    - Measurement of services health or status.
- SLOs
    - Service Level Objectives
    - A target for your service regarding availability.
- SLAs
    - Service Level Agreements
    - A promise made to customers about availability.

**Day in a life**
- On-call and production outage management
- Writing code
- Standup, sprints, scrum, agile, JIRA tickets, investigations
- Meetings
    - Meet to discuss new services
    - Meet to discuss old services
- WRiting terraform
- Operations tasks
- Deal with scaling services
- Write techn plans
    - Reduce techn debt
- Write scripts to reduce daily toil
- Other infra provisioning tools
- Deal with CI/CD pipelines

**Customer Obsession**
- Focus on positive customer experiences
- Developer's customers are the people who use the company's app
- SRE customers are developers
- Make processes better for devs
- Make workflows dev centered
- Make doing things wrong more challenging
- Protect customers from themselves
- Support when customers do custom stuff

 **At Scale**
 - Services at scale need to do?
    - Reliability
    - Easy to fix and work on
    - Easy to deploy and create
    - Be process defined/constrained
    - Be monitored
    - When possible, self heal
        - Avoid late night pages


**AWS - What do SREs touch?**
- Since SREs own production, touch all prod assets
- Company dependent
- Typical things Brennan uses
    - EC2, EKS, IAM, Lambda, S3, SNS, RDS, KMS, Route53, APIGateway, Step Functions, Cloudwatch, WAF, SecurityGroups (IAM)


### ❓ Questions
Stories
5 Years into the industry and no problem?
- Yes
- Backstory: @ UML for 2017 - 2020, not great in school, COVID happened, didn't enjoy online school, got internship. Stayed on Fall semester, over winter break decided to stay full time. Obtained a full time offer, continue working. Got job at Draft Kings after original company went down. Started to Draft Kings, then moved to Aqua Security, now a new company. 
- Most important thing is getting internship experience. Internships and Co-op are very important to get hired. 

Still important to get a degree
- Easier to get a degree is you have a degree or still working on a degree


Work Life balance
- Work to live
- Hard during on-call weeks
- Being able to seperate your work life and 
- Company culture has more to do with the amount of worklaod you get as an SRE than the role itself.
- Depends more on your ability to segement or avoid work in your personal time and vice versa

What is ownership:
- Tagging and ensuring compliance
- Responsibility for when things go wrong, how to keep improving

### 🧑‍💻 Hands on Section
No hands on section today

### 🚀 Next Meeting
We'll be having a entertaining and fun night of AWS Trivia with prizes for winners!
Be sure to check back on the schedule for more details soon!

🥂 Cheers!