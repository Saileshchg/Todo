import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task.model';
import { TaskService } from 'src/app/task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-tododetail',
  templateUrl: './tododetail.component.html',
  styleUrls: ['./tododetail.component.css']
})
export class TododetailComponent implements OnInit {
  todo: Task;
  id: number;
  disptasks = true;
  dispcomplete = false;
  dispdelete = false;
  constructor(private taskservice: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  this.id = this.route.snapshot.params.id;
  this.todo = this.taskservice.getTodos(this.id);
  this.route.params.subscribe(
    (params: Params) => {
      this.id = params.id;
      this.todo = this.taskservice.getTodos(this.id);
      this.disptasks = true;
      this.dispcomplete = false;
      this.dispdelete = false;
    }
  );
  }
  onComplete() {
    this.taskservice.completed.push(this.taskservice.todo[this.id]);
    this.taskservice.todo.splice(this.id, 1);
    this.disptasks = false;
    this.dispcomplete = true;
  }
  onDelete() {
    this.taskservice.todo.splice(this.id, 1);
    this.disptasks = false;
    this.dispdelete = true;
  }
  onEdit() {
    this.router.navigate(['todo', 'todo', 'edit', this.id]);
  }
}
