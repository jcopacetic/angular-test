import { Component } from '@angular/core';

@Component({
  selector: 'angular-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  sideNavOpen = false;
  title = 'angular-test';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
