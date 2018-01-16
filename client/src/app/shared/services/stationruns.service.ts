import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';

export class StationRun {
  id: string;
  ownerId: string;
  started = false;
  players: { [key: string]: Player } = {};
  stations: { [key: string]: Station } = {};
}

export class Player {
  id: string;
}

export class Station {
  id: string;
}

@Injectable()
export class StationRunService {
  constructor(private _http: Http) { }

  createStationRun(): Observable<StationRun> {
    return this._http.get('https://us-central1-cube-quwe.cloudfunctions.net/stationruns/create').pipe(
      map((response: Response) => response.json())
    );
  }

  joinStationRun(id: string): Observable<Player> {
    return this._http.get(`https://us-central1-cube-quwe.cloudfunctions.net/stationruns/${id}/join`).pipe(
      map((response: Response) => response.json())
    );
  }

  createStation(id: string): Observable<Station> {
    return this._http.get(`https://us-central1-cube-quwe.cloudfunctions.net/stationruns/${id}/station/create`).pipe(
      map((response: Response) => response.json())
    );
  }

  removeStation(stationRunId: string, stationId: string): Observable<Station> {
    return this._http.get(`https://us-central1-cube-quwe.cloudfunctions.net/stationruns/${stationRunId}/station/${stationId}/remove`).pipe(
      map((response: Response) => response.json())
    );
  }

}
