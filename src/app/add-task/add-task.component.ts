import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TasksService} from '../services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task;
  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }

  addTask() {
    this.tasksService.retrieveTask(this.task);
    this.task = '';
  }

}
