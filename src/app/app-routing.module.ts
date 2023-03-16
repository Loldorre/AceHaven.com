import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {AboutDiscgolfComponent} from "./components/about-discgolf/about-discgolf.component";
import {HomeComponent} from "./components/home/home.component";
import {ContentComponent} from "./components/content/content.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutDiscgolfComponent},
  {path: 'content', component: ContentComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
