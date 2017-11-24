import { Router, Request, Response } from 'express';
import { AccountsService, Account } from '../services/accounts.service';
import { check, validationResult } from 'express-validator/check';
import { matchedData, sanitize } from 'express-validator/filter';

const account = Router();

account.get('/', (req, res) => {
  AccountsService.getAllAccounts().subscribe(accounts => {
    return res.json(accounts);
  });
});

account.post('/', [
  check('code', 'code is invalid!').isLength({ min: 6, max: 6 }),
  check('password', 'passwords must be at least 5 characters long!').isLength({ min: 5 })
], (req: Request, res: Response) => {

  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.mapped() });
  }

  // No errors, create user
  const user = <Account>matchedData(req);
  AccountsService.createAccount(user.code, user.password).subscribe(account => {
    return res.json(account);
  });
});

account.put('/', [
  check('code', 'code is invalid!').exists(),
  check('password', 'passwords must be at least 5 characters long!').isLength({ min: 5 })
], (req: Request, res: Response) => {

  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.mapped() });
  }

  // No errors, edit user
  const user = <Account>matchedData(req);
  AccountsService.editAccount(user.code, user.password).subscribe(account => {
    return res.json(account);
  });
});

account.delete('/', [
  check('code', 'code is invalid!').exists(),
], (req: Request, res: Response) => {
  
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.mapped() });
  }

  // No errors, edit user
  const user = <Account>matchedData(req);  
  AccountsService.deleteAccount(user.code).subscribe(success => {
    return res.json(success);
  });
});

export default account;