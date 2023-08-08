import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  template: `<button (click)="addTodo(newText)">+</button>
    <input
      type="text"
      placeholder="추가할 일정을 적어주세요"
      [(ngModel)]="newText"
    /> `,
  styles: [
    `
      :host {
        display: block;
        padding: 16px 16px 16px 10px;
        background-color: white;
      }
      input {
        display: inline-block;
        font-size: 16px;
        border: none;
        margin-left: 20px;
        width: 850px;
      }
      input:focus,
      button:focus {
        outline: none;
      }
      button {
        font-size: 22px;
        border: none;
        background-color: white;
        color: rgb(64, 63, 63);
      }
    `,
  ],
})
export class AddTodoComponent implements OnInit {
  @Output() onTodoAdded = new EventEmitter();
  newText: string = '';
  constructor() {}
  ngOnInit(): void {}
  addTodo(newText: string) {
    this.onTodoAdded.emit(newText);
    this.newText = '';
  }
}
