import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ApiService {
  constructor(private _http: Http) { }

  getTestMessage(): Observable<string> {
    return this._http.get('/api/test').map(response => response.json());
  }

}
