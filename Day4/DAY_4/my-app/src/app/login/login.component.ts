import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
   <ul>
            <li><a routerLink="user">USER Login</a></li>
            <li><a routerLink="admin">Admin Login</a></li>

   </ul>
   <router-outlet></router-outlet>


  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
