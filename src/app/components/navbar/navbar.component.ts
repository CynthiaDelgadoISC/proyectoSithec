import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthGuardService } from 'src/app/services/authGuard.service';
import {environment} from '../../../environments/environment';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {
  flagUser=environment.userLogin;
  $stop: any;
  constructor(protected router:Router, private auth: AuthGuardService) {
    this.$stop = new Subject<void>();
    this.auth._login.pipe(takeUntil(this.$stop)).subscribe((data) => {
      this.flagUser = data;
    });
   }

   ngOnDestroy(): void {
    this.$stop.next();
    this.$stop.complete();
  }

  ngOnInit(): void {
  }

  searchUserId(userId){
    if (userId !=='' ){
      this.router.navigate(['/user', userId]);
    }
  }

  exit(){
    this.flagUser=false;
    environment.userLogin=false;
    this.auth.isLogout();
    this.router.navigate(['/login']);
  }

}
