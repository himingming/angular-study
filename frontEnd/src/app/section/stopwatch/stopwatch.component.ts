import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
  providers: [PageToggleService],
})
export class StopwatchComponent implements OnInit {
  present = 'welcome';
  commandText: any;
  constructor(
    private router: Router,
    public pageToggleService: PageToggleService
  ) {}
  startTime($event: string) {
    this.present = $event;
  }
  goClock() {
    this.pageToggleService.goPage('/clock');
  }
  ngOnInit(): void {}
}
