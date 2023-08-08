import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  template: `<button (click)="addTodo(newText, newTime)">+</button>
    <input
      class="addtext"
      type="text"
      placeholder="추가할 일정을 적어주세요"
      [(ngModel)]="newText"
    />
    <input class="addtime" type="time" [(ngModel)]="newTime" /> `,
  styles: [
    `
      :host {
        display: block;
        padding: 16px 16px 16px 10px;
        background-color: white;
      }
      .addtext {
        display: inline-block;
        font-size: 16px;
        border: none;
        margin-left: 20px;
        width: 550px;
      }
      .addtime {
        display: inline-block;
        font-size: 16px;
        border: none;
        margin-left: 20px;
        width: 150px;
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
  newText: string = '';
  newTime: string = '';
  @Output() onTodoAdded = new EventEmitter<{ text: string; time: string }>();
  constructor() {}
  ngOnInit(): void {}
  addTodo(data: { text: string; time: string }) {
    this.onTodoAdded.emit({ text: this.newText, time: this.newTime });
    this.newText = '';
    this.newTime = '';
  }
}
