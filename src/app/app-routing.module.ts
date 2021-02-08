import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PostsComponent } from './components/posts/posts.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuardService } from './services/authGuard.service';


const routes: Routes = [
  { path: 'posts' , component:  PostsComponent, canActivate: [AuthGuardService]},
  { path: 'user/:id' , component:  UserComponent, canActivate: [AuthGuardService]},
  { path: 'login' , component:  LoginComponent},
  { path: '**', redirectTo: 'login' },
  { path: ' ', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
