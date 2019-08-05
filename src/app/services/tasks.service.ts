import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Task} from "../models/task";

@Injectable()
export class TasksService {

  private tasks: Array<Task> = [];
  private doneTasks: Array<Task> = [];

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);
  private tasksDoneObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    this.tasks = [
      {name: 'powiesic pranie', created: new Date()},
      {name: 'dokonczyc kurs angulara', created: new Date()}
    ];
    this.tasksListObs.next(this.tasks);
  }

  retrieveTask(task: Task) {
    this.tasks.push(task);
    this.tasksListObs.next(this.tasks);
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(e => e !== task);
    this.tasksListObs.next(this.tasks);
  }

  addToDonetaskList(task: Task) {
    this.doneTasks.push(task);
    this.tasksDoneObs.next(this.doneTasks);
    this.deleteTask(task);
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }

  getTasksDoneObs(): Observable<Array<Task>> {
    return this.tasksDoneObs.asObservable();
  }


}
