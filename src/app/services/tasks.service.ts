import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class TasksService {

  private tasks = [];
  private doneTasks = [];

  private tasksListObs = new BehaviorSubject<Array<string>>([]);
  private tasksDoneObs = new BehaviorSubject<Array<string>>([]);

  constructor() {
    this.tasksListObs.next(this.tasks);
  }

  retrieveTask(event) {
    this.tasks.push(event);
    this.tasksListObs.next(this.tasks);
  }

  deleteTask(event) {
    this.tasks.splice(event, 1);
    this.tasksListObs.next(this.tasks);
  }

  addToDonetaskList(event) {
    this.doneTasks.push(event);
    this.tasksDoneObs.next(this.doneTasks);
    this.deleteTask(event);
  }

  getTasksListObs(): Observable<Array<string>> {
    return this.tasksListObs.asObservable();
  }

  getTasksDoneObs(): Observable<Array<string>> {
    return this.tasksDoneObs.asObservable();
  }


}
