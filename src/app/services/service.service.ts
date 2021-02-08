import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(protected http: HttpClient) { }
  baseUrl = 'https://jsonplaceholder.typicode.com';

  getPosts(){
    return this.http.get(this.baseUrl+'/posts');
  }

  getComments(idPost:string){
    return this.http.get(this.baseUrl+`/posts/${idPost}/comments`);
  }

  getUser(idUser:string){
    return this.http.get(this.baseUrl+`/users/${idUser}`);
  }

  getUsers(){
    return this.http.get(this.baseUrl+'/users');
  }
}
