import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoComponent } from './todo/todo.component';
import { TododetailComponent } from './todo/tododetail/tododetail.component';
import { CompletedComponent } from './completed/completed.component';
import { CompleteddetailComponent } from './completed/completeddetail/completeddetail.component';
import { AddnewComponent } from './addnew/addnew.component';
import { TodoeditComponent } from './todo/todoedit/todoedit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    TododetailComponent,
    CompletedComponent,
    CompleteddetailComponent,
    AddnewComponent,
    TodoeditComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
