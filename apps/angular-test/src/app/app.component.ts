import { Component } from '@angular/core';
import { AuthService } from "@angular-test/common/common-services";

@Component({
  selector: 'angular-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-test';

  constructor(private authService: AuthService) {
  }

  logIn() {
    this.authService.loginWithRedirect()
  }

  signUp() {
    this.authService.signUpWithRedirect();
  }
}
