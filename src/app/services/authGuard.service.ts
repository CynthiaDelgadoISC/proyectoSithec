import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private router: Router) { }
  canActivate() {
    if (!environment.userLogin) {
        alert('No estás Logueado');
        this.router.navigate(['/login']);
        return false;
    }
    return true;
}
}
