import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss'],
  providers: [TaskService]
})
export class ManagementComponent implements OnInit {

  nextTask = 0;
  tasks = ["Soat 9 da yig'ilish", 'Yaponiyaga ish safari', 'Xisobot topshirilsin!']
  employees = ['Usmon Nosir', 'Abdurahmon Jomiy', 'Alisher Navoiy']
  history: string[] = [];

  constructor(private taskService: TaskService) {
    taskService.taskConfirmed$.subscribe(
      employee => {
        this.history.push(`"${employee}" tasdiqladi.`);
      }
    )
  }

  ngOnInit(){
  }
  announce() {
    let task = this.tasks[this.nextTask++];
    this.taskService.annunceTask(task);
    this.history.push(`"${task}" topshirig'i e'lon qilindi.`);
    if (this.nextTask >= this.tasks.length) {
      this.nextTask = 0;
    }
  }
}
