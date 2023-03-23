import { NgModule } from '@angular/core';

import {Router, RouterModule, Routes} from "@angular/router";

import {AboutDiscgolfComponent} from "./components/about-discgolf/about-discgolf.component";
import {HomeComponent} from "./components/home/home.component";
import {ContentComponent} from "./components/content/content.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {ForgorPasswordComponent} from "./components/forgor-password/forgor-password.component";
import {AuthGuard} from "./shared/guard/auth.guard";
import {DashboardComponent} from "./components/dashboard/dashboard.component";


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutDiscgolfComponent, canActivate: [AuthGuard]},
  {path: 'content', component: ContentComponent},
  {path: 'login', component: LoginComponent},
  {path: 'fPassword', component: ForgorPasswordComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  providers: [ AuthGuard ]
})

export class AppRoutingModule { }
