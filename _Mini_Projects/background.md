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

<span style="color:#f7007f;"><b>Disclaimer</b></span>: note that everything described here is a **gross** oversimplification of what actually happens in your computer. Take the subject **50.005** in ISTD (Term 5) if you'd like to learn more.
{:.error}

## Interacting with Your Computer

Most of you have been using your computer daily by interacting with its Desktop **graphical user interface**:

- Clicking the start menu
- Double-clicking an app to open
- Right-clicking ---> select options to rename/delete files
- Clicking options in the toolbar, etc

You customise your desktop: wallpaper, shortcuts, files, screensaver --- forming a **desktop environment** that you can interact with _graphically_ (e.g: move mouse and click).

A desktop environment typically consists of icons, windows, toolbars, folders, wallpapers and desktop widgets.
{:.info}
<br>

Long before Desktop GUI is made, people interact with their computers via the the **Command Line Interface** (CLI, also known as the termina). They enter **commands** via text to use the computer entirely. For example, suppose we want to rename the folder `Data-Driven-World.github.io` to `Data-Driven-World-website.github.io`. You might think that **renaming** a file can only be done by right clicking on the file and then ---> `rename`.

<img src="/assets/images/background/1.png"  class="center_fifty"/>

However, one can enter the following **command** to the terminal and achieve the same result:

```
mv Data-Driven-World.github.io Data-Driven-World-website.github.io
```

## The Command Line Interface

As said above, the command-line interface (CLI) is a **text**-based user interface (UI) used to **run** programs, **manage** computer files and **interact** with the computer. In fact, almost _everything_ (OS-related stuffs) can be done via the CLI.

> Who needs desktop 🤷🏻‍♀️

<img src="https://i.imgflip.com/6ref9m.jpg"  class="center_fifty"/>

Each operating system has its own command line:

