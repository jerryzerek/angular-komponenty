import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() eventTask = new EventEmitter<string>();

  task;
  constructor() { }

  ngOnInit() {
  }

  addTask() {
    this.eventTask.emit(this.task);
    this.task = '';
  }

}
