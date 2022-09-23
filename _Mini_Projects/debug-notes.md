---
title: Debug Notes
permalink: /mini_projects/debug-notes
key: miniprojects-debug
layout: article
license: false
sidebar:
  nav: MiniProjects
aside:
  toc: true
show_edit_on_github: false
show_date: false
---

This notes compile all sorts of bugs that you _might_ encounter when running the mini project. Hopefully this helps 🩹.

### TLDR: Running on Vocareum

We have given the steps to you in the `README` file, we have also written additional explanations for you. But as the cherry on top, here's the steps:

We assume you follow the _easy step_, which is to clone the original repository and just paste your answer.
{:.info}

1. **Clone** the repository
   ```shell
   git clone https://github.com/Data-Driven-World/d2w_mini_projects.git
   ```
2. **Refresh** the webpage, you should see it in vocareum's file tree on the left hand side pane
3. Change directory, **install** pipenv, **install** modules, **start** pipenv shell
   ```shell
   cd d2w_min_projects/mp_sort
   pip install --user pipenv
   pipenv install
   pipenv shell
   ```
4. Change the **content** of `/app/__init.py__`: set `voc=True`. You can click the python file from the Vocareum left pane.
   ```python
   # set voc=False if you run on local computer
   application.wsgi_app = PrefixMiddleware(application.wsgi_app, voc=True)
   ```
5. Paste your answer in the **relevant files**, e.g `library.py`, `*.html` files, etc.
6. Run **transcrypt** (assuming your current directory is `mp_*`)
   ```shell
   cd /app/static
   python -m transcrypt -b -n library
   ```
7. Go back to `mp_*` directory, change the bash script to be executable and run:
   ```shell
   cd ../..
   chmod a+x ./runflaskvoc.sh
   ./runflaskvoc.sh
   ```
8. Once it is running, you can open another tab in your browser and type the following url: [https://myserver.vocareum.com/](https://myserver.vocareum.com/)

### Env does not have the var VOC_PROXY_ID

You need to add the **trailing slash** at the URL as shown in the screenshot below:
<img src="/assets/images/debug-notes/2022-09-23-17-07-41.png"  class="center_seventy"/>

### bash: ./runflaskvoc.sh /bin/bash^M: bad interpreter

This is due to the way **newline** is encoded in Windows vs UNIX machines. You can read more about it [here](https://support.nesi.org.nz/hc/en-gb/articles/218032857-Converting-from-Windows-style-to-UNIX-style-line-endings).

#### Fix

- Open runflaskvoc.sh on vocareum
- Go to line 2 (the empty line after #!/bin/bash)
- Press backspace
- Press enter
- Wait for it to save
- Run ./runflaskvoc.sh again

> Courtesy of TA Daniel

### Error: The server responded with a non-Javascript MIME type of "text/plain"

It means that _something_ might have changed your [Windows registry](https://support.microsoft.com/en-us/windows/how-to-open-registry-editor-in-windows-10-deab38e6-91d6-e0aa-4b7c-8878d9e07b11) file.

#### Fix:

- Open your search bar by pressing Win + R
- Type in regedit and press enter
- Find .js under the parent path HKEY_CLASSES_ROOT
- Change the data field of Content Type from text/plain to application/javascript
- Save, and then re-run flask run

> Courtesy of TA Alex

### IndexError: list index out of range

If the error as such appear after typing the `transcrypt` command:

```shell
Traceback (most recent call last):
  File "/mnt/vocwork2/ddd_v1_w_2bG_1401946/asn1029778_3/asn1029779_1/work/.local/share/virtualenvs/mp_sort-K9CB8Yy2/lib/python3.8/site-packages/transcrypt/__main__.py", line 162, in main
    compiler.Program (transpilationDirs, __symbols__, __envir__)
  File "/mnt/vocwork2/ddd_v1_w_2bG_1401946/asn1029778_3/asn1029779_1/work/.local/share/virtualenvs/mp_sort-K9CB8Yy2/lib/python3.8/site-packages/transcrypt/modules/org/transcrypt/compiler.py", line 112, in __init__
    message = f'\n\t{exception}'
  File "/mnt/vocwork2/ddd_v1_w_2bG_1401946/asn1029778_3/asn1029779_1/work/.local/share/virtualenvs/mp_sort-K9CB8Yy2/lib/python3.8/site-packages/transcrypt/modules/org/transcrypt/utils.py", line 215, in __str__
    result += '\n\tFile \'{}\', line {}, namely:'.format (str (program.importStack [-1][0] .name), self.lineNr)
IndexError: list index out of range
```

then it is likely that you **did not execute transcrypt** in `app/static` directory. Simply `cd` there and re-run the `transcrypt` command again.
