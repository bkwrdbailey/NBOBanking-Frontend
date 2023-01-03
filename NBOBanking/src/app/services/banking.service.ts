import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BankAccount } from '../models/BankAccount';
import { Transaction } from '../models/Transaction';

@Injectable({
  providedIn: 'root'
})
export class BankingService {

  constructor(private http: HttpClient) { }

  getBankAccounts(userId: number): Observable<any> {
    return this.http.get<boolean>(environment.apiBaseUrl + `BankAccounts?userId=${userId}`);
  }

  getBankAccountTransactionHistory(bankAccountId: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(environment.apiBaseUrl + `Account/Transactions?bankaccountId=${bankAccountId}`);
  }

  updateBankAccountBalance(newAccountBalance: BankAccount): Observable<any> {
    return this.http.put<boolean>(environment.apiBaseUrl + 'Update/Amount', newAccountBalance);
  }

  createNewBankAccount(newBankAccount: BankAccount): Observable<BankAccount> {
    return this.http.post<BankAccount>(environment.apiBaseUrl + 'New/BankAccount', newBankAccount);
  }

  createNewTransaction(newTransaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(environment.apiBaseUrl + 'New/Transaction', newTransaction);
  }
}