- **Windows**: Command prompt / Powershell / [Terminal](https://docs.microsoft.com/en-us/windows/terminal/install)
  - We recommend using Terminal as it tries to maintain compatibility with Unix commands
- **macOS**: Terminal, iTerm2
- **Linux**: We believe in you ☺️

### Getting Started

Open a terminal window. Regardless of whichever OS you use, you are likely to be faced with a **prompt** (the thing with the cursor, waiting for your `command`).

<img src="/assets/images/background/2.png"  class="center_seventy"/>

You can type `commands` into the prompt, and then press `enter` to **execute** that command. For example, the first two commands you have to enter to **download** the `mp_sort` (mini project 1) repository is:

```
cd Downloads
git clone https://github.com/Data-Driven-World/d2w_mini_projects
```

Each of the line above is **one** command. The first command is **cd** (stands for change directory). It changes your **current working directory**, just like how you click open folders after folders in your Finder or File Explorer to navigate through your **file system** and find the right location and create new things in this location you want:

<img src="/assets/images/background/3.gif"  class="center_fifty"/>

The same thing can be done via the command line:
<img src="/assets/images/background/4.gif"  class="center_seventy"/>

So `cd Downloads` is none other than **navigating** to `~/Downloads` folder.

The next thing to do is to **download** the starter code for your mini projects. The second command `git clone [project_url]` does that. We ask the program **git** to `clone` (**download**) the repository situated in the url into your `~/Downloads` folder. . This is essentially the same as actually opening the url on the browser, and clicking **Download ZIP**, landing the project in your `~/Downloads` folder.:
<img src="/assets/images/background/5.png"  class="center_seventy"/>

Notice how the new folder `d2w_mini_projects` are created after you `clone`:
<img src="/assets/images/background/6.gif"  class="center_seventy"/>

### How CLI Works (Baby Edition)

Remember that previously you have [installed](https://git-scm.com/download/mac)`git`? Installation means that you downloaded the **program** to your computer so that your computer can **execute** (use) it. This **git** program has many **functionalities**, just like how another program you are familiar with: Microsoft Word have their own **functionalities**. The difference between **git** and Microsoft Word is that the latter has a **graphical user interface** (you can see the windows, buttons, etc and click), while the former only has a **command line interface** (it accepts textual-based commands).

The <span style="color:#f7007f;"><b>horror</b></span> with CLI-only programs is that you might need to **memorise** a few useful inputs to the program _prior_ (which unlike Microsoft Word interface, the GUI is quite intuitive). This can be done by reading git [documentation](https://git-scm.com/doc) or simply googling terms like: _common **git** commands_, etc.

Notice that **git** (the first word of the command you typed above) is actually a **program**, and that `clone [project_url]` is an **input** to the **git** program; it means that we tell git to `clone` from this url. **git** accepts various inputs: `git commit -m [message]`, `git init`, `git add [files]`, and [many more](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository).

#### Where is git?

We can find git by typing `whereis git` command (for macOS and Linux only), or `where git` command for Windows. It will print the **path** of where this `git` program is stored. In the example below, its stored in `/usr/bin/git`. We can actually find it via the file finder, and attempt to **double click** to open it.

- It will open only a terminal, and print out some output before terminating
- This is because simply **double clicking** git does not gives it adequate **input** (like `clone`)
- This is equivalent to just typing the command `git` and pressing enter in the terminal as shown

<img src="/assets/images/background/7.gif"  class="center_seventy"/>

As you can see, `git` is just like any other programs you have downloaded and installed in your computer (MS Word, Steam, Telegram, Whatsapp), just that these programs have a **graphical user interface** while `git` does not.

#### Where is python?

`python` works the same way. You can find where `python` is installed in your computer and try to **double click** it. In the demo below, python in installed in `/Users/natalie_agus/.pipenv/shims/python`. Finding it via the file finder and double-clicking it opens a terminal window where you can use python interactively in the terminal.

<img src="/assets/images/background/8.gif"  class="center_seventy"/>

When you want to run a Python script, you can use the command `python file.py`, which means to give `file.py` as an **input** to the `python` **program** and **run** it.

#### Summary

The **first word** of each command that you have to enter to the CLI is **most likely** the **name** of the program that you want to execute. Whatever that comes on the right side of that program name is the **input** to that program.
{:.info}

A special exception is `cd` (this is not a program, go and take ISTD subject 50.005 to find out more), but all other commands you will use for `mp_sort` is a program. Try to find where the following resides (the path) in your computer and open it via the GUI file finder:

1. `ls` or `dir`
2. `flask`
3. `pipenv`
4. `pip`

## File Path

Each file on a computer has a **path**, such as `C:\Users\natalie_agus\Downloads\d2w_mini_projects\mp_sort\application.py` or `/Users/natalie_agus/Downloads/d2w_mini_projects/mp_sort/application.py`. Usually we can shorten it into `~/Downloads/example-file.txt` where `~` is `/Users/natalie_agus`, also known as your **home** path.

The reason one uses `/` (macOS/Linux) and the other `\` (Windows) is because each OS uses a **different file system**. Think of it like a different manager and storage system.
{:.info}

Folders also have a **path**. The path of the `Downloads` folder is then `C:\Users\natalie_agus\Downloads` or `/Users/natalie_agus/Downloads`. It is important for your terminal to "open" the right folder before executing a command, otherwise you **may not find the file**. You can find out your terminal's current "opened" folder using the `pwd` command (macOS/Linux) or `cd` (without any parameter) for Windows.

For example, if we execute the command `python application.py`, we need to **ensure** that the current working directory of the CLI is at `/Users/natalie_agus/Downloads/d2w_mini_projects/mp_sort`. The example below shows a scenario where you are at the **wrong** directory, and the file `application.py` is **not found** (error message printed _by_ the terminal).

<img src="/assets/images/background/9.png"  class="center_seventy"/>

We need to "open" the `mp_sort` folder first before we can successfully launch `application.py`:

<img src="/assets/images/background/10.png"  class="center_seventy"/>

Notice the error message is no longer `[Errno 2] No such file or directory`, but `ModuleNotFoundError: No module named 'flask'`. We know two things from this message:

1. `python` has launched **succesfully**, and the error message above is printed by `python` and not our terminal
2. We have **not** installed `flask` module for `python` to **import**

### Path Navigation in CLI

You can use `cd [path]` to navigate ("open") the folder that you want in the terminal.

For instance, `cd /Users/natalie_agus/Downloads/d2w_mini_projects/mp_sort` opens the `mp_sort` folder right away (that is if you can **remember** its path). Usually, people can't remember the path of their files, and instead perform `cd` in **stages**, combined with `ls` or `dir` to **view** the list of files in the current opened folder:

<img src="/assets/images/background/11.gif"  class="center_seventy"/>

Tips: press `tab` to **autocomplete** certain commands. The example you saw above utilises many terminal **extensions** to make your terminal **pretty**. macOS or Linux users, do yourself a favor and read [this article](https://medium.com/@shivam1/make-your-terminal-beautiful-and-fast-with-zsh-shell-and-powerlevel10k-6484461c6efb).
{:.info}

## **PATH** Environment Variable

Not to be confused with file **path** concept above.
{:.error}

`PATH` is simply a **variable** containing a **list** of directories to search when you enter a command into the command line. Formally, it is called **environment variable** but you don't have to understand what it means for now (take 50.005 in ISTD to find out more). This is the <span style="color:#f7007f;"><b>magic</b></span> behind command execution.

You can check this list by typing `echo $PATH` in your macOS/Linux terminal, or `$Env:Path` in your Windows terminal

- You will have an output looking as such
- Each "value" is separated by the **colon** (`:`)
  <img src="/assets/images/background/12.png"  class="center_seventy"/>

For example, if you enter `python` into the terminal, the terminal does the following:

- Goes through the **list** of directories in the `PATH` variable,
  - It will start searching for `python` in `/Users/natalie_agus/.pipenv/shims` if the `PATH` content is as the screenshot above
- Checks each directory if it contains the `python` executable
- If it does, **execute** it
- Else, check the next directory
  - If `python` doesn't exist in `/Users/natalie_agus/.pipenv/shims`, it will look for `python` in the second value: `/Users/natalie_agus/.rbenv/shims`, and so on.
- If `python` is not found anywhere, it will print `command python not found` and returns

### **Adding Executables to your PATH**

If you've ever tried to execute a command and was faced with an error such as the following in Windows:

```shell
[name] : The term '[name]' is not recognized as the name of a cmdlet, function, script file, or operable
program. Check the spelling of the name, or if a path was included, verify that the path is correct and try
again.
At line:1 char:1
+ xxx
+ ~~~~~~~
    + CategoryInfo          : ObjectNotFound: ([name]:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException
```

or the following in macOS/Linux:

```shell
zsh/bash: command not found: [name]
```

The above is simply an indication that your computer has searched through your `PATH` variable, but has not managed to find the **program** whose **name** **matches** the requested command.
{:.info}

To **fix** this, we simply need to ensure that our computer can **find** this executable. Windows handles this differently from macOS/Linux, so we describe the process for both operating system types:

### **Windows**

1. Search for '**Environment Variable**' into the Windows search bar, and click on '**Edit the system environment variables**'
2. Click on the '**Advanced**' tab
3. At the bottom of the tab, click on '**Environment Variables**'
4. On the new '**Environment Variables**' window that pops up, look for the '**PATH**' entry in the list of '**System variables**' (bottom half of the window)
5. Select the '**PATH**' entry, and click '**Edit...**'
6. You can now add a new directory by clicking '**New**' and entering the desired path (the location where you want the terminal to find the program whose name matches the first word of the command you will enter in the CLI)
7. When finished, click '**OK**' on all the windows
8. **Make sure to close and re-open a new terminal window before checking if the executable was successfully added to your `PATH`**

You can refer to [various online guides](https://docs.oracle.com/en/database/oracle/machine-learning/oml4r/1.5.1/oread/creating-and-modifying-environment-variables-on-windows.html) if you're stuck.

### **macOS and Linux**

We can add to our $PATH by editing our `~/.bashrc` or `~/.zshrc` file, which can be thought of as a **configuration** file for our terminal. This file can be found in your **home** directory.

- If your terminal uses `zsh`, you should edit `~/.zshrc` file
- else, you might be using `bash`, and you should edit `~/.bashrc` file
- If you're using other stuffs like `fish`, `tcsh`, or `ksh`, you're beyond us and you're probably not reading this document 😄

1. Navigate to your home directory in your command line

```shell
$ cd ~
```

2. Open the `.bashrc` (or `.zshrc`) file with the text editor of your choice, for example `nano`:

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

- `export <variable> = <value>` **sets** a variable to the specified value
  - Hence we are setting `PATH` to a new value
- `/path/to/exec:$PATH` has the value of our **old** PATH variable appended at the back, plus our desired new directory
  - `$PATH` has a dollar sign because we want to reference the **contents** of the `PATH` vairable
  - `:` is the separator used for the PATH variable

## Python Modules

When you navigate to wherever `mp_sort` is, e.g: `cd /Users/natalie_agus/Downloads/d2w_mini_projects/mp_sort`, and try running `python3 application.py` before anything else, you might be met with **ModuleNotFoundError**, namely that you might not have `flask` installed.

The program `pipenv` helps you install and **manage python modules** per project(libraries, which is just scripts that can be used by you as tools to do things). One popular module is `numpy`, which contains many matrix-related functions (dot product, cross product, etc). For this mini project, we will be using a bunch of python modules that we need to install. It is listed inside `requirements.txt` inside `mp_sort`:

<img src="/assets/images/background/14.png"  class="center_seventy"/>

### pipenv

The first thing to do is to install `pipenv` to your computer using the command:

```
pip install --user pipenv
```

> `pip` is a program that is _installed_ (placed in the `PATH`) when you installed Python to your computer. It helps you install another program called `pipenv`.

If you're met with such **WARNING**, add the path to your `PATH` variable:
<img src="/assets/images/background/13.png"  class="center_seventy"/>

For instance, we add the path `/Users/natalie_agus/.local/bin` to our `.zshrc`:

```bash
export PATH="$HOME/.local/bin:$PATH" # pipenv
```

Afterwards we can use `pipenv` to **install** all modules listed in `requirements.txt`.

### Where are these modules installed?

You can find the path where `pipenv` install your modules for **this project** by typing the command:

```bash
pipenv --venv
```

It will return a path **specific to this project**, for example:

```bash
/Users/natalie_agus/.local/share/virtualenvs/mp_sort-Xom1cKhU
```

If you open that path in your GUI File Finder, you will find all the **modules** (both scripts and executable): transcrypt, flask, wheel, etc in that location. Watch the gif below to understand more:

<img src="/assets/images/background/15.gif"  class="center_full"/>

### pipenv shell

You still can't run `python application.py` before running `pipenv shell`.

This is because despite these modules being **present** somewhere in your computer, `python` **cannot** find it. You need to **activate** the environment by typing the command `pipenv shell`, which is none other than telling the terminal to **look** for python-related modules in the path: `/Users/natalie_agus/.local/share/virtualenvs/mp_sort-Xom1cKhU`.

### Summary

When you work on **various projects**, they will require **various modules**. You want to be **more organised** and have a separated **environment** (a dedicated place where modules for each individual project is stored). This is what `pipenv` is for.
{:.info}

Note that you can install any module without `pipenv`, with the command:

```bash
pip install [module-name]
```

This will install your modules in a **standard** path such as:

```
/Users/natalie_agus/.local/lib/python[version]/site-packages
```

where `python[version]` can be your default python version, e.g: `python3.10`. You can imagine how that `site-packages` folder is going to be (very full!) when you install modules for all projects you ever touch into that folder.
