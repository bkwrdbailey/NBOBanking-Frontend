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

  attemptUserLogin(username: string, password: string): Observable<User> {
    return this.http.get<User>(environment.apiBaseUrl + `/Login?username=${username}&password=${password}`);
  }

  attemptUserSignup(newUser: User): Observable<User> {
    return this.http.post<User>(environment.apiBaseUrl + '/Signup', newUser);
  }

  /* Session Storage */
  getUserData(): User {

    if(sessionStorage.getItem('currentUserId') != null) {
      const userData: User = {
        user_id: parseInt(sessionStorage.getItem('currentUserId')!, 10),
        username: sessionStorage.getItem('currentUsername') ?? '',
        password: '',
        email: sessionStorage.getItem('currentUserEmail') ?? '',
        firstname: sessionStorage.getItem('currentUserFirstname') ?? '',
        lastname: sessionStorage.getItem('currentUserLastname') ?? ''
      };

      return userData;
    } else {
      const userData: User = {
        user_id: 0,
        username: '',
        password: '',
        email: '',
        firstname: '',
        lastname: ''
      }

      return userData;
    }

  }

  setUserData(userSet: User) {
    sessionStorage.setItem('currentUserId', `${userSet.user_id}`);
    sessionStorage.setItem('currentUsername', `${userSet.username}`);
    sessionStorage.setItem('currentUserEmail', `${userSet.email}`);
    sessionStorage.setItem('currentUserFirstname', `${userSet.firstname}`);
    sessionStorage.setItem('currentUserLastname', `${userSet.lastname}`);
  }

  clearUserData() {
    sessionStorage.removeItem('currentUserId');
    sessionStorage.removeItem('currentUsername');
    sessionStorage.removeItem('currentUserEmail');
    sessionStorage.removeItem('currentUserFirstname');
    sessionStorage.removeItem('currentUserLastname');

    sessionStorage.clear();
  }
}
