---
sidebar_position: 10
---

# Index

Index of terminology within this tutorial

### Push 
>*noun*: To publish your changes to a repository: `git push`

### Repository (*repo*)
>*noun*: A type of centrally located storage where you can keep all your project's files and resources.

### Clone
>*verb*: To create a copy of a specific repository or branch within a repository: `git clone`

### Merge
>*verb*: To combine a forked history back together again: `git merge`

### Merge Conflict
> *noun*: An issue where performing a merge causes issues in git being able to auto-resolve edit differences of two commits. Specifically, it occurs when two branches modify teh same region of a file. Common ways to handle the error are either to manually edits the file or to use `git mergetool`. 

### Commit
>*noun, verb*: A "revision" or an individual change to a file (or a set of files). Commits usually contain a message which is a brief description of what changes were made. Useful [diagram](../../../../static/img/git-tutorial/git-workflow-2.png). `git commit`

### `mkdir` 
>*command*: The command to create a new directory in the CLI. Make directory.

### `cd`
>*command*: The command to change the current working directory in the CLI. Change directory.

### `ls`
>*command*: The command to view the content of the current working directory in the CLI. List.

### Visual Studio Code
>*Source-Code Editor*: <br/> A free and open-source source-code editor developed by Microsoft for Windows, Linux, macOS, and various web browsers. It has capabilities to help debug code, perform syntax highlighting, inteligent code completion, snippits, code refactoring, and embedded version control with Git. It also offers the ability to change themes, add keyboard shortcuts, and add functionality with extensions.  

### Vim
>*Text Editor* <br /> A free and open-source, screen-based text editor. It is an improved version of the **vi** editor. It's primary interface is in text user interface with commands rather than menus or icons.  

### Stage
>*verb*: To prepare a file for a [commit](#commit) by placing it into the [staging area](#staging-area). `git stage`

### Staging area
>*noun*: The *conceptual* area between your working directory and your repostory that maintains all of your [staged](#stage) changes. A useful [diagram](../../../../static/img/git-tutorial/staging-area.png).

### `git status short`
> git status --short status flags are
> * ?? $\rightarrow$ Untracked changes
> * A $\rightarrow$ Files added to be staging area
> * M $\rightarrow$ Modified Files
> * D $\rightarrow$ Deleted Files

### Branch
> *noun*: A new/seperate version of the main [repository](#repository-repo). 

### Checkout
> *verb*: To move from a branch to another one. `git branch `*`branch_name`*.

