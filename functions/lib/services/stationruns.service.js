"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebase = require("firebase-admin");
const functions = require("firebase-functions");
firebase.initializeApp(functions.config().firebase);
const database = firebase.database();
class StationRun {
    constructor() {
        this.started = false;
        this.players = {};
        this.stations = {};
    }
}
exports.StationRun = StationRun;
class Player {
}
exports.Player = Player;
class Station {
}
exports.Station = Station;
class StationRunsService {
    static createStationRun(code, ownerId) {
        const stationRun = new StationRun();
        const owner = new Player();
        stationRun.id = code;
        stationRun.ownerId = ownerId;
        owner.id = ownerId;
        const updates = {};
        updates['stationruns/' + code] = stationRun;
        updates['players/' + ownerId] = owner;
        return database.ref().update(updates).then(() => {
            return stationRun;
        });
    }
    static getAllStationRuns() {
        return database.ref('stationruns').once('value').then((snapshot) => {
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
    static joinStationRun(runCode, playerCode) {
        /* TODO Datenbank */
        const player = new Player();
        player.id = playerCode;
        const updates = {};
        updates['/stationruns/' + runCode + '/players/' + playerCode] = true;
        return database.ref().update(updates).then(() => {
            return database.ref('players/' + player.id).set(player).then(() => player);
        });
    }
    static deleteStationRun(code) {
        return database.ref('stationruns/' + code).remove();
    }
}
exports.StationRunsService = StationRunsService;
//# sourceMappingURL=stationruns.service.js.map