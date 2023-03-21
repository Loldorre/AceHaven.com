import {Component, OnInit} from '@angular/core';
import {Firestore, collection, addDoc, getFirestore} from "@angular/fire/firestore";
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-about-discgolf',
  templateUrl: './about-discgolf.component.html',
  styleUrls: ['./about-discgolf.component.css']
})
export class AboutDiscgolfComponent implements OnInit {

  constructor(private firestore: Firestore) {}

  addData(f:NgForm){

    const discInstance = collection(this.firestore, 'usersDiscs');
    addDoc(discInstance, f.value).then(() => {
      console.log('Disc added successfully');}).catch((err)=>{console.error(err);})
  }

  ngOnInit() {
  }


}
