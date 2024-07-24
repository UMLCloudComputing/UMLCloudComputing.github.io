---
sidebar_position: 2
---

# Getting Started

## Creating a Git folder

Creating a new folder for a project:
``` bash
[user@localhost] $ mkdir newProject
[user@localhost] $ cd newProject
```

[`mkdir`](./Index.md#mkdir) makes a new directory. <br />
[`cd`](./Index.md#cd) changes the current working directory.

## Initialize Git
Once in the correct folder, initialize git on the folder:
``` bash
[user@localhost] $ git init
                   Initialized empty Git repository in /User/user/newProject/.git/
```
New Git repository created!

> Git automatically knows to watch this folder for changes within a hidden folder.