import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showBack: boolean;
  menuOpen: boolean;
  headerColor: string;

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (event.url.includes('details')) {
          this.showBack = true;
          this.headerColor = 'transparent';
        } else {
          this.showBack = false;
          this.headerColor = '#06b1b9';
        }
      }
    });
  }

  toggleMenu(event?): void {
    this.menuOpen = !event;
  }

  goBack(): void {
    history.back();
  }
}
