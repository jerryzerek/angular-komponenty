import {Component, Input, OnInit} from '@angular/core';
import {TasksService} from '../services/tasks.service';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {


  doneTasks = [];

  constructor(private taskService: TasksService) {
    this.taskService.getTasksDoneObs().subscribe(tasks => {
      this.doneTasks = tasks;
    });
  }

  ngOnInit() {
  }

  addToDoneTasks(id: number) {
    this.doneTasks.push(this.doneTasks[id]);
  }


}
