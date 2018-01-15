"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
const firebase = require("firebase-admin");
require("rxjs/add/observable/of");
require("rxjs/add/observable/fromPromise");
const database = firebase.database();
class Station {
}
exports.Station = Station;
class StationsService {
    static createStation(stationRunCode, stationCode) {
        const station = new Station();
        station.id = stationCode;
        station.stationRunCode = stationRunCode;
        const updates = {};
        updates['stationruns/' + stationRunCode + '/stations/' + stationCode] = true;
        updates['stations/' + stationCode] = station;
        database.ref().update(updates);
        return Observable_1.Observable.of(station);
    }
    static getAllStations() {
        return Observable_1.Observable.fromPromise(database.ref('stations').once('value').then((snapshot) => {
            return snapshot;
        }));
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
        database.ref('stations/' + code).remove();
        return Observable_1.Observable.of(true);
    }
}
exports.StationsService = StationsService;
//# sourceMappingURL=stations.service.js.map