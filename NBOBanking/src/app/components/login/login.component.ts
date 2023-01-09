import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userDataService: UserdataService) { }

  username: string = '';
  password: string = '';

  ngOnInit(): void {
  }

  attemptToLogin() {
    this.userDataService.attemptUserLogin(this.username, this.password).subscribe(res => {
      this.userDataService.setUserData(res);
    });
  }
}
