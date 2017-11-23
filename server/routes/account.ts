import { Router } from 'express';
import { AccountsService } from '../services/accounts.service';

const account = Router();

account.get('/', (req, res) => {
  return AccountsService.getAllAccounts();
});

account.post('/', (req, res) => {
  return AccountsService.createAccount('random', '123');
});

account.put('/', (req, res) => {
  return AccountsService.editAccount('random');
});

account.delete('/', (req, res) => {
  return AccountsService.deleteAccount('random');
});

export default account;