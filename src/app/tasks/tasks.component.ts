import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task, taskStatusOptions } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  @Input() tasks: Array<Task>;
  @Output() addTask: EventEmitter<any> = new EventEmitter();
  @Output() removeTask: EventEmitter<string> = new EventEmitter();

  statusOptions = taskStatusOptions;
  filterStatus: any = 'all'; 

  constructor() { }

  ngOnInit() {
  }

  doAddTask() {
    this.addTask.emit();
  }

  doRemoveTask(id: string) {
    this.removeTask.emit(id);
  }

  doPrint() {
    console.log(this.tasks);
  }

  doFilter(status: any) {
    this.filterStatus = status;
  }

}
