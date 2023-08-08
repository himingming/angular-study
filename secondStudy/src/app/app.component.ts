import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loginBool = true;
  boardBool = false;

  constructor(private service: MyServiceService) {
    service.TV.subscribe((arg) => {
      service.TV.subscribe((arg) => {
        if (arg && arg.id) {
          console.log('로그인이 성공했습니다 : ', arg);
          this.loginBool = false;
          this.boardBool = true;
        }
      });
    });
  }
}
