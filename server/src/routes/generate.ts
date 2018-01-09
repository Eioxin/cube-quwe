import { Router } from 'express';
import * as randomstring from 'randomstring';
import { AccountsService } from '../services/accounts.service';

const generate = Router();

// TODO: replace with database
const accounts: string[] = [];
const stationRuns: string[] = [];

generate.get('/accountcode', (req, res) => {
  let code = randomstring.generate(6);
  accounts.push(code);
  res.json({ code });
});

generate.get('/joincode', (req, res) => {
  let code = randomstring.generate(6);
  stationRuns.push(code);
  res.json({ code });
});

export default generate;