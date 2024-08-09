---
sidebar_position: 3
---

# New Files

### Adding new Files

Let's find out how to add new files to a git [repository](./Index.md#repository-repo)! <br />
Within this tutorial, we'll be using the [Vim](./Index.md#vim) CLI text-edtior to create a edit files. <br /> This can just as easily be done with your prefered text-editor. <br />
IE with `code .` to open the current working directory within [Visual Studio Code](./Index.md#visual-studio-code).

``` shell
[user@localhost] $ vim index.html
```
Calling the command above should create and open a blank `.html` file within your terminal:
```vim
|
~
~
~
~
~
~
~
~
~
~ 
"index.html" [New File]                                         0, 0-1      All
```

Your newly created file should look something similar to the output shown above.

Let's put some code within `index.html`:

``` html
<!DOCTYPE html>
<html>
    <head>
        <title>Hello World!</title>
    </head>
    <body>
        <h1>Hello world!</h1>
        <p>This is the first file in my new Git Repo.</p>
    </body>
</html>
```
#### Basic Editing on Vim
>In order to enter content into `index.html` using [Vim](./Index.md#vim), enter insert mode by pressing the "I" key on your keyboard. Then either type or paste the code into the editor. <br />
To save and exit out of [Vim](./Index.md#vim) simply press the escape key and then type and enter `:wq` (write and quit). 

Now let's check the content of our directory using [`ls`](./Index.md#ls):
``` shell
[user@localhost] $ ls
                  index.html
```

Since the file is within our working directory now, let's check if it's part of our [repository](./Index.md#repository-repo) using `git status`:
``` shell
[user@localhost] $ git status
                On branch master

                No commits yet

                Untracked files:
                    (use "git add <file>..." to include in what will be committed)
                        index.html

                nothing added to commit but untracked files present (use "git add" to track)  
```

The output above indicates that now git is aware of the `index.html` however it has not be added to our repository.

There are three potential states for files in a repository folder:
* Tracked: Git knows about these and they are in your repository. These are files from the last snapshot. These files have three sub-states:
    * Modified
    * Staged
    * Committed
* Untracked: These files are in your working directory, however not in the previous snapshot or in the [staging area](./Index.md#staging-area). 
* Modified: A file that has changes made to it. However, these changes haven't been [committed](./Index.md#commit) yet. These changes include adding, modifying, or deleting a file's content. These files will be included in the next commit with their new changes. 

Adding the first files to an empty repository are all untracked. In order for them to be tracked, they must be [staged](./Index.md#stage).