import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task.model';
import { TaskService } from 'src/app/task.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-completeddetail',
  templateUrl: './completeddetail.component.html',
  styleUrls: ['./completeddetail.component.css']
})
export class CompleteddetailComponent implements OnInit {
  completed: Task;
  id: number;
  disptasks = true;
  dispdelete = false;
  disppending = false;
  constructor(private taskservice: TaskService, private route: ActivatedRoute) { }

  ngOnInit() {
  this.id = this.route.snapshot.params.id;
  this.completed = this.taskservice.getCompleteds(this.id);
  this.route.params.subscribe(
    (params: Params) => {
      this.id = params.id;
      this.completed = this.taskservice.getCompleteds(this.id);
      this.disptasks = true;
      this.dispdelete = false;
      this.disppending = false;
    }
  );
  }

  onDelete() {
    this.taskservice.completed.splice(this.id, 1);
    this.disptasks = false;
    this.dispdelete = true;
  }
  onPending() {
    this.taskservice.todo.push(this.taskservice.completed[this.id]);
    this.taskservice.completed.splice(this.id, 1);
    this.disptasks = false;
    this.disppending = true;
  }
}
