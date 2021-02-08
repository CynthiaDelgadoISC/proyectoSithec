import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../services/service.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  posts: any[] =[];
  user: any =[];
  band_conf: boolean=false;
  flagUser: boolean = false;

  constructor(private router: ActivatedRoute, protected service: ServiceService) { 
    this.router.params.subscribe((params) => {
      this.getInfo(params.id);
    });
  }

  ngOnInit(): void {
  }

  getInfo(id:string){
    this.service.getUser(id).subscribe(
      (data:any) => {
         this.user=data;
         this.band_conf=true;
         this.flagUser= true;
      },
      (error)=>{
        this.flagUser= false;
        this.band_conf=false;
      }
    );
    this.service.getPosts()
    .subscribe(
      (data:any) => { 
        let j=0;
        for(let i=0;i<data.length;i++){
          if(data[i].userId==id){
            this.posts[j]=data[i];
            j++;
          }
        }
      }
    );
    }

}
