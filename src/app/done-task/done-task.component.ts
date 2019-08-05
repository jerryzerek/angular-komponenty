import {Component, Input, OnInit} from '@angular/core';
import {TasksService} from '../services/tasks.service';
import {Task} from "../models/task";

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {


  doneTasks: Array<Task>  = [];

  constructor(private taskService: TasksService) {
    this.taskService.getTasksDoneObs().subscribe(tasks => {
      this.doneTasks = tasks;
    });
  }

  ngOnInit() {
  }

}
