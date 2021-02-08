import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(){
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(6) ])
    });
  }

  login(){
    if(users[this.formLogin.get('email').value]==this.formLogin.get('password').value){
      environment.userLogin=true;
      this.router.navigate(['/posts']);
    }
    else{
      Swal.fire('Nombre de usuario o contraseña incorrecta', '', 'error');
    }
  }
}

export const users = {
  'sithec@gmail.com': "123456",
  'admin@gmail.com': "admin12",
}