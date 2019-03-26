import { Injectable } from '@angular/core';

export enum TaskStatus {
    NOT_STARTED,
    IN_PROGRESS,
    DONE
}

export interface Task {
    id: string;
    title: string;
    status: TaskStatus;
}

export const taskStatusOptions = [
    {value: TaskStatus.NOT_STARTED, label: 'Not Started'},
    {value: TaskStatus.IN_PROGRESS, label: 'In Progress'},
    {value: TaskStatus.DONE, label: 'Done'}
]

@Injectable()
export class TasksService {
    private tasks: Array<Task> = [];
    private id = 0;

    constructor() {
        
    }

    addTask(title = '', status = TaskStatus.NOT_STARTED) {
        this.tasks.push({
            id: 'id-' + this.id++,
            title: title,
            status: status
        });
    }

    removeTask(id: string) {
        for (let i=0; i<this.tasks.length; i++) {
            if (this.tasks[i].id == id) {
                this.tasks.splice(i, 1);
                break;
            }
        }
    }

    getTasks(): Array<Task> {
        return this.tasks;
    }
}