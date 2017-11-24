import { Component } from '@angular/core';
import { AccountsService } from '../../../../shared/services/accounts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomeComponent {
  code: string;
  password: string;

  constructor(private _accountsService: AccountsService) {}

  login() {
    // TODO login from service
  }
}
