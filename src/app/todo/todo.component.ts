import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Task[] ;
  constructor(private taskservice: TaskService) { }

  ngOnInit() {
    this.todos = this.taskservice.getTodo();
  }

}
