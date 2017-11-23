
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class AccountsService {
  static accountExists(code: string): Observable<boolean> {
    // Datenbank
    return Observable.of(false);
  }

  static joinCodeExists(code: string): Observable<boolean> {
    // Datenbank
    return Observable.of(false);
  }

  static createAccount(code: string, pass: string): Observable<boolean> {
    // Datenbank
    return Observable.of(true);
  }

  static getAllAccounts(): Observable<any[]> {
    // Datenbank
    return Observable.of([]);
  }

  static editAccount(code: string): Observable<boolean> {
    // Datenbank
    return Observable.of(true);
  }

  static deleteAccount(code: string): Observable<boolean> {
    return Observable.of(true);
  }
}