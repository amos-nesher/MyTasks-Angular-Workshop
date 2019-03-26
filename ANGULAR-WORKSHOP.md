# Angular Workshop

## Initial MyTasks project

The current code in this project contains the MyTasks application that we did together in the presentation. 

We covered the following stuff:
- Create an Angular new project
- Add two components Tasks and Task
- Add a tasks service to handle a list of the tasks with the abilities to add and remove tasks
- Implement 'Add Task' and 'Remove' buttons
- Used Template-driven form to bind the tasks model to the task component inputs
- Add a pipe to filter the tasks by its status
- We used *ngFor directive
- We used @Input and @Output


## Exercises

### Exercise 1: Use Observable (Subject) to get the tasks list

We talk about smart and dummy components. Smart component interacts with the application state while the dummy does not.
Dummy components are like 'pure function', they getting input and issuing out an output. They do not change the application state directly. 

The way we using the tasks list from the tasks.service is wrong. The 'wrong' way causing a bug in the application. 

Try to filter the tasks list and then edit a task. Use the Print button to check whether the task was updated. What do you see?

Your task is to use an Observable to serve the tasks list.

Angular is heavily depended on the "rxjs" library. See https://www.learnrxjs.io/

We will use the *Subject* class from "rxjs" for this exercise.

#### Instructions:
- Add a Subject to the tasks.service
- Any change in the tasks list should send a new immutable tasks list to the Subject
- The app component need to subscribe to the Subject from the tasks.service
- Upon a new value from the Subject (a new tasks list has arrived), the whole tasks list will be updated
- Task component needs to fire an "update" event when the task values are changed. It will not directly change the "real" task values
- The Tasks will forward the "update" event to the app component
- The app component will use a new "updateTask" function in tasks.service to update the task information
- The "updateTask" will push a new value to the Subject with the updated tasks list

#### What you will have done?

- You create a "single source proof" for the application state (our tasks list). Only the tasks.service can change the tasks list.
- You make the Tasks and Task component to be "real" dummy. They don't interact directly with the application state.
- You solved the bug that we describe above.
