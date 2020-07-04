import { Task } from './task.model';
import { Injectable } from '@angular/core';
@Injectable({providedIn: 'root'})
export class TaskService {
    priority: string[] = ['Very High', 'High', 'Low'];
    todo: Task[] = [new Task('task3', this.priority[0], 'Some_description3'),
     new Task('task4', this.priority[0], 'Some_description4')];
    completed: Task[] = [ new Task('task1', this.priority[0], 'Some_description1'),
                        new Task('task2', this.priority[0],  'Some_description2')];

    getTodo() {
        return this.todo;
    }
    getTodos(index: number) {
        return this.todo[index];
    }
    getCompleted() {
        return this.completed;
    }
    getCompleteds(index: number) {
        return this.completed[index];
    }
}
