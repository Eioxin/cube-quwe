import * as firebase from 'firebase-admin';
import * as functions from 'firebase-functions';

firebase.initializeApp(functions.config().firebase);
const database = firebase.database();

export class StationRun {
  id: string;
  ownerId: string;
  started: boolean = false;
  players: { [key: string]: Player } = {};
  stations: { [key: string]: Station } = {};
}

export class Player {
  id: string;
}

export class Station {
  id: string;
}

export class StationRunsService {

  static createStationRun(code: string, ownerId: string): Promise<any> {
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

  static getAllStationRuns(): Promise<any> {
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

  static joinStationRun(runCode: string, playerCode: string): Promise<Player> {
    /* TODO Datenbank */
    const player = new Player();
    player.id = playerCode;

    const updates: any = {};
    updates['/stationruns/' + runCode + '/players/' + playerCode] = true;
    return database.ref().update(updates).then(() => {
      return database.ref('players/' + player.id).set(player).then(() => player);
    });
  }

  static deleteStationRun(code: string): Promise<any> {
    return database.ref('stationruns/' + code).remove();
  }
}