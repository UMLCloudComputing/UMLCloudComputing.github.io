--- 
sidebar_position: 8
---

# Merge Conflicts

Let's continue work on our original `hello-world-pictures` branch by adding another image to our project.

First we need to change to the `hello-world-pictures` branch:
``` bash
[user@localhost] $ git checkout hello-world-pictures
Switched to branch 'hello-world-pictures'
```
Second, Let's obtain the [image](https://www.elegantthemes.com/blog/wp-content/uploads/2020/08/hello-world.png) we need to add (from the same working directory as `index.html`):
- Windows: 
    ``` powershell 
    wget https://www.elegantthemes.com/blog/wp-content/uploads/2020/08/hello-world.png > hello.png
    ```
- Linux & Mac: 
    ``` bash 
    curl https://www.elegantthemes.com/blog/wp-content/uploads/2020/08/hello-world.png > hello.png
    ```

Second, we need open `index.html` for editing and adding in our new [image](https://newactivationkey.com/wp-content/uploads/2020/01/hello-world-1024x576.png) and then add the code for our new image:
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
        <div>
            <img src="hello.png" alt="Hello World" style="width:100%;max-width:640px">
        </div>
    </body>
</html>
```
After saving and exiting, we need to [stage](./Index.md#stage) all the changes:
``` bash
[user@localhost] $ git add --all
```

Now let's [commit](./Index.md#commit) the changes to the `hello-world-pictures` branch:
``` bash
[user@localhost] $ git commit -m "feat: Added hello world image"
[hello-world-pictures 9356dc6] feat: added hello world image
 2 files changed, 3 insertions(+), 
 create mode 100644 hello.png
```

Now let's merge the changes from `hello-world-pictures`:
``` bash
[user@localhost] $ git checkout master
[user@localhost] $ git merge hello-world-pictures
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.
```
Yikes! We've encountered a [merge conflict](./Index.md#merge-conflict)! 

## What is a Merge Conflict?

A Merge Conflict is an issue where git is unable to automatically adjust edit differences between two commits. More specifically, it is due to two branches modifying the same region within a file or multiple files. 

In the situation above, the conflict is within `index.html`. We can confirm this using `git status`:
``` bash
[user@localhost] $ git status
On branch master
You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Changes to be committed:
        new file:   git.png
        new file:   hello.png

Unmerged paths:
  (use "git add <file>..." to mark resolution)
        both modified:   index.html
```

From the report, we can see that the issue is within `index.html` however, both the image files are staged to be committed.

Let's fix our merge conflict by opening the faulty file (`index.html`):
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
        <<<<<<< HEAD
        <p>Copyright UML Cloud Computing Club &copy;</p>
        =======
        <p>A new line within our page!</p>
        <div>
            <img src="hello.png" alt="Hello World" style="width;max-width:960px">
        </div>
        >>>>>>> hello-world-pictures
    </body>
</html>
```

### Understanding the format of a conflicting merge

Within the example above there are new lines within `index.html` that were not placed earlier. The dividing symbols `<<<` and `>>>` indicate the changes from each of the two branches. <br/>
The divided region from HEAD to the `===` symbols indicates the version of the line from the master branch. The dividing region from `===` to hello-world-pictures indicates the changes on the same line that were sourced from the `hello-world-pictures` branch. 

We need to edit our file to contain content of both the `master` and `hello-world-pictures` branch:
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
        <p>Copyright UML Cloud Computing Club &copy;</p>
        <p>A new line within our page!</p>
        <div>
            <img src="hello.png" alt="Hello World" style="width;max-width:960px">
        </div>
    </body>
</html>
```

Now that `index.html` has been corrected, let's stage it and then check the status of the repo:
``` bash
[user@localhost] $ git add index.html
[user@localhost] $ git status
On branch master
All conflicts fixed but you are still merging.
  (use "git commit" to conclude merge)

Changes to be committed:
        new file:   git.png
        new file:   hello.png
        modified:   index.html
```

Now the conflict has been marked as fixed by git. We can now commit fixes:
``` bash
[user@localhost] $ git commit -m "fix: Resolved merge conflicts in index.html"
[master 49a3336] fix: resolved merge conflicts with index.html
```

Finally, since we're done using the `hello-world-pictures` branch, we can delete it:
``` bash
[user@localhost] $ git branch -d hello-world-pictures
Deleted branch hello-world-pictures (was 6ceb75e).
```

Congratulations, you sucessfully managed to resolve a merge conflict using the aramada of tools provided by git! Moreover, now you should be experienced in using the power of git to employ version control on your project to enhance their maintainability and collaborative potential!

