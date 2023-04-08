import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit{

  @Input() employee!: string;
  announced: boolean = false;
  confirmed: boolean = false;
  task: string = "<topshiriq yuq>";

  constructor(private taskService: TaskService) {
    taskService.taskAnnounced$.subscribe(
      task => {
        this.task = task,
        this.announced = true;
        this.confirmed = false;
      })
  }
  ngOnInit(){
  }

  confirm() {
    this.confirmed = true;
    this.taskService.confirmTask(this.employee);
  }
}
