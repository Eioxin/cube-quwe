

export class AccountsService {
  static accountExists(code: string): boolean {
    // Datenbank
    return false;
  }

  static joinCodeExists(code: string): boolean {
    // Datenbank
    return false;
  }

  static createAccount(code: string, pass: string) {
    // Datenbank
    return true;
  }

  static getAllAccounts() {
    // Datenbank
    return [];
  }

  static editAccount(code: string) {
    // Datenbank
    return true;
  }

  static deleteAccount(code: string) {
    return true;
  }
}