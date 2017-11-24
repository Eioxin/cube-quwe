import { Router } from 'express';
import accountsRoute from './account';
import generateRoute from './generate';

const api = Router();

api.use('/account', accountsRoute);
api.use('/generate', generateRoute);

export default api;