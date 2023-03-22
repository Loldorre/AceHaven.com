import { Component } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent {

  authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  collapsed = false;
  logedIn = false;

  loged() : boolean{
    if (this.authService.isLoggedIn) {
      return this.logedIn = true;
    } else {
      return this.logedIn = false;
    }
  }


  onClickClose() {
    this.collapsed = false;
  }

  onClickOpen() {
    this.collapsed = true;
  }
}
