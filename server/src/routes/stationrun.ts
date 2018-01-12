import { Router } from 'express';
import { StationRunsService } from '../services/stationruns.service';
import { StationsService } from '../services/stations.service';
import * as randomstring from 'randomstring';

const stationrun = Router();

stationrun.get('/create', (req, res) => {
  let code = randomstring.generate(6);
  StationRunsService.createStationRun(code).subscribe(run => {
    res.json({ id: run.id });
  });
});

stationrun.get('/:id/join', (req, res) => {
  let code = randomstring.generate(6);
  StationRunsService.joinStationRun(req.params.id, code).subscribe(player => {
    if (!player) return res.status(500).end();

    res.json({ id: player.id });
  });
});

stationrun.get('/:id/station/create', (req, res) => {
  let code = randomstring.generate(6);
  StationsService.createStation(req.params.id, code).subscribe(station => {
    if (!station) return res.status(500).end();

    res.json({ id: station.id });
  });
});

stationrun.get('/:id/station/:station/remove', (req, res) => {
  let code = randomstring.generate(6);
  StationsService.deleteStation(req.params.station).subscribe(success => {
    if (!success) return res.status(500).end();

    res.json(success);
  });
});

stationrun.get('/all', (req, res) => {
  StationRunsService.getAllStationRuns().subscribe(runs => {
    res.json(runs);
  });
});

export default stationrun;