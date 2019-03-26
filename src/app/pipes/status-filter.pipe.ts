import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../tasks.service';

@Pipe({
  name: 'statusFilter'
})
export class StatusFilterPipe implements PipeTransform {

  transform(tasks: Array<Task>, status: any): any {
    if (status == 'all') {
      return tasks;
    }

    return tasks.filter( task => task.status == status);
  }

}
