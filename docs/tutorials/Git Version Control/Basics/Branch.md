---
sidebar_position: 6
---

# Branch

### Using Git branches

A [branch](./Index.md#branch) is a seperate version of the main repository.<br/>
Branches are particuarly useful when a developer wants to update parts of a large project.

Git branches allow development on a new features and designs independent from other work on the main branch.<br/>
When the work is complete on a branch, it can be [merged](./Index.md#merge) back into the main branch/project.<br/>
With branches, it's also possible to work on different parts of a project simultaneously without any part impacting another.

### Creating a new Branch

Let's create a new [branch](./Index.md#branch) to work on a feature without modifying the main project's working code:

``` bash
[user@localhost] $ git branch hello-world-pictures
```
The command `git branch hello-world-pictures` will create a new [branch](./Index.md#branch) called "hello-world-pictures".<br />
Let's confirm that the branch was created:
``` bash
[user@localhost] $ git branch
hello-world-pictures
* master
```
:::note

Whenever creating new branches, the branch from which the *new* branch is sourced from is the branch which was mounted when the git branch command was called. In scenario above, the command was called from within the `master` branch. Hence, all the initial files and changes are sourced from the `master` branch for the `hello-world-pictures` branch.

:::

A new branch called "hello-world-pictures" has been created, however the `*` symbol indicates that we are currently still on the `master` [branch](./Index.md#branch). 

:::info

 When viewing the output of `git branch`, the `*` symbol indicates the current branch.

:::

![Git-Staging-Diagram-3](../../../../static/img/git-tutorial/git-workflow-3.png)

In order to leave the `master` [branch](./Index.md) and change to the "hello-world-pictures" [branch](./Index.md) we have to use the [`checkout`](./Index.md#checkout) command. 

``` bash
[user@localhost] $ git checkout hello-world-pictures
                   Switched to branch 'hello-world-pictures'
```
:::note

Adding the `-b` option on `git checkout` will create a new branch and move to it, if it does not exist.  

:::

Now let's make some edits now that we're in the correct branch.
Let's add an [image](https://software.3metas.com/wp-content/uploads/2017/06/git.png)(needs to be downloaded) to our html page:

First let's obtain the image:
> In order to download the image via the CLI use one of the following commands from the same working directory as `index.html`:
> - Windows: 
    >   ``` powershell
    >   wget https://software.3metas.com/wp-content/uploads/2017/06/git.png > git.png
    >    ```
    > - Linux & Mac: 
    >   ``` bash
    >   curl https://software.3metas.com/wp-content/uploads/2017/06/git.png > git.png
    >   ```


Then let's update our html code:
``` html
<!DOCTYPE html>
<html>
    <head>
        <title>Hello World!</title>
        <link rel="stylesheet" href="styles.css">
    </head>

    <body>
        <h1>Hello world!</h1>
        <div>
            <img src="git.png" alt="Git Logo" style="width:100%;max-width:960px">
        </div>
        <p>This is the first file in my new Git Repo.</p>
        <p>A new line in our file!</p>
    </body>
</html>
```

Let's [save and exit](./New%20Files.md#basic-editing-on-vim) and check the status of the current [branch](./Index.md#branch)

``` bash
[user@localhost] $ git status
On branch hello-world-pictures
Changes not staged for commit:
    (use "git add <file>..." to update what will be committed)
    (use "git restore <file>..." to discard changes in working directory)
        modified:   index.html

Untracked files:
    (use "git add <file>..." to include in what will be committed)
    git.png

no changes added to commit (use "git add" and/or "git commit -a")
```

The output indicates that there are tracked changes to `index.html`, however the file is not [staged](./Index.md#stage) for a [commit](./Index.md#commit). Moreover, there is also the image `git.png` that is currently untracked.

So let's add all the changes to the [staging area](./Index.md#staging-area):
``` bash
[user@localhost] $ git add --all
```

Now let's check the status of the [branch](./Index.md#branch):
``` bash
[user@localhost] $ git status
On branch hello-world-pictures
Changes to be committed:
(use "git restore --staged <file>..." to unstage)
        new file:   git.png
        modified:   index.html
```

Now all the changes are staged and can be committed.

Since we're satifisied with our changes, let's [commit](./Index.md#commit) them to our [branch](./Index.md#branch):
``` bash
[user@localhost] $ git commit -m "feat: Added image to hello world"
[hello-world-pictures 83d7fb0] feat: Added image to hello world
 2 files changed, 3 insertions(+)
 create mode 100644 git.png
```

### Switching between Branches

Now let's see the power of branches! <br />
Let's check content within our branch:

``` bash
[user@localhost] $ ls
git.png  index.html  README.md  styles.css
```
Notice how the `hello-world-pictures` [branch](./Index.md#branch) has the image `git.png`. As per the edits we've made, `index.html` should also have modified code to include the image. 

Now's let's change to the `master` branch using the `checkout` command:
``` bash
[user@localhost] $ git checkout master
                   Switched to branch 'master'
```

Finally let's check the content of this [branch](./Index.md#branch):
``` bash
[user@localhost] $ ls
index.html  README.md  styles.css
```
`git.png` is gone! Moreover, if we open and check `index.html` we can see that it no longer has the edits we made recently!

Branches enable you to work on parts of a project independently.

---
All rights belong to the author and/or owner of the [image](https://software.3metas.com/wp-content/uploads/2017/06/git.png).