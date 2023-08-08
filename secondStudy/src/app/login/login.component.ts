import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Inject,
} from '@angular/core';

import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { INFORMATION } from '../MyType';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //@Input() visible1: boolean; //받는 역할
  //@Output() sendMyEvent: EventEmitter<any> = new EventEmitter();
  id = new FormControl(''); //폼 컨트롤러 클래스로 바꿉니다.
  pwd = new FormControl('', [Validators.required, Validators.minLength(4)]); //폼 컨트롤러 클래스로 바꿉니다.
  private message: any;
  styleArray = { wrong_id: false, wrong_pwd: false };

  constructor(private service: MyServiceService) {
    //private제어자를 붙여서 클래스 내부에서 사용가능하게
  }
  ngOnInit(): void {}
  tryToLogin(): void {
    console.log(this.pwd);
    this.service.addData(true, { id: 'admin', name: '사용자' }); //서비스에 addData함수를 호출

    if (this.id.value == 'admin' && this.pwd.value == '1234') {
      alert('로그인합니다!');
      this.service.addData(true, { id: 'admin', name: '사용자' }); //서비스에 addData함수 호출, 로그인 성공값 전달
    } else if (this.id.value != 'admin') {
      this.setMessage = 'wrong id';
      this.styleArray.wrong_id = true;
      this.styleArray.wrong_pwd = false;
    } else if (this.pwd.value != '1234') {
      this.setMessage = 'wrong pwd';
      this.styleArray.wrong_id = false;
      this.styleArray.wrong_pwd = true;
    }
  }
  set setMessage(arg: any) {
    //대입합니다.
    this.message = arg;
  }
  get getMessage(): any {
    //가져옵니다.
    return this.message;
  }
}
