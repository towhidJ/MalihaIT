import { Injectable } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceeService {

  private prev: string;
  private curr: string;
  currentUrl: any;
  constructor(private router: Router) {
    this.currentUrl = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.prev = this.curr;
        this.curr = event.url;
      };
    });
  }

  // tslint:disable-next-line:typedef
  public getPreviousUrl() {
    return this.prev;
  }
}
