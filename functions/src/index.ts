import * as functions from 'firebase-functions';
import { StationRunsService } from './services/stationruns.service';
import { StationsService } from './services/stations.service';
import * as randomstring from 'randomstring';
import * as express from 'express';
const app = express();
const cors = require('cors');

app.use(cors({ origin: true }));

app.get('/create', (req, res) => {
  const code = randomstring.generate(6);
  const ownerId = randomstring.generate(6);
  return StationRunsService.createStationRun(code, ownerId).then(run => {
    res.json(run);
  });
});

app.get('/:id/join', (req, res) => {
  const code = randomstring.generate(6);
  return StationRunsService.joinStationRun(req.params.id, code).then(player => {
    if (!player) {
      res.status(500).end();
      return;
    }

    res.json(player);
  });
});

app.get('/:id/remove', (req, res) => {
  return StationRunsService.deleteStationRun(req.params.id).then(() => {
    res.json(true);
  });
});

app.get('/:id/station/create', (req, res) => {
  const code = randomstring.generate(6);
  const { name, description } = req.query;
  return StationsService.createStation(req.params.id, code, name, description).then(station => {
    if (!station) {
      res.status(500).end();
      return;
    }

    res.json(station);
  });
});

app.get('/:id/station/:station/remove', (req, res) => {
  return StationsService.deleteStation(req.params.station).then(() => {
    res.json(true);
  });
});

app.get('/all', (req, res) => {
  return StationRunsService.getAllStationRuns().then(runs => {
    res.json(runs);
  });
});

export const stationruns = functions.https.onRequest(app);
