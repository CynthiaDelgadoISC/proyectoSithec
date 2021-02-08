import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {environment} from '../../../environments/environment';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(protected router:Router) { }

  ngOnInit(): void {
  }

  searchUserId(userId){
    if (userId !=='' ){
      this.router.navigate(['/user', userId]);
    }
  }

  exit(){
    environment.userLogin=false;
    this.router.navigate(['/login']);
  }

}
