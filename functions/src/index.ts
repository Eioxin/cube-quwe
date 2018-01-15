import * as functions from 'firebase-functions';
import { StationRunsService } from './services/stationruns.service';
import { StationsService } from './services/stations.service';
import * as randomstring from 'randomstring';
import * as express from 'express';
const app = express();

// Start writing Firebase Functions
// https://firebase.google.com/functions/write-firebase-functions

app.get('/create', (req, res) => {
  const code = randomstring.generate(6);
  return StationRunsService.createStationRun(code).then(run => {
    res.json({ id: run.id });
  });
});

app.get('/:id/join', (req, res) => {
  const code = randomstring.generate(6);
  return StationRunsService.joinStationRun(req.params.id, code).then(player => {
    if (!player) {
      res.status(500).end();
      return;
    }

    res.json({ id: player.id });
  });
});

app.get('/:id/station/create', (req, res) => {
  const code = randomstring.generate(6);
  return StationsService.createStation(req.params.id, code).then(station => {
    if (!station) return res.status(500).end();

    res.json({ id: station.id });
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
