import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../share/todo.model';

@Component({
  selector: 'app-list-todo',
  template: `
    <div>
      <input type="checkbox" [checked]="todo.done" />
      <label *ngIf="!editing" (click)="toggleEditing()"
        >{{ todo.text }} <span class="todotime">{{ todo.time }}</span></label
      >
      <input
        *ngIf="editing"
        type="text"
        [(ngModel)]="editedText"
        (blur)="saveEditedText()"
      />
      <input
        *ngIf="editing"
        type="time"
        [(ngModel)]="editedTime"
        (blur)="saveEditedText()"
      />
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 16px;
        color: rgb(64, 63, 63);
        background-color: white;
        display: inline-block;
      }
      label {
        margin-left: 20px;
      }
      .todotime {
        margin-left: 25px;
        font-size: 15px;
      }
      input[type='text'] {
        border: none;
        margin-left: 20px;
        width: 850px;
        outline: none;
        font-size: 16px;
      }

      input {
        position: relative;
      }
      input:before {
        content: '';
        display: inline-block;
        width: 28px;
        height: 28px;
        background-color: white;
        position: absolute;
        top: -6px;
        left: -8px;
        border: 1px solid white;
        border-radius: 35px;
      }
      input:checked + label {
        color: darkgray;
        text-decoration: darkgray line-through;
      }
      input:checked:after {
        content: '';
        display: inline-block;
        width: 28px;
        height: 28px;
        background-color: white;
        position: absolute;
        top: -6px;
        left: -8px;
        border: 1px solid white;
        border-radius: 35px;
      }
    `,
  ],
})
export class ListTodoComponent implements OnInit {
  @Input()
  todo: Todo = new Todo();

  editing: boolean = false;
  editedText: string = '';
  editedTime: string = '';
  constructor() {}
  ngOnInit() {}
  toggleEditing() {
    this.editing = !this.editing;
    this.editedText = this.todo.text;
    this.editedTime = this.todo.time;
  }
  saveEditedText() {
    this.todo.text = this.editedText;
    this.todo.time = this.editedTime;
    this.editing = false;
  }
}
