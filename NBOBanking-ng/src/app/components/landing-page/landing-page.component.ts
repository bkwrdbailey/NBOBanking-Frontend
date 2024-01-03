import { Component } from '@angular/core';
import { Account } from '../../models/Account.model';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingpageComponent {
  loggedIn: boolean = false;
  hasAccounts: boolean = false;
  bankAccounts: Account[] = [];
}
