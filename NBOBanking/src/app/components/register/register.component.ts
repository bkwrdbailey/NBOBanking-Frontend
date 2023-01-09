import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userDataService: UserdataService) { }

  userFormData: User = {user_id: 0, username: '', password: '', email: '', firstname: '', lastname: ''}

  ngOnInit(): void {
  }

  attemptToRegister() {
    this.userDataService.attemptUserSignup(this.userFormData).subscribe(res => {
      this.userDataService.setUserData(res);
    });
  }

}
