import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User.model';
import { Account } from '../models/Account.model';

@Injectable({
  providedIn: 'root'
})

export class UserDataService {

  constructor(private http: HttpClient) {}

  verifyUserLogin(): Observable<any> {
    return this.http.get<User>("");
  }

  getBankAccounts(): Observable<Account> {
    return this.http.get<Account>("");
  }

  createNewUser(newUser: User): Observable<any> {
    return this.http.post("", newUser);
  }

  updateUserInfo(updateUser: User): Observable<any> {
    return this.http.put("", updateUser);
  }
}
