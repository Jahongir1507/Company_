import { Injectable } from '@angular/core';
//import { Subject } from 'rxjs/internal/Subject';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskAnnouncedSource = new Subject<string>();
  private taskConfirmedSource = new Subject<string>();
  public taskAnnounced$ = this.taskAnnouncedSource.asObservable();
  public taskConfirmed$ = this.taskConfirmedSource.asObservable();

  constructor() { }

  annunceTask(task: string){
    this.taskAnnouncedSource.next(task);
  }

  confirmTask(employee: string){
    this.taskConfirmedSource.next(employee);
  }
}
