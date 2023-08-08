import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class PageToggleService {
  public routingCounter = 0;
  constructor(private router: Router) {}

  goPage(target: any) {
    this.routingCounter++;
    this.router.navigateByUrl(target);
  }

  plusCount() {
    this.routingCounter++;
  }
}
