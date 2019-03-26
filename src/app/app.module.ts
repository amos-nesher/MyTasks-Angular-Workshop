import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';
import { StatusFilterPipe } from './pipes/status-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskComponent,
    StatusFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    TasksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
