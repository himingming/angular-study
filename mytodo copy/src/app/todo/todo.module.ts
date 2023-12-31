import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';
import { TodoComponent } from './todos/todo/todo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodosComponent, AddTodoComponent, TodoComponent],
  imports: [CommonModule, FormsModule],
  exports: [TodosComponent],
})
export class TodoModule {}
