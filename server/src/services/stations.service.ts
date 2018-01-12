
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromPromise';

const database = firebase.database();

export class Station {
  id: string;
  stationRunCode: string;
}

export class StationsService {

  static createStation(stationRunCode: string, stationCode: string): Observable<Station> {
    const station = new Station();
    station.id = stationCode;
    station.stationRunCode = stationRunCode;

    const updates: any = {};
    updates['stationruns/' + stationRunCode + '/stations/' + stationCode] = true;
    updates['stations/' + stationCode] = station;

    database.ref().update(updates);
    return Observable.of(station);
  }

  static getAllStations(): Observable<any> {
    return Observable.fromPromise(
      database.ref('stations').once('value').then((snapshot) => {
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

  static deleteStation(code: string): Observable<boolean> {
    database.ref('stations/' + code).remove();
    return Observable.of(true);
  }
}