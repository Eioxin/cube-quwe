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
  testArray: any[] = [
    {name: 'second', description: 'aaa'},
    {name: 'first', description: 'aaa'},
    {name: 'third', description: 'aaa'}
  ];

  constructor(private _accountsService: AccountsService) {}

  up() {
    
  }

  down() {

  }

  add() {

  }

  remove(){

  }
}
