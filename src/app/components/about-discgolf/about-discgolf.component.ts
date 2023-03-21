import {Component, OnInit} from '@angular/core';
import {collection, addDoc, Firestore} from "@angular/fire/firestore";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-about-discgolf',
  templateUrl: './about-discgolf.component.html',
  styleUrls: ['./about-discgolf.component.css']
})

export class AboutDiscgolfComponent implements OnInit {


  constructor(private firestore: Firestore) {}


   addData(f:NgForm){
    const discinst = collection(this.firestore, 'discs');
    addDoc(discinst, f.value).then(()=> console.log("Disc added successfully")).catch((err)=>console.log(err))
  }

  ngOnInit() {
  }


}
