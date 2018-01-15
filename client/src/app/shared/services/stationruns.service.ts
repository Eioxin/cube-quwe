import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';

@Injectable()
export class StationRunService {
  constructor(private _http: Http) { }

  createStationRun(): Observable<string> {
    return this._http.get('https://us-central1-cube-quwe.cloudfunctions.net/station/create').pipe(
      map((response: Response) => response.json().id)
    );
  }

}
