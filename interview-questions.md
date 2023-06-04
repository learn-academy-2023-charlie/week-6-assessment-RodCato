# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: To fix this issue create a migration file (AddForeignKeyToStudent). The key would be named cohort_id. It would be on the Student model.


Researched answer: To fix the mistake of not adding the foreign key in your Rails application's Cohort model, you need to generate a migration to add the missing foreign key. The foreign key should be added to the Student model, as it belongs to the Cohort model.
-run $ rails generate migration AddForeignKeyToStudent cohort:references
-in the newly created migration file the CHANGE method is already prepopulated. 
-in the migration file add the following - add_reference :students, :cohort, foreign_key: true this adds the cohort_id to students
-after that is complete run rails db:migrate for changes to be added to the schema

2. Which RESTful routes must always be passed params? Why?

Your answer: SHOW, EDIT, UPDATE and DESTROY must always be passed with params because their actions must be performed on a specific instance/id.

Researched answer: POST route action (create) requires parameters to be passed. These parameters contain the data needed to create a new resource. For example, when creating a new user, you would pass parameters like email and password. PUT or PATCH route action (update) requires parameters to identify the resource to be updated and to provide the updated data. For example, when updating a user's information, you would pass the user ID and the updated attributes like add a username or email. DELETE route action requires parameters to identify the specific resource to be deleted. The parameter that is passed is the unique identifier or user id. For example, when deleting a user, you would pass the user ID as a parameter to specify which user should be deleted.


3. Name three rails generator commands. What is created by each?

Your answer: rails g model - creates the database model that will store the data and data type you specify during creation
rails g migration - creates a migration file that allows you change the database structure
rails g resource - creates the model with specified data, controller and all the RESTful routes. 

Researched answer: 
-rails generate model: This command is used to generate a model along with its corresponding migration file. 
-rails generate controller: This command is used to generate a controller file along with its associated views and test files.
-rails generate scaffold: This command is used to generate a complete set of resources, including a model, migration, controller, views, and test files. The scaffold generator will build several files in your application, along with some folders, and edit config/routes.rb. (This one is new to me and I learned about it from this source https://guides.rubyonrails.org/v3.2/getting_started.html)

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students - INDEX method - will display a list or page of al students

action: "POST" location: /students - CREATE method - will create a new instance of a student

action: "GET" location: /students/new - NEW method - will return a HTML form to create a new student

action: "GET" location: /students/2 - SHOW method - will return a student that matches the 2 id

action: "GET" location: /students/2/edit - EDIT method - will return an HTML form to edit the student that matches the 2 id

action: "PATCH" location: /students/2 - UPDATE method - will update the student that matches the 2 id

action: "DELETE" location: /students/2 - DESTROY method - will delete the student that matches the 2 id

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

1. As a user, I want to see a text input box so I can add a task to a list that I can keep track of.

2. As a user, I want to be able to see a list of the tasks I created to manage my time accordingly.

3. As a user, I want to be able to mark tasks as complete or incomplete so I can keep track of their status.

4. As a user, I want to be able to set the priority level of a task to prioritize their importance from least to most important.

5. As a user, I want to be able to set a due date and time on each task to keep track of time left to complete a task.

6. As a user, I want to be able to search and filter my to-do list based on different criteria like by due date or priority level so that I can view tasks that need immediate attention.

7. As a user, I want to add notes to each task so that I can have more details about what each task entails.

8. As a user, I want to be able to create categories for tasks so I can group the tasks by which category they belong too.

9. As a user, I want to be able to invite my contacts to see a task so they can see the status of the task and stay informed on it's progress.

10. As a user, I want to be able to see my to-do list on multiple devices and be able to edit and create a task from whichever device I chose.