import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TasksService} from '../services/tasks.service';
import {Task} from "../models/task";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask: string;
  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }

  addTask() {
    const task: Task = {name: this.newTask, created: new Date()};
    this.tasksService.retrieveTask(task);
    this.newTask = '';
  }

}
