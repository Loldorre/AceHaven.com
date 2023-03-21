import { Component } from '@angular/core';
import {Firestore, collection, collectionData} from "@angular/fire/firestore";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
usersDisc!: Observable<any>;
  constructor(private firestore: Firestore) {
    this.getDiscs();
  }

  getDiscs(){
    const discInst = collection(this.firestore, 'discs')
    collectionData(discInst).subscribe(val => {console.log(val)})

    this.usersDisc = collectionData(discInst);
  }
}
