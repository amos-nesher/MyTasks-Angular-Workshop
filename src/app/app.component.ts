import { Component } from '@angular/core';
import { TasksService, Task, TaskStatus } from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyTasks';
  tasks: Array<Task>


  constructor(private tasksService: TasksService) {
    this.tasksService.addTask('Hello Task 1');
    this.tasksService.addTask('Hello Task 2', TaskStatus.DONE);
    this.tasksService.addTask('Hello Task 3');
    this.tasksService.addTask('Hello Task 4');

    this.tasks = this.tasksService.getTasks();
  }

  doAddTask() {
    console.log("Add new task");
    this.tasksService.addTask();
  }

  doRemoveTask(id: string) {
    console.log("app - remove task - " + id);
    this.tasksService.removeTask(id);
  }
}
