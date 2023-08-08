import { Injectable } from '@angular/core';
import { INFORMATION } from './MyType';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  public readonly myData: INFORMATION = {
    data1: 'data1',
    data2: 1433,
    data3: ['data3_1', 'data3_2'],
  };
  constructor() {}

  private FACTORY: BehaviorSubject<any> = new BehaviorSubject({});
  //BehaviorSubject : 데이터변화에 대해서 발행하는 클래스, next라는 함수를 통해 데이터 전달
  public readonly TV: Observable<any> = this.FACTORY.asObservable();
  //Observable 클래스 : BehaviorSubject클래스 구독자. next함수로 전달받은 행위 실시
  public addData(arg: boolean, loginformation?: any): void {
    if (arg) {
      this.FACTORY.next(loginformation);
    }
  }
}
