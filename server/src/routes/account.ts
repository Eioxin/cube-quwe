import { Router } from 'express';
import { AccountsService } from '../services/accounts.service';

const account = Router();

account.get('/', (req, res) => {
  return res.json(AccountsService.getAllAccounts());
});

account.post('/', (req, res) => {
  return res.json(AccountsService.createAccount('random', '123'));
});

account.put('/', (req, res) => {
  return res.json(AccountsService.editAccount('random'));
});

account.delete('/', (req, res) => {
  return res.json(AccountsService.deleteAccount('random'));
});

export default account;