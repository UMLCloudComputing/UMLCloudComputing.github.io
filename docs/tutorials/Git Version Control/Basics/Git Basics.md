---
sidebar_position: 1
---

# Git Basics

## What is Git?

Git is a version control system that helps collaborate on code and keep track of code changes. It was created by Linus Torvalds in 2005 and has been maintained by Junio Hamano since then.

## What does Git do?

* Manage projects with [**repositories**](./Index.md#repository-repo).
* **Clone** a project to work with a local copy.
* Control changes with [**Staging**](./Index.md#stage) and [**Committing**](./Index.md#commit).
* [**Branch**](./Index.md#branch) and [**Merge**](./Index.md#merge) to work on different parts and versions of a project.
* [**Pull**](./Index.md#pull) the latest version of the project a local copy.
* [**Push**](./Index.md#push) local updates to a project.

## Git vs Github
* Git and Github are <mark>not</mark> the same.
* Github makes tools that use Git.
* Github is the world's largest host of source control and is owned by Microsoft.

## Installation
Git can be [downloaded](https://git-scm.com/) for free!

## Git via CLI
To start using Git, open your command shell.

>Windows: Can use Git bash which is included in Git for Windows.<br />
Linux & Mac: Built-in terminal.

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
When performing git [**commits**](./Index.md#commit), git needs to know who you are. <br />
Configure the username and email for git with the following commands:
``` bash
git config --global user.name "YOUR_USERNAME"
```
``` bash
git config --global user.email "USER@example.com" 
```
> Use `--global` to set the username and email for **every repository** on your computer. <br/> Remove `global` if you only want to the credentials for the current repo.

## Git Help
Git comes with integrated documentation for all of it's commands. It is good developer practice to utilize docuemtnation for a program when learning or when confused on how a particular part works.

In order to access git's help documentation use any of the two commands:
- `git`*`command`*`-help` $\rightarrow$ All available options for the the specified *`command`*
- `git help --all` $\rightarrow$ All possible commands