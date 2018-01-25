import { Component } from '@angular/core';
import { AccountsService } from '../../../../shared/services/accounts.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.css']
})
export class LandingComponent {
  code: string;
  password: string;

  constructor(private _accountsService: AccountsService) {}

  login() {
    // TODO login from service
  }
}
