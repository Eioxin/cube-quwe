import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginComponent {
  code: string;
  password: string;

  constructor() {}

  login() {
    // TODO login from service
  }
}
