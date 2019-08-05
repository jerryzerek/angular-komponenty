import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TasksService} from '../services/tasks.service';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  tasks = [];

  constructor(private taskService: TasksService) {
    this.taskService.getTasksListObs().subscribe((tasks: Array<string>) => {
      this.tasks = tasks;
    });
  }

  ngOnInit() {
  }

  removeTask(id: number) {
    this.taskService.deleteTask(id.toString());
  }

  addToDoneTaskList(id: number) {
    this.taskService.addToDonetaskList(this.tasks[id]);
  }
}




