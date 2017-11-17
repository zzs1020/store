import { Component, HostBinding, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { StatusService } from './shared/services/status/status.service';

@Component({
  /* tslint:disable:component-selector
   * angular has no control outside of AppComponent, so trick is to change my-root to body
   */
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  historyCount: number = 0;
  showBack: boolean;
  menuOpen: boolean;
  headerColor: string;
  @HostBinding('style.overflow') overflow; // controlling body scrollability
  @HostBinding('style.position') position; // needed if want it works on ios

  constructor(private router: Router, private status: StatusService) {}

  ngOnInit() {
    // except 'first time land in app' or 'at main page', all other should show back button
    this.showBack = !!sessionStorage.getItem('showBack');
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.historyCount === 0) {
          this.historyCount++;
          sessionStorage.setItem('showBack', 'true');
        }
        this.showBack = !['/', '/store'].includes(event.url);

        if (event.url.includes('details')) {
          this.headerColor = 'transparent';
        } else {
          this.headerColor = '#06b1b9';
        }
      }
    });
  }

  toggleMenu(event?) {
    this.menuOpen = !event;
    this.overflow = this.menuOpen ? 'hidden' : 'initial';
    // must fixed if want body non-scrollable, and width&height should also be set
    this.position = this.menuOpen ? 'fixed' : 'relative';
  }

  goBack() {
    history.back();
  }

  alert() {
    this.status.alert({type: 'danger', msg: 'Not yet implemented!'});
  }
}
