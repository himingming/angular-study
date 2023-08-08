import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms'; //반응형 폼?

import { INFORMATION } from './MyType';
import { MyServiceService } from './my-service.service'; //서비스 클래스 추가

const myData: INFORMATION = {
  //내가 전달할 데이터
  data1: 'data1',
  data2: 1433,
  data3: ['data3_1', 'data3_2'],
};

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [MyServiceService], //MyServiceService를 제공하도록
  bootstrap: [AppComponent],
})
export class AppModule {}
