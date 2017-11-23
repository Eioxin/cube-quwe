import { Router } from 'express';
import { AccountsService } from '../services/accounts.service';

const account = Router();

account.get('/', (req, res) => {
  AccountsService.getAllAccounts().subscribe(accounts => {
    return res.json(accounts);
  });
});

account.post('/', (req, res) => {
  const { code, pass } = req.body;
  AccountsService.createAccount(code, pass).subscribe(account => {
    return res.json(account);
  });
});

account.put('/', (req, res) => {
  const { code, pass } = req.body;
  AccountsService.editAccount(code, pass).subscribe(account => {
    return res.json(account);
  });
});

account.delete('/', (req, res) => {
  const { code } = req.body;  
  AccountsService.deleteAccount(code).subscribe(success => {
    return res.json(success);
  });
});

export default account;