import { Router } from 'express';
import * as randomstring from 'randomstring';
import { AccountsService } from '../services/accounts.service';

const generate = Router();

generate.get('/accountcode', (req, res) => {
  let code = randomstring.generate(6);
  res.json({ code });
});

generate.get('/joincode', (req, res) => {
  let code = randomstring.generate(6);
  res.json({ code });
});

export default generate;