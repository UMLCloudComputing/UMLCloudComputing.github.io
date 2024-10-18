<div align="center">
    <a href="https://umlcloudcomputing.org/">
        <img src="./club-logo.png" alt="Logo" width="50%" height="50%"/>
    </a>
    <hr>
    <h1>The UML Cloud Computing Club Website</h1>
</div>


This is the official repo for the UML Cloud Computing Club's website.

The website is implemented using [Docusaurus](https://docusaurus.io/), [Easy Ops Local Search](https://github.com/easyops-cn/docusaurus-search-local?tab=readme-ov-file), [MUI](https://mui.com/), and some fundamental [ReactJS](https://react.dev/).


## 👨‍💻 Content File Structure & Resources Contribution Workflow
To edit the resources section of the website:

1. Create a new branch from the **main** branch
2. Make the appropriate edits within this branch
3. Make an eventual pull request for the branch to be merged into **main**
4. Await approval or make the reviewers' requested changes and resubmit


All markdown files containing documentation details of the projects are in `docs/projects/` with the project's name marking the folder that contain's it's documentation

All markdown files containing tutorial details are in `docs/resources/` with the specific resource/class's name marking the folder that contain's it's files. 

All markdown files containing activity details are in `docs/activities/` with the specific activity's name marking the folder that contain's it's files. 

All markdown files containing blog details are in `blog/` with the specific blog's name marking the file that contain's it's content. 

All markdown files should follow Docusaurus's guidelines for folder structure for autogenerating the UI and pagination. More details are available at the [Docusaurus Docs](https://docusaurus.io/docs/sidebar/autogenerated) and [Docusaurus Blog](https://docusaurus.io/docs/blog). 

> [!TIP]
> All developement for UML Class Resources has been migrated to a different repository! Check it out repository to [contribute](https://github.com/UMLCloudComputing/UML-Class-Resources)!

## 🔊 Adding Blogs

Blogs feature quite a bit of functionality. 
You can add yourself as an author, add tags to categorize blogs, and add blogs themselves. 

### ✒️ Adding new Authors
In order to add a new author the collection of available authors, edit `blog/authors.yml`. <br/>
Add in the author by filling in the following template:
``` yml
AUTHOR_NAME:
  name: 
  title: 
  url: 
  image_url: 
  email: 
  socials:
    github: 
    x: 
    linkedin: 
    stackoverflow:
```
> [!NOTE]
> `AUTHOR_NAME` represents the name of the author used within code. the `name` attribute represents the name that will be displayed for this author. For legibility and simplicity, preferably keep them the same. 

> [!TIP]
> All socials attributes are optional and can be used in any combination with the exhaustive list of supported socials shown above. If you choose to opt out of providing social media information, also remove the entirety of the socials attribute in addition to each sub-attribute:
>``` yml
> AUTHOR_NAME:
>   name: 
>   title: 
>   url: 
>   image_url: 
>   email:
> ```

### 🏷️ Adding new tags

In order to add new tags edit `blog/tags.yml`. <br/>
Add in a new tag by filling in the following template:
``` yml
TAG_NAME:
  label: 
  permalink: 
  description: 'Blog posts related to the TAG_NAME'
```
> [!NOTE]
> In the interest of SEO and standardization, utilize the provided format for tag descriptions. <br/>
> Similarly, for legibility and simplicity, preferably set the `TAG_NAME` and `label` attribute the same. 

### 💬 Adding a new Blog page

To create a new blog page, simply create a new markdown file. The name of the file will be the title of your blog page. <br/>
Within each blog page, it's required that *at least* the following front-matter be provided:
``` md
---
authors: 
 - AUTHOR1
 - AUTHOR2
 - ...
---
``` 

Adding tags is optional and can be added by the following format:
``` md
---
authors:
 - ...
tags:
 - TAG1
 - TAG2
 - ...
---
```

Also, at a minimum it's required that you follow *at least* this guideline:
``` md
---
authors:
---

Your short hooking statement goes here...

<!-- truncate -->

The rest of your blog's content...

```
All content after the front-matter and before the `truncate` tag will be used as the cover content for your blog post when previewing all blog posts. This area is the short summary of your blog post.

In addition to the required front-matter and formatting instructions, feel free to add supported [front-matter](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog#markdown-front-matter) or content to your liking!

### 📊 Adding Images, Diagrams, or any local files to your blog post

If you're interested in adding any local files to your blog pages, simply place them in folder within `blog/` with the same name as your blog page file. Source your files accordingly: `./BLOG_NAME/FILENAME`.  

## 🛤️ Adding New Repository to Project Docs/Activities Section

### Project
To add a new project's documentation onto the project docs section of the website, you must meet a few pre-reqs:

1. The project must be a remote git repository (Github, BitBucket, etc)
2. The project's repository must contain folder with the following structure: <br/>
    ``` shell
        docs 
        └── web_docs 
                └── intro.md | Introduction/
                    _category_.json
    ```
3. The project's documentation files must follow [Docusaurus's](https://docusaurus.io/docs/create-doc) doc creation guidelines. <br/> The `_category_.json` file is autogenerated at website build time. The order in which the projects are displayed on the website is determined by the order in which the projects are listed in the `project_repos.json` file (top to bottom order).
4. Front Matter requirements: All markdown files must have the following front-matter: (`#` is an integer). This will affect the order in which the doc pages are displayed on the website (top to bottom order). 
    ``` text
    ---
    sidebar_position: #
    ---
    ```

#### In order to add your project:
1. Create a new branch from the **main** branch
2. Name the branch with the following convention: `feat: Add new project docs: PROJECTNAME` with `PROJECTNAME` being the name of your project.
3. Add your repository to package.json. Add your project as a key-value pair in the `project_repos.json`:
    ``` json
    {
        "<Other Project>": "<Other Project Github URL>",
        "<Your Project Name>": "<Your Project Github URL>",
    }
    ```
4. Make a Pull Request to merge your branch into **main**. Your project will be added to the website once the PR is approved and merged.

### Activity
To add a new activity's instructions onto the activities section of the website, you must meet a few pre-reqs:

1. The activity must be a remote git repository (Github, BitBucket, etc)
2. The activity's repository must contain folder with the following structure: <br/>
    ``` shell
        docs 
        └── web_docs 
                └── intro.md | Introduction/
                    _category_.json
    ```
3. The activity's documentation files must follow [Docusaurus's](https://docusaurus.io/docs/create-doc) doc creation guidelines. <br/> The `_category_.json` file is autogenerated at website build time. The order in which the activities are displayed on the website is determined by the order in which the projects are listed in the `activity_repos.json` file (top to bottom order).
4. Front Matter requirements: All markdown files must have the following front-matter: (`#` is an integer). This will affect the order in which the doc pages are displayed on the website (top to bottom order). 
    ``` text
    ---
    sidebar_position: #
    ---
    ```

#### In order to add your activity:
1. Create a new branch from the **main** branch
2. Name the branch with the following convention: `feat: Add new activuty docs: ACTIVITYNAME` with `ACTIVITYNAME` being the name of your project.
3. Add your repository to package.json. Add your project as a key-value pair in the `activity_repos.json`:
    ``` json
    {
        "<Other Activity>": "<Other Activity Github URL>",
        "<Your Activity Name>": "<Your Activity Github URL>",
    }
    ```
4. Make a Pull Request to merge your branch into **main**. Your activity will be added to the website once the PR is approved and merged.

## 🎉Acknowledgements 
Many thanks to the [UMass Lowell Cloud Computing Club](https://umasslowellclubs.campuslabs.com/engage/organization/cloudcomputingclub) members, our faculty advisor [Dr. Johannes Weis](https://www.uml.edu/sciences/computer-science/people/weis-johannes.aspx), and the [UMass Lowell Computer Science Department](https://www.uml.edu/Sciences/computer-science/) for their support and guidance.

Much thanks to our contributors as well:

[![Contributors](https://contributors-img.web.app/image?repo=UMLCloudComputing/UMLCloudComputing.github.io)](https://github.com/UMLCloudComputing/UMLCloudComputing.github.io/graphs/contributors)

### Happy Coding!
