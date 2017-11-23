import { Router } from 'express';
import { AccountsService } from '../services/accounts.service';

const account = Router();

account.get('/', (req, res) => {
  AccountsService.getAllAccounts().subscribe(accounts => {
    return res.json(accounts);
  });
});

account.post('/', (req, res) => {
  AccountsService.createAccount('random', '123').subscribe(success => {
    return res.json(success);
  });
});

account.put('/', (req, res) => {
  AccountsService.editAccount('random').subscribe(success => {
    return res.json(success);
  });
});

account.delete('/', (req, res) => {
  AccountsService.deleteAccount('random').subscribe(success => {
    return res.json(success);
  });
});

export default account;