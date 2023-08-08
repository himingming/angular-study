import { Component, OnInit } from '@angular/core';
import { Todo } from '../share/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  newText = '';
  todos: Todo[];
  today: Date = new Date();
  constructor() {
    this.todos = [
      { done: false, text: '운동하기' },
      { done: false, text: '공부하기' },
    ];
  }
  ngOnInit() {}
  toggleTodo(todo: any) {
    todo.done = !todo.done;
  }
  addTodo(text: string) {
    this.todos.push({
      done: false,
      text: text,
    });
  }

  delTodo(index: number) {
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
}
