import { Component, OnInit } from '@angular/core';
import { Todo } from '../share/todo.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  newText = '';
  newTime = '';
  todo: Todo = new Todo();
  todos: Todo[];
  today: Date = new Date();
  doneTodos = false;
  history: any;

  constructor(private location: Location) {
    this.todos = [
      { done: false, text: '운동하기', time: '오전 7:00' },
      { done: true, text: '공부하기', time: '오후 7:00' },
      { done: true, text: '영화제 예매하기', time: '오후 2:00' },
    ];
  }

  ngOnInit() {}

  toggleTodo(todo: Todo) {
    console.log('목록 수정');
    todo.done = !todo.done;
  }

  addTodo(text: string) {
    console.log('목록 추가');
    this.todos.push({
      done: false,
      text: text,
      time: text,
    });
  }

  delTodo(index: number) {
    console.log('목록 삭제');
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
  doneBtn() {
    console.log('다 한 목록만 출력');
    this.doneTodos = true;
    this.getDoneTodos();
  }
  getDoneTodos(): Todo[] {
    return this.todos.filter((todo) => todo.done);
  }
  backBtn() {
    console.log('뒤로가기');
    this.doneTodos = false;
  }
  refresh() {
    console.log('새로고침');
    window.location.reload();
  }
}
