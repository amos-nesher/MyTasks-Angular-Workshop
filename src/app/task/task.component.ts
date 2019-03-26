import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task, taskStatusOptions } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() remove: EventEmitter<string> = new EventEmitter()
  
  statusOptions = taskStatusOptions;

  constructor() { }

  ngOnInit() {
  }

  doRemoveTask() {
    console.log("Remove - " + this.task.id);
    this.remove.emit(this.task.id);
  }
}
