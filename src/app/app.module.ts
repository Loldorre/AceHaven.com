import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { AboutDiscgolfComponent } from './components/about-discgolf/about-discgolf.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { ContentComponent} from "./components/content/content.component";
import { DorianComponent} from "./components/content/dorian/dorian.component";
import { LinneaComponent} from "./components/content/linnea/linnea.component";
import { FooterComponent } from './components/footer/footer.component';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore} from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import {FormsModule } from "@angular/forms";
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutDiscgolfComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    ContentComponent,
    DorianComponent,
    LinneaComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    FormsModule,
    AngularFireModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
