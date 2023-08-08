import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

import { interval, map } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit {
  timeString: string | undefined;
  constructor(private router: Router) {
    //setInterval(() => {}, 1000);
    interval(1000)
      .pipe(
        map(() => {
          return moment().format('YYYY-MM-DD HH:mm:ss');
        })
      )
      .subscribe((data: string | undefined) => {
        this.timeString = data;
      });
  }
  goStopwatch() {
    this.router.navigateByUrl('/stopwatch');
  }
  ngOnInit() {}
}
