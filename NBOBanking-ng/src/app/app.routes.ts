import { Routes } from '@angular/router';
import { LandingpageComponent } from './components/landing-page/landing-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { BankAccountComponent } from './components/bank-account-page/bank-account-page.component';
import { LoansPageComponent } from './components/loans-page/loans-page.component';

export const routes: Routes = [
    { path: 'home', component: LandingpageComponent},
    { path: 'login', component: LoginPageComponent},
    { path: 'profile', component: ProfilePageComponent},
    { path: 'accounts', component: BankAccountComponent},
    { path: 'loans', component: LoansPageComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', component: LandingpageComponent}
];
