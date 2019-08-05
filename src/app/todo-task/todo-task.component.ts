import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TasksService} from '../services/tasks.service';
import {Task} from "../models/task";

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  tasks: Array<Task> = [];

  constructor(private taskService: TasksService) {
    this.taskService.getTasksListObs().subscribe((tasks: Array<Task>) => {
      this.tasks = tasks;
    });
  }

  ngOnInit() {
  }

  removeTask(task: Task) {
    this.taskService.deleteTask(task);
  }

  addToDoneTaskList(task: Task) {
    this.taskService.addToDonetaskList(task);
  }
}




