"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebase = require("firebase-admin");
require("rxjs/add/observable/of");
require("rxjs/add/observable/fromPromise");
const database = firebase.database();
class Station {
}
exports.Station = Station;
class StationsService {
    static createStation(stationRunCode, stationCode, name, description) {
        const station = new Station();
        station.id = stationCode;
        station.stationRunCode = stationRunCode;
        station.name = name;
        station.description = description;
        const updates = {};
        updates['stationruns/' + stationRunCode + '/stations/' + stationCode] = true;
        updates['stations/' + stationCode] = station;
        return database.ref().update(updates).then(() => {
            return station;
        });
    }
    static getAllStations() {
        return database.ref('stations').once('value').then((snapshot) => {
            return snapshot;
        });
    }
    // static editStationRun(code: string, started: boolean): Observable<StationRun | undefined> {
    //   /* TODO Datenbank */
    //   const stationRun = stationRuns.find(run => run.id === code);
    //   if (!stationRun) return Observable.of(undefined);
    //   stationRun.started = started;
    //   /* END */
    //   return Observable.of(stationRun);
    // }
    static deleteStation(code) {
        return database.ref('stations/' + code).remove();
    }
}
exports.StationsService = StationsService;
//# sourceMappingURL=stations.service.js.map