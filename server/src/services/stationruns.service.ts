
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class StationRun {
  id: string;
  started: boolean = false;
  players: Player[] = [];
}

export class Player {
  id: string;
}

const stationRuns: StationRun[] = [];

export class StationRunsService {

  static createStationRun(code: string): Observable<StationRun> {
    /* TODO Datenbank */
    const stationRun = new StationRun();
    stationRun.id = code;
    stationRuns.push(stationRun);
    /* END */
    return Observable.of(stationRun);
  }

  static getAllStationRuns(): Observable<StationRun[]> {
    /* TODO Datenbank */
    return Observable.of(stationRuns);
  }

  static editStationRun(code: string, started: boolean): Observable<StationRun | undefined> {
    /* TODO Datenbank */
    const stationRun = stationRuns.find(run => run.id === code);
    if (!stationRun) return Observable.of(undefined);
    stationRun.started = started;
    /* END */
    return Observable.of(stationRun);
  }

  static joinStationRun(runCode: string, playerCode: string): Observable<Player | undefined> {
    /* TODO Datenbank */
    const stationRun = stationRuns.find(run => run.id === runCode);
    if (!stationRun) return Observable.of(undefined);
    const player = new Player();
    player.id = playerCode;
    stationRun.players.push(player);
    /* END */
    return Observable.of(player);
  }

  static deleteStationRun(code: string): Observable<boolean> {
    /* TODO Datenbank */
    const stationRun = stationRuns.find(run => run.id === code);
    if (!stationRun) return Observable.of(false);
    stationRuns.splice(stationRuns.indexOf(stationRun), 1);
    return Observable.of(true);
  }
}