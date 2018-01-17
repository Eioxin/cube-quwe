
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase-admin';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromPromise';

const database = firebase.database();

export class Station {
  id: string;
  stationRunCode: string;
  name: string;
  description: string;
}

export class StationsService {

  static createStation(stationRunCode: string, stationCode: string, name: string, description: string): Promise<any> {
    const station = new Station();
    station.id = stationCode;
    station.stationRunCode = stationRunCode;
    station.name = name;
    station.description = description;

    const updates: any = {};
    updates['stationruns/' + stationRunCode + '/stations/' + stationCode] = true;
    updates['stations/' + stationCode] = station;

    return database.ref().update(updates).then(() => {
      return station;
    });
  }

  static getAllStations(): Promise<any> {
    return database.ref('stations').once('value').then((snapshot) => {
      return snapshot;
    })
  }

  // static editStationRun(code: string, started: boolean): Observable<StationRun | undefined> {
  //   /* TODO Datenbank */
  //   const stationRun = stationRuns.find(run => run.id === code);
  //   if (!stationRun) return Observable.of(undefined);
  //   stationRun.started = started;
  //   /* END */
  //   return Observable.of(stationRun);
  // }

  static deleteStation(code: string): Promise<any> {
    return database.ref('stations/' + code).remove();
  }
}