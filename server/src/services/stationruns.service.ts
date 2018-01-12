
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromPromise';

const database = firebase.database();

export class StationRun {
  id: string;
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

  static createStationRun(code: string): Observable<StationRun> {
    const stationRun = new StationRun();
    stationRun.id = code;
    database.ref('stationruns/' + code).set(stationRun);
    return Observable.of(stationRun);
  }

  static getAllStationRuns(): Observable<any> {
    return Observable.fromPromise(
      database.ref('stationruns').once('value').then((snapshot) => {
        return snapshot;
      })
    );
  }

  // static editStationRun(code: string, started: boolean): Observable<StationRun | undefined> {
  //   /* TODO Datenbank */
  //   const stationRun = stationRuns.find(run => run.id === code);
  //   if (!stationRun) return Observable.of(undefined);
  //   stationRun.started = started;
  //   /* END */
  //   return Observable.of(stationRun);
  // }

  static joinStationRun(runCode: string, playerCode: string): Observable<Player> {
    /* TODO Datenbank */
    const player = new Player();
    player.id = playerCode;

    var updates: any = {};
    updates['/stationruns/' + runCode + '/players/' + playerCode] = true;
    database.ref().update(updates);
    database.ref('players/' + player.id).set(player);

    return Observable.of(player);
  }

  static deleteStationRun(code: string): Observable<boolean> {
    database.ref('stationruns/' + code).remove();
    return Observable.of(true);
  }
}