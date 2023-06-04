# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: To fix this issue create a migration file (AddColumnForiegnKeyToStudent). The key would be named cohort_id. It would be on the Student model.

Researched answer:

2. Which RESTful routes must always be passed params? Why?

Your answer: SHOW, EDIT, UPDATE and DESTROY must always be passed with params because their actions must be performed on a specific instance/id.

Researched answer:

3. Name three rails generator commands. What is created by each?

Your answer: rails g model - creates the database model that will store the data and data type you specify during creation
rails g migration - creates a migration file that allows you change the database structure
rails g resource - creates the model with specified data, controller and all the RESTful routes. 

Researched answer:

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students - INDEX method - will display a list or page of al students

action: "POST" location: /students - CREATE method - will create a new instance of a student

action: "GET" location: /students/new - NEW method - will return a HTML form to create a new student

action: "GET" location: /students/2 - SHOW method - will return a student that matches the 2 id

action: "GET" location: /students/2/edit - EDIT method - will return an HTML form to edit the student that matches the 2 id

action: "PATCH" location: /students/2 - UPDATE method - will update the student that matches the 2 id

action: "DELETE" location: /students/2 - DESTROY method - will delete the student that matches the 2 id

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.
