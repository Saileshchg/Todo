import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService } from 'src/app/task.service';
import { Task } from 'src/app/task.model';

@Component({
  selector: 'app-todoedit',
  templateUrl: './todoedit.component.html',
  styleUrls: ['./todoedit.component.css']
})
export class TodoeditComponent implements OnInit {
  id: number;
  todo: Task;
  name: string;
  priority: string;
  description: string;
  dispmessage = false;
  disptasks = true;
  priorityA: string[] = [];

  constructor(private route: ActivatedRoute, private taskservice: TaskService) {
    this.priorityA = this.taskservice.priority;
   }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.todo = this.taskservice.getTodos(this.id);
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params.id;
        this.todo = this.taskservice.getTodos(this.id);
        this.dispmessage = false;
        this.disptasks = true;

        }
    );
    this.name = this.todo.name;
    this.priority = this.todo.priority;
    this.description = this.todo.description;
  }
  Update() {
   this.taskservice.todo[this.id].name = this.name;
   this.taskservice.todo[this.id].priority = this.priority;
   this.taskservice.todo[this.id].description = this.description;
   this.dispmessage = true;
   this.disptasks = false;
  }

}
