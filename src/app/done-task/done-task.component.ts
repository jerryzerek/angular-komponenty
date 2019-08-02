import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {


  @Input() doneTasks = [];

  constructor() { }

  ngOnInit() {
  }

  addToDoneTasks(id: number) {
    this.doneTasks.push(this.doneTasks[id]);
  }



}
