import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http: HttpClient) { }

  attemptUserLogin(username: string, password: string): Observable<any> {
    return this.http.get<boolean>(environment.apiBaseUrl + `/Login?username=${username}&password=${password}`);
  }

  attemptUserSignup(newUser: User): Observable<any> {
    return this.http.post<boolean>(environment.apiBaseUrl + '/Signup', newUser);
  }

  /* Session Storage */
  getUsername() {
    return sessionStorage.getItem('currentUsername') ?? '';
  }

  setUserData(_username: string) {
    sessionStorage.setItem('currentUsername', `${_username}`);
  }

  clearUserData() {
    sessionStorage.removeItem('currentUsername');

    sessionStorage.clear();
  }
}
