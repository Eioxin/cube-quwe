import { Component } from '@angular/core';
import { AccountsService } from '../../../../shared/services/accounts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginComponent {
  code: string;
  password: string;

  constructor(private _accountsService: AccountsService) {}

  login() {
    // TODO login from service
  }
}
