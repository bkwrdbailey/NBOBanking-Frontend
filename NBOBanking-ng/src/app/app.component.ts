import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectIsLoggedInStatus, selectUserId } from './state/userData.selector';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatMenuModule, MatButtonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NBOBanking';
  loggedIn: boolean = true;
  loggedInStatus$ = this.store.select(selectIsLoggedInStatus);
  userId$ = this.store.select(selectUserId);

  constructor(private store: Store) {}

  signUserOut() {
    this.loggedIn = false;
  }
}
