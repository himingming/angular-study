import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  builder: FormBuilder;
  rows: FormArray;
  formGrp: FormGroup;
  single: FormControl;

  constructor(fb: FormBuilder) {
    //FormBuilder를 주입받는다.
    this.builder = fb;
    this.rows = this.builder.array([]); //주입받은 FormBuilder를 통해 배열 형태로 값을 담을 변수를 만들어줌.
    this.single = new FormControl('Title', Validators.required); //1개의 데이터에 바인딩할 대상
    this.formGrp = this.builder.group({
      //rows와 single을 담을 그룹이다.
      row_data: this.rows,
      single_data: this.single,
    });
  }

  ngOnInit(): void {
    //OnInit이라는 인터페이스를 통해 받은 메서드 기능
    //컴포넌트가 본인의 행동준비가 끝난 후(초기화된 이후) 한번만 호출되는 함수
    //호출 순서 : constructor -> ngOnInit
    for (var i = 0; i < 10; i++) {
      var group = this.builder.group({
        //배열에 그룹을 생성, builder.group => new FormGroup과 같은 기능
        text: this.builder.control('abcd' + i, Validators.minLength(5)),
        //control함수는 FormControl을 만드는 역할
        number: this.builder.control(i, Validators.required),
      });
      this.rows.push(group);
    }
  }
  showData(arg: any) {
    //화면에서 데이터를 볼 함수
    if (arg) {
      console.log(arg);
    } else {
      console.log(this.formGrp);
    }
  }
}
