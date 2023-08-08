import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {
  @Output() clickEvent = new EventEmitter();

  constructor() {}

  executeButton(command: string) {
    this.clickEvent.emit(command); //emit() : 부모컴포넌트한테 정보 전달하는거
  }
  ngOnInit() {}
}
