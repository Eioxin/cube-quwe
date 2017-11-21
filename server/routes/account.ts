import { Router } from 'express';

const account = Router();

account.get('/', (req, res) => res.send('works'));
account.post('/', (req, res) => res.send('works'));
account.put('/', (req, res) => res.send('works'));
account.delete('/', (req, res) => res.send('works'));

export default account;