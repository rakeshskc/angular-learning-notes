import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  {
    path:'login', 
    component:LoginComponent,
    children: [
      {
      path:'user',
      component:UserLoginComponent
      },
      {
        path:'admin',
        component:AdminLoginComponent
      }
    ]
  },
  {path:'signup',component:SignUpComponent},
  {path:'comment',component:CommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
