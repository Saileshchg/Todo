import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent  {
  @ViewChild('name', {static: false}) name: ElementRef;
  @ViewChild('priority', {static: false}) priority: ElementRef;
  @ViewChild('desc', {static: false}) desc: ElementRef;
  add: Task;
  priorityA: string[] = [];
  constructor(private taskservice: TaskService, private router: Router) {
    this.priorityA = this.taskservice.priority;
  }

  Add() {
   this.add = new Task(this.name.nativeElement.value, this.priority.nativeElement.value, this.desc.nativeElement.value);
   this.taskservice.todo.push(this.add);
   this.router.navigate(['todo']);
  }
}
