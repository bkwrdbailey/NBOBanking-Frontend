import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, CommonModule, HttpClientModule, FormsModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
  providers: [UserDataService]
})
export class ProfilePageComponent implements OnInit {

  constructor(private router: Router, private userData: UserDataService) {}

  isEditable = false;
  isLoggedIn = false;

  ngOnInit(): void {
    // if (!this.isLoggedIn) {
    //   this.router.navigate(['login']);
    // }
  }

  updateProfileInfo() {
    this.isEditable = false;
  }

  resetChanges() {
    this.isEditable = false;
  }
}
