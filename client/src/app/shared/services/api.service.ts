import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {
  constructor(private _http: Http) { }

  getAccountCode(): Observable<string> {
    return this._http.get('/api/generate/accountcode').pipe(
      map((response: Response) => response.json().code)
    );
  }

  getJoinCode(): Observable<string> {
    return this._http.get('/api/generate/joincode').pipe(
      map((response: Response) => response.json().code)
    );
  }

}
