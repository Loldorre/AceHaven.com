import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {AboutDiscgolfComponent} from "./components/about-discgolf/about-discgolf.component";
import {HomeComponent} from "./components/home/home.component";
import {ContentComponent} from "./components/content/content.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {VerifyEmailComponent} from "./components/verify-email/verify-email.component";
import {ForgorPasswordComponent} from "./components/forgor-password/forgor-password.component";
import {AuthGuard} from "./shared/guard/auth.guard";
import {DashboardComponent} from "./components/dashboard/dashboard.component";


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutDiscgolfComponent},
  {path: 'content', component: ContentComponent},
  {path: 'login', component: LoginComponent},
  {path: 'verify', component: VerifyEmailComponent},
  {path: 'fPassword', component: ForgorPasswordComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
