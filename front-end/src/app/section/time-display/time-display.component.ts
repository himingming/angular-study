import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss'],
})
export class TimeDisplayComponent implements OnInit {
  @Input() inputData: any;

  min: number = 0;
  sec: number = 0;
  ms: number = 0;

  timeInterval: any;

  constructor() {
    // setInterval(() => {
    //   this.test++;
    // }, 1000);
  }
  timeStart() {
    this.timeStop();
    this.timeInterval = setInterval(() => {
      if (this.ms >= 100) {
        this.ms = 0;
        this.sec++;
      }
      if (this.sec >= 60) {
        this.sec = 0;
        this.min++;
      }
      this.ms++;
    }, 10);
  }

  timeStop() {
    clearInterval(this.timeInterval);
  }

  timeReset() {
    this.timeStop();
    this.ms = 0;
    this.sec = 0;
    this.min = 0;
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   // 변경 사항을 감지하는 로직
  //   console.log(changes);
  //   if (changes['inputData'] && changes['inputData'].currentValue) {
  //     switch (changes['inputData'].currentValue) {
  //       case 'start':
  //         this.timeStart();
  //         break;
  //       case 'stop':
  //         this.timeStop();
  //         break;
  //       case 'reset':
  //         this.timeReset();
  //         break;
  //       default:
  //         break;
  //     }
  //   }
  // }
}
