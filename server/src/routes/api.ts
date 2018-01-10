import { Router } from 'express';
import stationRunRoute from './stationrun';

const api = Router();

api.use('/stationrun', stationRunRoute);

export default api;