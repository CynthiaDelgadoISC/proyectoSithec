import { Component, Injectable, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  posts: any[] =[];
  users: any[] =[];
  comments: any[]=[];

  index:any;
  band_comment: boolean[]=[];

  constructor(protected service: ServiceService) {
    this.service.getPosts()
    .subscribe(
      (data:any) => { 
         this.posts=data;
      },
      (error) => {
        console.error(error);
      }
    );
    this.service.getUsers()
    .subscribe(
      (data:any) => { 
         this.users=data;
      },
      (error) => {
        console.error(error);
      }
    );
    }

   

    showComments(idPost:string, i){
      if(this.band_comment[i]){
        this.band_comment[i]=false;
      }
      else{
      this.service.getComments(idPost)
    .subscribe(
      (data:any) => { 
         this.comments=data;
      },
      (error) => {
        console.error(error);
      }
    );
    this.band_comment[i]=true;
      }

  }

  ngOnInit(): void {
  }

}
