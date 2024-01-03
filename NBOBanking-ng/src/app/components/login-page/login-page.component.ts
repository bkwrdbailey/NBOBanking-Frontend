import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { UserDataService } from '../../services/user-data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, CommonModule, HttpClientModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  providers: [UserDataService]
})
export class LoginPageComponent {
  signingUp: boolean = false;

  constructor(private userData: UserDataService) {}

  attemptToSignUp() {
    this.userData.createNewUser
  }
}
