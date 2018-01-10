import { Router } from 'express';
import { StationRunsService } from '../services/stationruns.service';
import * as randomstring from 'randomstring';

const stationrun = Router();

stationrun.get('/create', (req, res) => {
  let code = randomstring.generate(6);
  StationRunsService.createStationRun(code).subscribe(run => {
    res.json({ id: run.id });
  });
});

stationrun.get('/join/:id', (req, res) => {
  let code = randomstring.generate(6);
  StationRunsService.joinStationRun(req.params.id, code).subscribe(player => {
    if (!player) return res.status(500).end();

    res.json({ id: player.id });
  });
});

stationrun.get('/all', (req, res) => {
  StationRunsService.getAllStationRuns().subscribe(runs => {
    res.json(runs);
  });
});

export default stationrun;