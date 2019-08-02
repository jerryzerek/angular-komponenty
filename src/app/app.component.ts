import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tasks = [];
  doneTasks = [];

  constructor() {
  }

  retrieveTask(event) {
    this.tasks.push(event);
  }

  deleteTask(event) {
    this.tasks.splice(event, 1);
  }

  addToDonetaskList(event) {
    this.doneTasks.push(event);
  }
}
































