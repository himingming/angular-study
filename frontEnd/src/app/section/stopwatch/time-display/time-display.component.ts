import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss'],
  // providers: [
  //   PageToggleService
  // ]
})
export class TimeDisplayComponent implements OnInit {
  @Input() inputData!: string;

  min: number = 0;
  sec: number = 0;
  ms: number = 0;

  timeInterval: any;

  constructor(public pageToggleService: PageToggleService) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('ng on changes');
    for (let propName in changes) {
      console.log(changes);
      /*let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`propName: currentValue = cur, previousValue = prev`);*/
    }
  }
  ngOnInit() {
    console.log('ng on init');
  }
  ngDoCheck() {
    console.log('ng do check');
  }
  ngAfterContentInit() {
    console.log('ng after content init');
  }
  ngAfterContentChecked() {
    console.log('ng after content checked');
  }
  ngAfterViewInit() {
    console.log('ng after view  init');
  }
  ngAfterViewChecked() {
    console.log('ng after view  checked');
  }
  ngOnDestroy() {
    console.log('destroy!');
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
