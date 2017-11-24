import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { Account } from '../models/account';

@Injectable()
export class AccountsService {

  constructor(private _http: Http) { }

  getAccounts(): Observable<Account[]> {
    return this._http.get('/api/account').pipe(
      map((response: Response) => response.json())
    );
  }

  createAccount(code: string, password: string): Observable<Account> {
    return this._http.post('/api/account', { code, password }).pipe(
      map((response: Response) => response.json())
    );
  }

  editAccount(code: string, password: string): Observable<Account> {
    return this._http.put('/api/account', { code, password }).pipe(
      map((response: Response) => response.json())
    );
  }

  deleteAccount(code: string): Observable<boolean> {
    return this._http.delete('/api/account').pipe(
      map((response: Response) => response.json())
    );
  }

  login(code: string, password: string) {
    // TODO
  }

}
