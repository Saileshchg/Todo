import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
  completed: Task[];
  constructor(private taskservice: TaskService) { }

  ngOnInit() {
    this.completed = this.taskservice.getCompleted();
  }

}
