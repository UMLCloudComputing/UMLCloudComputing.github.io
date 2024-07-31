---
sidebar_position: 7
---

# Merging

## Merging Branches

Branch [merging](./Index.md#merge) allows the changes from one branch to be added to another, essentially combining the changes. Merging typically goes hand in hand with branches since the changes specific to a branch are often combined back to the main project code. A common scenario in industry is to use [branches](./Index.md#branch) to work of specific issues, features, or perform code maintainence. Once the edits are complete, the [branch's](./Index.md#branch) edits are [merged](./Index.md#merge) back into a `master` or main branch which contains the code used in production. 

Let's demonstrate how to merge branches alongside a bit of review!

Let's create a *new* branch called `copyright-fix` from the `master` branch which we will use to add a copyright message to the footer of our html page:
``` bash
[user@localhost] $ git checkout -b copyright-fix
Switched to a new branch 'copyright-fix'
```
> Notice how the use of the `-b` option to create and change to the new `copyright-fix` branch in one command.

Now let's edit `index.html` to add our copyright message by **replacing** our previously added "new line" paragraph block:
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
    </body>
</html>
```
> Feel free to edit the copyright message to your liking! After all, it's **your** work!

Let's check the status of the branch to make sure our edits are recorded:
``` bash
[user@localhost] $ git status 
On branch copyright-fix
Changes not staged for commit:
    (use "git add <file>..." to update what will be committed)
    (use "git restore <file>..." to discard changes in working directory)
        modified:   index.html

no changes added to commit (use "git add" and/or "git commit -a")
```

Great! Now since our modifications are unstaged, let's go ahead and stage them and then commit them:
``` bash
[user@localhost] $ git commit -a -m "chore: Added copyright to index.html"
[copyright-fix a618dec] chore: added copyright to footer
 1 file changed, 3 insertions(+)
```
> Note: The command above used the `-a` option to stage and commit all changes in one-step.

Finally, now let's [merge](./Index.md#merge) our changes back into the `master` branch! <br/>
First we need to [`checkout`](./Index.md#checkout) to to the `master` branch. 
``` bash
[user@localhost] $ git checkout master
Switched to branch 'master'
```
Second, we can now merge `master` with `copyright-fix` to combine the changes:
``` bash
[user@localhost] $ git merge copyright-fix
Updating 0f7809c..a618dec
Fast-forward
 index.html | 3 +++
 1 file changed, 3 insertions(+)
```

Since we're done working on the `copyright-fix` branch and it's no longer needed, let's go ahead and delete it using the `-d` option on the `git branch` command:

```bash
[user@localhost] $ git branch -d copyright-fix
Deleted branch copyright-fix (was 5be7c4a).
```

Amazing! We successfully managed to add a new piece to our project using [branches](./Index.md#branch) and sucessfully [merged](./Index.md#merge) the changes back to the `master` [branch](./Index.md#branch).