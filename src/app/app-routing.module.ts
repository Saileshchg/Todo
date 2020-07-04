import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TododetailComponent } from './todo/tododetail/tododetail.component';
import { CompletedComponent } from './completed/completed.component';
import { CompleteddetailComponent } from './completed/completeddetail/completeddetail.component';
import { AddnewComponent } from './addnew/addnew.component';
import { TodoeditComponent } from './todo/todoedit/todoedit.component';


const routes: Routes = [
  {path: '', redirectTo: 'todo', pathMatch: 'full'},
  {path: 'todo', component: TodoComponent, children:
    [
    {path: 'todo/:id', component: TododetailComponent},
    {path: 'todo/edit/:id', component: TodoeditComponent},
    ]
  },
  {path: 'complete', component: CompletedComponent, children:
  [
    {path: 'complete/:id', component: CompleteddetailComponent}
  ]
  },
  {
    path: 'addnew', component: AddnewComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
