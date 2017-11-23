import { Router, Request, Response } from 'express';
import { AccountsService } from '../services/accounts.service';
import { check, validationResult } from 'express-validator/check';
import { matchedData, sanitize } from 'express-validator/filter';

const account = Router();

account.get('/', (req, res) => {
  AccountsService.getAllAccounts().subscribe(accounts => {
    return res.json(accounts);
  });
});

account.post('/', [
  check('code', 'code is required!').exists(),
  check('password', 'passwords must be at least 5 characters long!').isLength({ min: 5 })
], (req: Request, res: Response) => {

  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.mapped() });
  }

  // No errors, create user
  const user = matchedData(req);
  AccountsService.createAccount(user.code, user.password).subscribe(account => {
    return res.json(account);
  });
});

account.put('/', (req, res) => {
  const { code, password } = req.body;
  AccountsService.editAccount(code, password).subscribe(account => {
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