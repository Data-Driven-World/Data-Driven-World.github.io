---
title: Web Basics
permalink: /mini_projects/background-web
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

This document should provide you with the basic idea on how to setup a basic web server and its interaction with the web browser. It will **not** make you a web developer, but at least you may understand some fundamentals for the mini project.

<span style="color:#f7007f;"><b>Disclaimer</b></span>: note that everything described here is a **gross** oversimplification of what actually happens in your computer. Take the subject **50.005** in ISTD (Term 5) if you'd like to learn more.
{:.error}

## How the Web Works (Baby Edition)

When you type in a URL (a.k.a web address) in your web browser's search bar, you can think of your browser as sending a **request** message out to the internet to reach the recepient with that address matching the URL you just typed. For example, type: `http://natalieagus.net:1234` in your web browser (you need to allow unsecure connection), and you will be faced with this output:

<img src="/assets/images/background/17.png"  class="center_fifty"/>

### Inspecting a Site

This is a _website_, an **overtly simple** website containing just a **single** text: `My first server!`. Where did your browser get this particular information? Before we go there, let's see what "this" information is. Right click on your browser and click **inspect** (you might need to [enable **developer tools**](https://support.apple.com/en-sg/guide/safari/sfri20948/mac) if you use Safari):

<img src="/assets/images/background/18.png"  class="center_fifty"/>

### Looking at Sources

Under `Sources` tab you should see that there's only **one** file called `index` that's sent by `natalieagus.net:1234`. Inside that file we can find a text `My first server!` and **nothing else**. No color, no styling, no images, no videos, no fancy stuffs that you will find in a modern website. Whereas if you load our course website and **inspect**, under Sources tab you will see a lot more files being sent over by `https://data-driven-world.github.io`:

<img src="/assets/images/background/20.png"  class="center_full"/>

All these files: `.js, .css, .html` are **processed** and **rendered** by our browser so that you can see what you currently see on your browser page.

## Web Server

The big question now is: **who** sent these files over to our browser? **Who** is this "entity" that answered our "request" when we type in the URL in the search bar, and _then_ reply with these bunch of files for our browser to render and eventually for us to read?

This "entity" is called a <span style="color:#f7007f;"><b>web server</b></span>. Just like a regular restaurant _server_, the web server's job is to **give** (serve) relevant files when **requested**.
{:.info}

A web server is an application (just like any regular application in your computer such as your Elden Ring, Telegram, Web Browser, VSCode, etc) and it _typically_ does not have a graphical user interface. It has **one main job**, to reply to website-related requests directed to it. The "internet" is just a generic name of various **infrastructures** to make it possible for your computer to **communicate** (send "packets" of data) with other computers (servers) around the world so that you can load your Netflix series and play Valorant.

> You can think of the Internet as a bunch of _roads_ (medium) made for these "packets" of data to "travel".

<img src="/assets/images/background/16.png"  class="center_full"/>

### Physical Location

So **where** is the Web Server for `http://natalieagus.net:1234`?

