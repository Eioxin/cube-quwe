import { Router } from 'express';
import * as randomstring from 'randomstring';
import { Generate } from '../services/generate.service';

const generate = Router();

generate.get('/accountcode', (req, res) => {
  let code = randomstring.generate(6);

  // Keep creating the code if it exists in the database
  while (Generate.accountCodeExists(code)) {
    code = randomstring.generate(6);
  }

  res.json({ code });
});

generate.get('/joincode', (req, res) => {
  let code = randomstring.generate(6);
  
    // Keep creating the code if it exists in the database
    while (Generate.joinCodeExists(code)) {
      code = randomstring.generate(6);
    }
  
    res.json({ code });
});

export default generate;