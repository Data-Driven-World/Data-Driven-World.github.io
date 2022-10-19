---
title: Mini Project Checkoff Protocol
permalink: /mini_projects/checkoff
key: miniprojects-checkoff
layout: article
license: false
sidebar:
  nav: MiniProjects
aside:
  toc: true
show_edit_on_github: false
show_date: false
---

## General Checkoff Protocol

To obtain **all 5 pts** of MP marks, you need to **submit** your project to Vocareum <span style="color:#f7007f;"><b>AND</b></span> complete the in-person **checkoff**. Please approach **your cohort's TA** or your cohort's **instructor** during Mini Project session of the week for checkoff.

Ensure that you have submitted the code to Vocareum and **done** with the checkoff this **BEFORE the deadline** (refer to your course handout and Vocareum).
{:.info}

There are 3 criterias for the grading as reflected in Vocareum. They make up the 5pts:

1. **[2pt]** Working Test Case
2. **[2pt]** Understanding of Code
3. **[1pt]** Code Quality

Before you approach them for checkoff, you need to ensure that <span style="color:#f7007f;"><b>all</b></span> components above are fulfilled:

1. **[1pt]** **Code Quality**: Ensure that your project can **compile** and <span style="color:#f7007f;"><b>MUST run in Vocareum</b></span>. Running locally **does not count** (will lose this point). We will scan your code for **quality** (consistent variable naming, clear comments). You [can read this article](https://testdriven.io/blog/clean-code-python/) (take it lightly, we won't be so strict) for starters.
2. **[2pts]** **Working Test Case**: Ensure that the items in the **checklist** (see respective heading below) are **functioning**.
   - If any checklist item is missing, your grade will be prorated accordingly
3. **[2pts]** **Understanding of Code** via **Q&A**: we will verbally ask 3 **related questions** to **any** student in the team. There are two question categories, at least 1 question from each category will be selected. You're required to score 2 out of 3 questions accurately to obtain fullmarks. Simply open your related project files during the checkoff and give a verbal explanation.
   1. About your implementation (exercise related)
   2. About the project in **general** (background knowledge)

Our instructor/TA will then record the points for your MP in our internal excel sheet (and/or Vocareum). We will release it after the MP deadline.

Please bring your laptop(s) and open your project when you approach our TA/Instructor for checkoff. **We want to see your program in person.**
{:.info}

## Q&A Grading Breakdown

The Q&A session is **important** and will fulfil the **Understanding of Code** criteria. It really tests the understanding of your implementation and your general knowledge about the project. You may get various marks between **0 to 1 pt** per exercise with granularity of **0.25pt** depending on your answer.

> Total max mark for this section is 2pts. 1pt max for **each** exercise in the MP.

Here's the general rubric for the Q&A section **for each exercise**:

| Points    | Explanation                                                                                                                         |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 😄`1`     | Can answer **2 out of 3** with clarity (googling, internal discussion, reference to old notes allowed)                              |
| 🙂`0.75`  | Can answer **2 out of 3** but with **hints from TA/instructor**, and takes a comparably long time (lots of staring, silent moments) |
| 😐`0.5`   | Only can answer 1 question accurately, the rest are _smokey_                                                                        |
| 😟`0.25 ` | Cannot answer any question accurately, but at least know **which file** contain their answer, and some explanation                  |
| 😵‍💫`0`     | **No idea** at all about the project, not even about admin matters like which file should contain their answer                      |

Note that we might ask any of you for answers. Please ensure that everybody knows all parts of the project, at least the big picture. This is where you will learn.
{:.info}

## Mini Project 1 Details

There are **8 checks** for both exercises in MP1. Each is worth **0.25 pts**, totalling of **2pts** under "Working Test Case" **criteria**.

### Exercise 1 [4 checks]

1. 10 **integers** (OK to have repeated value) appear when `Generate 10 numbers` button is clicked
2. Totally sorted **integer** output is displayed when `Sort` button is clicked
3. In `/app/static/library.py`, the implementation in `sortnumber1()` is **NOT hardcoded** like this, but some sorting function is called to actually compute the sorted value.
4. A **custom** sort function (e.g: `bubble_sort` with actual implementation) is used to compute (2), and not using python's default [`list.sort()`](https://docs.python.org/3/howto/sorting.html)

### Exercise 2 [4 checks]

1. The textbox can accept **integers**, separated by a comma. **NO NEED** to test for float, string, or other weird data types (but it is good practice, just that we aren't so strict for this checkoff)
2. Some kind of **warning** should appear when the textbox is empty but `Sort` is clicked (no error)
3. The output **integers** are sorted properly when the button `Sort` is clicked.
4. A **custom** sort function (e.g: `bubble_sort` with actual implementation) is used to compute (2), and not using python's default [`list.sort()`](https://docs.python.org/3/howto/sorting.html)

### Q&A

Exercise related question involves questioning **how** and **why** you implement certain things in your project.

> It is pretty clear cut what it entails: we will ask about any instruction (program) that **you** wrote for this project (anything that you wrote is fair game). Examples include your sort implementation, how did you display the values to the webpage, how did you manipulate certain values, etc.

Project-related question involves **understanding** the project structure:

1. Command-line related question (all commands that we ask you to type for MP1 is fair game)
2. Flask project structure brief overview (what **each** file is for?)
3. Web Server and Browser Client communication (very basic idea)
4. General understanding of Python modules used in the project
5. General understanding of the Python virtual environment

Don't worry, it will be very **basic**. If in doubt, please read [this handout about CLI background](https://data-driven-world.github.io/mini_projects/background-cli) and [this handout about the Web](https://data-driven-world.github.io/mini_projects/background-web) that we have asked you to read in Week 1.

**Why do you have to know all these: CLI/Web/structure of project as well?**

It is important to be **independent** and **curious** about things you've worked on, so that you can **apply** this knowledge in other circumstances and not just studying for the sake of the MP only. Doing things for one-off purposes are such a waste of time. And of course, for those of you who are going to ISTD, it is **crucial** to have this mindset and not to mention the knowledge about CLI and the Web. The material provided in the background handouts are **nothing** compared to what you will face in Term 4 and Term 5 as **most details** are omitted, but they will give you about 2% heads up 🥹.

## Mini Project 2 Details

There are **8 checks** for both exercises in MP1. Each is worth 0.25 pts, totalling of 2pts under “Working Test Case” criteria. **This is similar to MP1**.

### Exercise 1 [3 checks]

1. In `/app/serverlibrary.py`, there exist a `mergesort` implementation **from scratch**, no other sorting libraries can be used.
2. Able to **create** users **and** login as that user.
3. Able to **create** many users and display all registered users under `Users` page.

### Exercise 2 [5 checks]

1. In `/app/serverlibrary.py`, there exist a `Stack` implementation in there **from scratch**, e.g: `pop`, `peek`, etc is implemented/
2. In `/app/serverlibrary.py`, there exist a `EvaluateExpression` implementation in there **from scratch**.
3. Users can create questions and the answer displayed in `/questions` page is correct. Users can also send it to multiple other users.
4. Users can `Show/Hide` questions and enter the correct answer in the `/challenges` page, afterwhich the timer value is displayed at the row.
5. In the **Hall of Fame**, we can see the **ranks** properly, where each ROW is a question, and WITHIN the same row of question, the display of username and score must be shown properly (top 3)/

### Q&A

Similar protocol like MP [above](http://127.0.0.1:4000/mini_projects/checkoff#qa). Please read all necessary markdown files: [Bootstrap](https://github.com/Data-Driven-World/d2w_mini_projects/blob/master/mp_calc/Bootstrap.md), [Database](https://github.com/Data-Driven-World/d2w_mini_projects/blob/master/mp_calc/Database.md), and [Forms](https://github.com/Data-Driven-World/d2w_mini_projects/blob/master/mp_calc/Forms.md) that was available at the [mini project 2 repository](https://github.com/Data-Driven-World/d2w_mini_projects/tree/master/mp_calc) before going for the checkoff.
