import { Auth } from './../../services/auth';
import { Component, inject } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { Router, RouterLink } from "@angular/router";
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@Component({
  selector: 'app-navbar',
  imports: [
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    CommonModule,
    MatSnackBarModule
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  auth =inject(Auth);
  router=inject(Router);
  matSnackBar=inject(MatSnackBar);


  isLoggedIn(){
    return this.auth.isLoggedIn();
  }

  logout=()=>{
    this.auth.logout();

    this.matSnackBar.open('Logout Success',"Close",{
      duration:5000,
      horizontalPosition:'center'
    })

    this.router.navigate('/login');
  };
}
