import { Routes } from '@angular/router';
import { LandingpageComponent } from './components/landing-page/landing-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';

export const routes: Routes = [
    { path: 'home', component: LandingpageComponent},
    { path: 'login', component: LoginPageComponent},
    { path: 'profile', component: ProfilePageComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', component: LandingpageComponent}
];
