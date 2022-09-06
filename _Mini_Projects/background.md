---
title: Background Knowledge
permalink: /mini_projects/background
key: miniprojects-background
layout: article
license: false
sidebar:
  nav: MiniProjects
aside:
  toc: true
show_edit_on_github: false
show_date: false
---

This document shall provide you with sufficient knowledge to understand why you type every single command to get the mini projects running. It is **not** technically in-depth (you'd have to go to ISTD for that), but is _sufficient_ to get you through the mini projects **setup**.

## Interacting with Your Computer

Most of you have been using your computer daily by interacting with its Desktop **graphical user interface**:

- Clicking the start menu
- Double-clicking an app to open
- Right-clicking ---> select options to rename/delete files
- Clicking options in the toolbar, etc

You customise your desktop: wallpaper, shortcuts, files, screensaver --- forming a **desktop environment** that you can interact with _graphically_ (e.g: move mouse and click).

A desktop environment typically consists of icons, windows, toolbars, folders, wallpapers and desktop widgets.
{:.info}

Long before Desktop GUI is made, people interact with their computers via the the **Command Line Interface** (CLI, also known as the _terminal_). They enter **commands** via text to use the computer entirely. For example, suppose we want to rename the folder `Data-Driven-World.github.io` to `Data-Driven-World-website.github.io`. You might think that **renaming** a file can only be done by right clicking on the file and then ---> `rename`.

<img src="/assets/images/background/1.png"  class="center_fifty"/>

However, one can enter the following **command** to the terminal and achieve the same result:

```
mv Data-Driven-World.github.io Data-Driven-World-website.github.io
```

## The Command Line Interface

As said above, the command-line interface (CLI) is a **text**-based user interface (UI) used to **run** programs, **manage** computer files and **interact** with the computer.

Each operating system has its own command line:

- **Windows**: Command prompt / Powershell / [Terminal](https://docs.microsoft.com/en-us/windows/terminal/install)
  - We recommend using Terminal as it tries to maintain compatibility with Unix commands
- **macOS**: Terminal, iTerm2
- **Linux**: We believe in you ☺️

![cli](https://i.imgflip.com/6ref9m.jpg)

### **Basic Terminology**

- Path:
  - Each file / folder on a computer has a path, such as `C:\Users\test-user-0\Downloads\example-file.txt`
    - The path of the `Downloads` folder is then `C:\Users\test-user-0\Downloads`
- Directory:
  - Treat a directory as the command-line analog of a folder
  - Each directory can contain both files and directories
- `.`: Refers to the current directory that you are in (when accessed from the command line)
- `..`: Refers to the parent directory of the directory you are in
  - This can be treated as a 'directory' as well, in the sense that you can use it multiple times in a path to refer to the grandparent / great-grandparent directory of the current directory
    - For example, imagine the following file structure:
      ```
      test-user-0/
        Desktop/
          embarassing-file-1.jpg
          embarassing-file-2.jpg
          embarassing-file-3.jpg
        Documents/
          homework-file-1.docx
          homework-file-2.docx
          homework-file-3.docx
        Downloads/
          example-file-1.txt
          example-file-2.txt
          example-file-3.txt
          test/
            example-file-4.txt
        weirdly-placed-file.mp4
      ```
      - If we are in the `test` directory, and we would like to access the file specified on the left, we would use the accompanying path on the right:
        - `example-file-4.txt` -> `./example-file-4.txt`
        - `example-file-1.txt` -> `../example-file-1.txt`
        - `weirdly-placed-file.mp4` -> `../../weirdly-placed-file.mp4`
        - `embarassing-file-2.jpg` -> `../../Desktop/embarassing-file-2.jpg`

### **Command Line Basics**

We will walk you through the commands you will need on a daily basis, but please have the capability to research other commands on your own.

- `ls`: List the items in the current directory (both folders and files)
  - You can specify a directory to list as well (e.g. `ls ../Downloads`)
- `cd`: 'Change directory'. Allows you to navigate between directories (folders)
  - Considering the file structure in the previous section again, if we are in `test-user-0` and would like to move to `Desktop`, use the command `cd Desktop`
  - `cd ..`: Moves one directory up (hopefully you got this from the previous section)
    - For example, if we are in the `Downloads` folder, `cd ..` will result in us ending up in `test-user-0`
    - To move more than one directory up, do the same as above (e.g., `cd ../../..`)
- `cp <file-to-be-copied> <destination-folder-or-filepath>`: Copy a file to another folder
  - For example, if we are in the `Documents` folder, and would like to copy `homework-file-1.docx` to the `Downloads` folder, we can use `cp homework-file-1.docx ../Downloads`
  - If a `destination-folder` is specified, the filename is copied, but if a `destination-filepath` is specified, the file is copied, but renamed to the new name specified in the filepath
- `mv <original-filepath-of-file> <new-filepath-of-file>`: Move the file specified in the `original-filepath` to the `destination-filepath`
  - For example, if we are in the `Downloads` folder, and would like to move `example-file-1.txt` to the `Desktop`, we can use `mv example-file-1.txt ../Desktop/example-file-1.txt`
  - We can also use `mv` to rename files
    - For example, if we want to rename `example-file-2.txt` to `foo-bar.txt`, we can use `mv example-file-2.txt foo-bar.txt`
- `mkdir <new-directory-name>`: Creates a new directory with the specified name
- `rm <filename>`: Removes the specified file
- `rmdir <directory-name>`: Removes the specified directory
  - If the directory is not empty, the command will fail
- `clear`: Clears the CLI window
- `exit`: Closes the CLI window
- `man <command>`: Shows the manual for the specified command

Once you get the hang of the commands above, we recommend condensing it on your own for easier reference, and when in doubt, `man` it.

---

## **PATH**

### **What is PATH?**

PATH is simply a variable containing a list of directories to search when you enter a command into the command line.

For example, if you enter `python` into the command line, your computer then:

- Goes through the list of directories in the PATH variable
- Checks each directory if it contains the `python` executable
- If it does, execute it
- Else, check the next directory

Therefore, commands can also be simply thought of 'links' to their executable counterparts that your computer knows to call when requested.

> Note that everything described here is a gross oversimplification of what actually happens. Have fun learning more about it in Term 5!

### **Adding Executables to your PATH**

If you've ever tried to execute a command and was faced with an error such as:

```shell
xxx : The term 'xxx' is not recognized as the name of a cmdlet, function, script file, or operable
program. Check the spelling of the name, or if a path was included, verify that the path is correct and try
again.
At line:1 char:1
+ xxx
+ ~~~~~~~
    + CategoryInfo          : ObjectNotFound: (xxx:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException
```

This is simply an indication that your computer has searched through your PATH variable, but has not managed to find the program corresponding to the requested command.

To fix this, we simply need to ensure that our computer can find this executable. Windows handles this differently from Linux / Mac OS, so we describe the process for both operating system types:

#### **Windows**

1. Search for 'environment vairable' into the Windows search bar, and click on 'Edit the system environment variables'
2. Click on the 'Advanced' tab
3. At the bottom of the tab, click on 'Environment Variables'
4. On the new 'Environment Variables' window that pops up, look for the 'Path' entry in the list of 'System variables' (bottom half of the window)
5. Select the 'Path' entry, and click 'Edit..'
6. You can now add a new directory by clicking 'New' and entering the desired directory
7. When finished, click 'OK' on all the windows
8. **Make sure to open a new command line before checking if the executable was successfully added to your PATH**
   - Any old windows will still be using the old PATH variable

#### **Linux / Mac OS**

The default shell (don't think too much about what a shell is for now, just think of it as a flavour of the command line) for most Linux distributions and Mac OS should be Bash. As such, we can add to our PATH by editing our `.bashrc` file, which can be thought of as a config file for our command line. This file can be found in your home directory.

1. Navigate to your home directory in your command line

```shell
$ cd ~
```

2. Open the `.bashrc` file with the text editor of your choice, for example `nano`:

```shell
nano .bashrc
```

3. Scroll to the bottom of the file, and add the following line:

```
export PATH=/path/to/exec:$PATH
```

4. Save the file (`Ctrl-O` then `Return` then `Ctrl-X` in `nano`)
   > Please edit `/path/to/exec` to point to the directory where your executable is located, and do not just blindly copy-and-paste

To explain the line we just added to the `.bashrc` file:

- `export <variable> = <value>` sets a variable to the specified value
  - Hence we are setting `PATH` to a new value
- `/path/to/exec:$PATH` has the value of our old PATH variable, plus our desired new directory
  - `$PATH` has a dollar sign because we want to reference the contents of the PATH vairable
  - `:` is the separator used for the PATH variable

---

## **Git**

Git is a version control system. It allows you to track and manage changes to your code.

### **Basic Terminology**

Repository:

- A collection of files of various different versions of a project
- Can generally imagine a repository corresponding to a project

Branch:

- Corresponds to one version of the project
- The `main` or `master` branch of the repository is generally used for the stable version of your project
- You can create a new branch from another branch (e.g., the `main` branch), you essentially create a copy of that (`main`) branch at that point in time
- You can have multiple branches corresponding to different versions of the project, allowing you to work on and test different parts of your code, without affecting the `main` branch

Commit:

- Corresponds to a 'snapshot' of the code on that branch at that point in time

### **Why use Git?**

Consider the following scenario:

You have a codebase with a file named `math_stuff.py`. You want to make changes to this file.

**Without** a version control system like Git, you would probably:

- Make a copy of `math_stuff.py`, and rename it to something like `math_stuff_backup.py`
- Make your changes to `math_stuff.py`
- Run it and test it
- If something breaks, you would go back to the original by renaming the edited file to something like `math_stuff_edited_BROKEN.py` and renaming `math_stuff_backup.py` back to `math_stuff.py`

**With** a version control system like Git, you can instead:

- Create a new branch (name it something like `dev`) from your stable branch `main`
- Edit that branch with the proposed changes
- Run it and test it
- If something breaks, you can just switch back to the `main` branch without having to clown around renaming files
- When you want to try and fix the broken code, you can just switch back to your `dev` branch and continue from where you left off
- When you've fixed the broken code, and are ready to use it in `main`, you can merge the branches, essentially 'updating' the `main` branch with the code from the `dev` branch

![vcs](https://i.imgflip.com/6rekna.jpg)

### **Installing Git**

You need to have Git to do the project. Download and install the software according to your OS:

- Windows: [Git for Windows](https://git-scm.com/download/win)
- Mac OS: [Git for MacOS](https://git-scm.com/download/mac)
- Linux: We believe in you

### **Basic Git Tutorial**

We will walk you through creating a demo Git repo and show you the basic commands you might need to manage this repo, but we expect you to be able to find more information about Git yourself.

> For any code blocks in the subsequent sections, **please only key in the parts that have a `$` at the start of the line**. Anything else indicates the output from the command line, and should be used as a reference to gauge if you have executed the commands correctly.

#### **Basics**

To create a new repository (be it in a new folder, or a folder with preexisting code), go to the folder in your command line, and enter `git init`.

- This initializes Git in the specified directory

As an example, let us create a new repository in a directory called `foo`

```shell
$ mkdir foo
$ cd foo
$ git init

Initialized empty Git repository in /home/test-user-0/Desktop/foo/.git
```

Create some test text files in the directory for us to track with Git.

For example, let us create two test files `test.txt` and `index.html`

```shell
$ touch test.txt index.html
$ ls

index.html test.txt
```

Check the status of the files in the repo with `git status`

- It will print out a list of tracked, untracked, modified, and deleted files
- See the changes in a more compact way with `git status --short`
  - Short status flags:
    - ?? - Untracked files
    - A - Files added to stage
    - M - Modified files
    - D - Deleted files

```shell
$ git status

On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        index.html
        test.txt

nothing added to commit but untracked files present (use "git add" to track)

$ git status --short

?? index.html
?? test.txt
```

Git tells us both our files are untracked, so we have to add (stage) it to our repository in order to track it

- Add specific files to the repo with `git add <file>`
- Or add all files with `git add *` or `git add --all`

```shell
$ git add *
```

Commit the newly added files to the repository to save it at this point in time

- Commit with `git commit -m "commit message"`
  - Each commit requires a commit message; make it meaningful!

```shell
$ git commit -m "initial commit of files"

[master (root-commit) 0fc7c0a] initial commit of files
 2 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 index.html
 create mode 100644 test.txt
```

We can now see a history of our commits with `git log`

- Press `q` to exit the view
  > Each commit is accompanied by a hash, which can be thought of as a unique identifier for each commit

```shell
$ git log

commit 0fc7c0ae907ba28a189c08417a1f1bccd0dd0a68 (HEAD -> master)
Author: test-user-0 <test-user-fake-email@gmail.com>
Date:   Sun Aug 28 21:41:56 2022 +0800

    initial commit of files
```

Now we can try to make changes to our committed files

- Edit `test.txt` in the text editor of your choice (e.g., `nano` or `vim`)
- Now if you `git status` again, `test.txt` will show up as modified
- We can now re-stage this file and commit

```shell
$ git status --short

M test.txt

$ git add test.txt
$ git commit -m "feat: added content to test.txt"

[master 0f701a5] feat: added content to test.txt
 1 file changed, 1 insertion(+)
```

#### **Branching**

Assume we now want to test some new code, but want to leave our main branch untouched. We make a new branch to accomplish this.

- `git branch <branch_name>` will create a new branch (from the current branch) with the specified name
- The contents of this branch will be the same as the branch it was branched from
- To see the branches for a repo, we can use `git branch`.
- To move to a specific branch, we can use `git checkout <branch_name>`
  - To check out a branch, and create it if it doesn't exist, we can use `git checkout -b <branch_name>`..

Let us make a new branch in our repo:

```shell
$ git checkout -b dev

Switched to a new branch 'dev'
```

Try editing one of the files, and then stage and commit your changes again.

- If we `git log`, we can see the changes made on this branch
- Now if we `git checkout master` then `git log`, we can see that the changes made on the `dev` branch don't show up on the `master` branch, which was exactly our intention

```shell
$ git add test.txt
$ git commit -m "feat: added more content to test.txt"

[dev 8c3a08f] feat: added more content to test.txt
 1 file changed, 1 insertion(+), 1 deletion(-)

$ git log --oneline

8c3a08f (HEAD -> dev) feat: added more content to test.txt
0f701a5 (master) feat: added content to test.txt
0fc7c0a initial commit of files

$ git checkout master

Switched to branch 'master'

$ git log --oneline

0f701a5 (HEAD -> master) feat: added content to test.txt
0fc7c0a initial commit of files
```

Once we are confident that the code on our `dev` branch is working, we can `merge` our `dev` branch back into our `master` branch:

```shell
$ git merge dev

Updating 0f701a5..8c3a08f
Fast-forward
 test.txt | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
```

And then we can delete our `dev` branch, since we no longer need it:

```shell
$ git branch -d dev

Deleted branch dev (was 8c3a08f).
```

#### **Fixing your oopsies**

Let's say after committing some code, it introduces a critical bug, and you would like to revert to a previous commit of the repository. There are 3 ways to handle this:

- Reverting takes a previous commit and adds it as a new commit, keeping the log intact.
- Resetting moves the repository back to a previous commit, discarding any changes made after that commit.
- Amending modifies the most recent commit. It combines the changes in the staging environment with the latest commit, and creates a new commit. This commit replaces the latest commit entirely.

#### **Revert**

Let's assume that after merging in the last section, we found out that the code from the `dev` branch actually has a bug in it, and we would like to revert to the commit BEFORE the merge.

```shell
$ git revert HEAD

[master 96d4f02] Revert "feat: added more content to test.txt"
 1 file changed, 1 insertion(+), 1 deletion(-)
```

`git revert HEAD` will revert the latest change and commit.

Similarly, `git revert HEAD~x` will revert to earlier commits, `x` being a number, such that `1` = going back 1 more, `2` = going back 2 more, etc.

After reverting, if you `git log`, you should be able to see that the previous commits are still logged, and the revert was treated as a new commit as expected:

```shell
$ git log --oneline

96d4f02 (HEAD -> master) Revert "feat: added more content to test.txt"
8c3a08f feat: added more content to test.txt
0f701a5 feat: added content to test.txt
0fc7c0a initial commit of files
```

#### **Reset**

Now let us assume that you're simply too ashamed to even revert and leave the old commits in the log. We will use `git reset` instead.

`git reset xxxxxxx` (where `xxxxxxx` is the first 7 characters of the commit) will move the repo back to the commit with the specified hash, and delete any commits made after.

```shell
$ git reset 0f701a5
$ git log --oneline

0f701a5 (HEAD -> master) feat: added content to test.txt
0fc7c0a initial commit of files
```

You should be able to see that every commit after the first edit of `test.txt` should be removed.

Note that even though the commits no longer show in the log, it is not removed from Git. If you have the commit hash you can `reset` forward to it.

For example, from the `git log` two cells above, we can see that our revert commit has a hash of `96d4f02`, meaning that we can do the following:

```shell
$ git reset 96d4f02
$ git log --oneline

96d4f02 (HEAD -> master) Revert "feat: added more content to test.txt"
8c3a08f feat: added more content to test.txt
0f701a5 feat: added content to test.txt
0fc7c0a initial commit of files
```

And our logs return to the state they were prior to the first reset.

#### **Amend**

Now let's look at `amend`. Imagine that we made a commit with a typo in the commit message:

```shell
$ git commit -m "feat: updated test.tx"
$ git log --oneline

d98e4cd (HEAD -> master) feat: updated test.tx
96d4f02 Revert "feat: added more content to test.txt"
8c3a08f feat: added more content to test.txt
0f701a5 feat: added content to test.txt
0fc7c0a initial commit of files
```

Rather than deleting the repo and starting from scratch out of humiliation, we can instead simply `amend` the last commit:

```shell
$ git commit --amend -m "feat: updated test.txt"
$ git log --oneline

d98e4cd (HEAD -> master) feat: updated test.txt
96d4f02 Revert "feat: added more content to test.txt"
8c3a08f feat: added more content to test.txt
0f701a5 feat: added content to test.txt
0fc7c0a initial commit of files
```

As you can see, the commit message of our latest commit has been fixed, without making a new commit.

Amend will merge the currently staged changes into the last commit, rather than making a new commit entirely.

As such, this strategy works for files as well.

### **Git vs Github**

TODO (Necessary?)

### **Git Clone**

Cloning a git repository involves making a full copy of the repository, including all logging and versions of files.

What is the advantage of this approach as compared to just downloading the code from Github directly?

Imagine you need to download the DDW mini project repository to your computer.

If you did it without cloning:

- Go to the provided URL
- Click 'Code > Download ZIP'
- Extract the contents of the ZIP file to your computer and rename as appropriate

If you did it with cloning:

- Navigate to the desired destination in your command line
- Enter `git clone <url> <destination_directory_name>`

They essentially accomplish the same thing, with one just being faster and more convenient than the other. Get in the habit of cloning rather than downloading directly from GitHub.
