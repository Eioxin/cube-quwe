import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomeComponent {
  code: string;
  password: string;

  constructor() {}

  login() {
    // TODO login from service
  }
}