By _where_, we mean _where_ is the computer running the web server to answer requests by browsers accessing `http://natalieagus.net:1234` located? Well, the web server is run on AWS EC2, so the **actual** device running that piece of server program can be [any of these AWS server locations](https://aws.amazon.com/about-aws/global-infrastructure/).

What about the location of the computer running the web server for `https://data-driven-world.github.io`?

We **don't know**. Github does not exactly advertise its server locations for security reasons, etc. It could be in the US, it could be in the EU, or it could be right here in Singapore. The beauty is that **we don't have to care**. We focus on making a nice website and design how users can interact with it, then engage companies like GitHub or Amazon to **host** (run the program) of our web server.

### Local Web Server

When you type in the command `flask run` for the mini projects, you are essentially spawning a **web server** in your own computer. That is why you can access your website by typing the URL `http://127.0.0.1:5000/` in your web browser. The value `127.0.0.1` means **yourself** (your own addresss), so your browser will send a **request packet** addressed to yourself, which will arrive at the python web server you are currently running. It will then reply with the necessary files for your browser to render the MP1 welcome page:

<img src="/assets/images/background/21.png"  class="center_full"/>

## Hello Flask!

It is useful to try to create your very basic own web server in Python with `flask` before going further into the MP.

Flask is a Python **web framework**. It is a tool that you can use so that it is easy to make and deploy a website. It abstracts away the **need to know how** to:

1. Process incoming request from the web browser
2. Craft the **correct** "response" to the web browser
3. Run a web server in **port** `5000` (just think of this like buying a house and getting a unit number so people can reach you)
4. Other unpleasant detail on how the web works, optimisation, etc, making developing and maintaining website so much easier

There are **plenty of web frameworks** out there: [Ruby on Rails](https://rubyonrails.org/), [Angular](https://angular.io/), [React](https://reactjs.org/), and [Svelte](https://svelte.dev) to name a few. You need to know that not all web frameworks are the same. Some of them are **full stack**, some **front-end**, and some are **micro-framework**. Flask is micro-framework (simple, does not require any pre-existing third-library parties to provide common functionalities).

Create a new folder named `flaskexample` in a **path** of your choice, and "open" that folder in your terminal by `cd`-ing to it. Then, you can run the command `pipenv install flask` to install it to the `flaskexample` (matching the folder name) virtual environment.

<img src="/assets/images/background/22.png"  class="center_full"/>

Now create a new file called `app.py` inside `flaskexample` folder with the following content:

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'My first server!'

app.run(host='0.0.0.0', port=81)
```

The file `app.py` **must** be in this name. `flask` looks for `app` folder or `app.py` file as an **entry point**.
{:.warning}

This will prompt you to open `http://127.0.0.1:5000/` on your browser, and you will be met with the message `My first server!` which is what's returned by the `index()` function above.

<img src="/assets/images/background/23.png"  class="center_full"/>

The mini project is **more complicated** than just sending a text back to your browser. There are several **routes** (like different **paths**) in the MP; that is if you add a slash `/[path]` at the back of the URL, the `flask` app knows which files to **serve** (send back) to your browser. Looking at routes.py, this should be **obvious**:

```python
from flask import render_template
from app import application

@application.route('/')
@application.route('/index')
def index():
    return render_template('index.html', title='Mini Project 1 Home')

@application.route('/ex1')
def exercise1():
    return render_template('ex1.html', title='Mini Project 1 Exercise 1')

@application.route('/ex2')
def exercise2():
    return render_template('ex2.html', title='Mini Project 1 Exercise 2')
```

1. If we type `http://127.0.0.1:5000/` (homepage) in the browser, this server send `index.html` file back to the browser
2. Else if we type `http://127.0.0.1:5000/ex1` (homepage) in the browser, this server send `ex1.html` file back to the browser
3. Else if we type `http://127.0.0.1:5000/ex2` (homepage) in the browser, this server send `ex2.html` file back to the browser
4. Else, a generic URL not found message will be sent back to the browser (automatically handled by Flask unless you override)
   - Try typing `http://127.0.0.1:5000/ex3` and see what happens

## Conclusion

Notice how whenever you request the URL, the console on the web server app will print out soemthing about `GET/ HTTP/1.1`. That is the "request" message that's sent by our browser to our web server. `HTTP` is a [well-established protocol](https://developer.mozilla.org/en-US/docs/Web/HTTP) for transmitting web-related documents such as the HTML file.

```bash
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
127.0.0.1 - - [08/Sep/2022 13:18:09] "GET / HTTP/1.1" 200 -
```

We don't need to know or care how `HTTP` works to send the `My first server!` reply. This is the **magic** of web frameworks like Flask, it **abstracts away** basic details so that we can **focus** on making your website work. Note that advanced understanding and skill in **web development** requires you to possess a **full stack knowledge**, starting from how your computer works, how operating system runs various programs and manage resources (CPU, RAM, Cache, etc), how the internet works, the network protocol stack, network and system security, **on top of** getting up to date with the most recent web development frameworks and **mastery** in programming skills (Javascript, Flutter, Kotlin, etc), **and** possibly knowing how to **test, maintain, and scale** your project (the DevOps department, buzzword: CI/CD). It can take easily a **decade** to do all these, so get your **fundamentals right** and take it easy should you ever want to dive into the software engineering world.

### Where to go from here?

If you have not tried any other web development framework before, you can give Flask a try. There are plenty of amazing online tutorials about Flask out there [like this one](https://www.youtube.com/watch?v=mqhxxeeTbu0&list=PLzMcBGfZo4-n4vJJybUVV3Un_NFS5EOgX). If you want something else fancier then you can give [Svelte](https://www.youtube.com/watch?v=zojEMeQGGHs&list=PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO) a try.
