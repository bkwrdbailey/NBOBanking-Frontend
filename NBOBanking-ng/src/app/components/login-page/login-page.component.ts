import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { UserDataService } from '../../services/user-data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroupDirective, NgForm, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatRadioModule, CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  providers: [UserDataService]
})
export class LoginPageComponent {
  signingUp: boolean = false;
  isMailingAddressSame: boolean = true;
  loginData = this._formBuilder.group({
    username: '',
    password: ''
  });
  signupData = this._formBuilder.group({
    username: '',
    password: '',
    reenterPassword: '',
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    personalPhone: '',
    homePhone: '',
    homeAddress: '',
    mailAddress: '',
    sameAddress: ''
  });

  constructor(private userData: UserDataService, private _formBuilder: FormBuilder) {}

  attemptToSignUp() {
    this.userData.createNewUser
  }

  hideMailingAddress(path: string) {
    if (path == 'one') {
      this.isMailingAddressSame = true;
    } else if (path == 'two') {
      this.isMailingAddressSame = true;
      this.signingUp = false;
    }
  }

  showMailingAddress() {
    this.isMailingAddressSame = false;
  }
}
