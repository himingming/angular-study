import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';
import { ListTodoComponent } from './todos/list-todo/list-todo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodosComponent, AddTodoComponent, ListTodoComponent],
  imports: [CommonModule, FormsModule],
  exports: [TodosComponent],
})
export class TodoModule {}
