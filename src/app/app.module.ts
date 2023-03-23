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
import { FooterComponent} from "./components/footer/footer.component";

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';

import { RegisterComponent } from './components/register/register.component';
import { ForgorPasswordComponent } from './components/forgor-password/forgor-password.component';
import { AuthService } from "./shared/services/auth.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { MatCardModule} from "@angular/material/card";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule} from "@angular/fire/compat";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";


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
    RegisterComponent,
    ForgorPasswordComponent,
    DashboardComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule,
    MatInputModule

  ],

  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
