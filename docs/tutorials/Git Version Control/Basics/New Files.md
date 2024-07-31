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

Now let's check the contant of our directory using [`ls`](./Index.md#ls):
``` shell
[user@localhost] $ ls
                  index.html
```

Since the file is within our directory now, let's check if it's part of our [repo](./Index.md#repository-repo) using `git status`:
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

There are two potentional states for files in a repository folder:
* Tracked: git knows about these and they are in your repository
* Untracked: files that are in your working directory, however not added to your repository.

Adding the first files to an empty repository are all untracked. In order for them to be tracked, they must be [staged](./Index.md#stage) or must add them to a [staging area](./Index.md#staging-area)