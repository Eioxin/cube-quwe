"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const stationruns_service_1 = require("./services/stationruns.service");
const stations_service_1 = require("./services/stations.service");
const randomstring = require("randomstring");
const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors({ origin: true }));
app.get('/create', (req, res) => {
    const code = randomstring.generate(6);
    const ownerId = randomstring.generate(6);
    return stationruns_service_1.StationRunsService.createStationRun(code, ownerId).then(run => {
        res.json(run);
    });
});
app.get('/:id/join', (req, res) => {
    const code = randomstring.generate(6);
    return stationruns_service_1.StationRunsService.joinStationRun(req.params.id, code).then(player => {
        if (!player) {
            res.status(500).end();
            return;
        }
        res.json(player);
    });
});
app.get('/:id/remove', (req, res) => {
    return stationruns_service_1.StationRunsService.deleteStationRun(req.params.id).then(() => {
        res.json(true);
    });
});
app.get('/:id/station/create', (req, res) => {
    const code = randomstring.generate(6);
    return stations_service_1.StationsService.createStation(req.params.id, code).then(station => {
        if (!station) {
            res.status(500).end();
            return;
        }
        res.json(station);
    });
});
app.get('/:id/station/:station/remove', (req, res) => {
    return stations_service_1.StationsService.deleteStation(req.params.station).then(() => {
        res.json(true);
    });
});
app.get('/all', (req, res) => {
    return stationruns_service_1.StationRunsService.getAllStationRuns().then(runs => {
        res.json(runs);
    });
});
exports.stationruns = functions.https.onRequest(app);
//# sourceMappingURL=index.js.map