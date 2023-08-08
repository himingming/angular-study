import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../share/todo.model';

@Component({
  selector: 'app-todo',
  template: ` <input type="checkbox" [checked]="todo.done" />
    <label *ngIf="!editing" (click)="toggleEditing()">{{ todo.text }}</label>
    <input
      *ngIf="editing"
      type="text"
      [(ngModel)]="editedText"
      (blur)="saveEditedText()"
    />`,
  styles: [
    `
      :host {
        display: block;
        padding: 16px;
        color: rgb(64, 63, 63);
        background-color: white;
      }
      label {
        margin-left: 20px;
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
export class TodoComponent implements OnInit {
  @Input()
  todo: Todo = new Todo();
  editing: boolean = false;
  editedText: string = '';
  constructor() {}
  ngOnInit() {}
  toggleEditing() {
    this.editing = !this.editing;
    this.editedText = this.todo.text;
  }
  saveEditedText() {
    this.todo.text = this.editedText;
    this.editing = false;
  }
}
