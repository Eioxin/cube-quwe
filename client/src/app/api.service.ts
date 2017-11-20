import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {
  constructor(private _http: Http) { }

  getTestMessage(): Observable<string> {
    return this._http.get('/api/test').pipe(
      map((response: Response) => response.json().msg)
    );
  }

}
