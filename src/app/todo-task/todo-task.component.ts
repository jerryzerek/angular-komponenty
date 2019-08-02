import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  @Input() tasks = [];
  @Output() removedTask = new EventEmitter<string>();
  @Output() doneTask = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  removeTask(id: number) {
    this.removedTask.emit(id.toString());
  }

  addToDoneTaskList(id: number) {
    this.doneTask.emit(this.tasks[id]);
    this.removedTask.emit(id.toString());
  }
}




