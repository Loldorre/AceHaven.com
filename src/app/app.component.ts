import { Component } from '@angular/core';
import {addDoc, collection, Firestore} from '@angular/fire/firestore';
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'AceHaven';

  constructor() {}


}

