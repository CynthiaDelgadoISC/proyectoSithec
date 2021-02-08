import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import Swal from 'sweetalert2';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class AuthGuardService implements CanActivate{
  private $login: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  _login: Observable<any> = this.$login.asObservable(); 

  constructor(private router: Router) { }
  canActivate() {
    if (!environment.userLogin) {
        Swal.fire('No has iniciado sesión', '', 'error');
        this.router.navigate(['/login']);
        return false;
    }
    return true;
  }

  isLogin(){
    this.$login.next(true);
  }
  isLogout(){
    this.$login.next(false);
  }
}
