---
sidebar_position: 1
---

# Git Basics

## What is Git?

Git is a fast version control system that enables asynchronous code collaboration, code versioning, and independent development of features with branches. It was created by Linus Torvalds in 2005 and is currently maintained by Junio Hamano.

## What does Git do?

* Let's you manage projects with [**repositories**](./Index.md#repository-repo).
* Allows you to control changes with [**Staging**](./Index.md#stage) and [**Committing**](./Index.md#commit).
* Gives you [**Branching**](./Index.md#branch) and [**Merging**](./Index.md#merge) capabilities to work on different parts and versions of a project.
* Gives you [**Push**](./Index.md#push) and [**Pull**](./Index.md#pull) capabilities syncronize copies of your project.

## Git vs Github
* Git and Github are <mark>not</mark> the same.
* Github makes tools that utilize Git.
* Github is the world's largest host of source control and is owned by Microsoft. It is a cloud based storage platform to host [**repositories**](./Index.md#repository-repo). 
* Github allows for work on a single repository by multiple developers with real time editing. 
* Github also has a socialization aspect which makes a useful platform for web professionals.
* Git is a local version control system (VCS).
* Github is a web-based platform that uses git's VCS. 

## Installation
Git can be [downloaded](https://git-scm.com/) for free!

## Git via CLI
To start using Git, open your command shell.

>Windows: You can use the Git bash which is included in Git for Windows. Alternatively if you're using WSL, follow the steps similar to Linux and Mac.<br />
Linux & Mac: Use the Built-in terminal.

Let's check for a proper install by running the following command in the command shell:
``` bash
git --version
```

If installed properly, the output should be in format `git version X.Y`.
``` bash
[user@localhost] $  git --version
                    git version 2.33.1.windows.1
```

## Configuring Git
When performing git [**commits**](./Index.md#commit), git needs to know who you are. So let's configure our credentials.<br />
Use the following commands to configure your username and email for git:
``` bash
git config --global user.name "YOUR_USERNAME"
```
``` bash
git config --global user.email "USER@example.com" 
```
:::tip

 Use `--global` to set the username and email for **every repository** on your computer. <br/> Remove `--global` if you only want set the credentials for the current repo.

:::

## Git Help
Git comes with integrated documentation for all of it's commands. It's good habit to utilize documentation for a program when learning or when confused on how something works.

In order to access git's help documentation use either of the two commands:
- `git`*`command`*`-help` $\rightarrow$ All available options for the the specified *`command`*
- `git help --all` $\rightarrow$ All possible commands