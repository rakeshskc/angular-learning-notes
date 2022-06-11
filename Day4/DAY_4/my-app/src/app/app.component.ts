import { Component,OnInit  } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
// import {Users} from './model/Users'
class Users {
 
  public id: number;
  public first_name: string;
  public last_name: string;
  public email:string;

 
  constructor(id:number, firstName:string, lastName:string,email:string) {
    this.id = id;
    this.first_name = firstName;
    this.last_name = lastName;
    this.email=email;
  }
   
}
@Component({
  selector: 'app-root',
  template:`
<table class='table'>
  <thead>
    <tr>
      <th>ID</th>
      <th>First Name</th>
      <th>LastName</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let user of users;">
      <!-- console.log(user) -->
      <td>{{user.id}}</td>
      <td>{{user.first_name}}</td>
      <td>{{user.last_name}}</td>
      <td>{{user.email}}</td>
    </tr>
  </tbody>
</table> 
 
<pre>{{users | json}}</pre>  
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // users = new Array<Users>();
  users: Users[]=[];

  constructor(private http: HttpClient) { }
 
  ngOnInit() {
    this.getEmployees()
  }
  public getEmployees() {
 
   return  this.http.get<Users[]>("http://localhost:2020/users")
      .subscribe(
        (response) => {                           //Next callback
          console.log('response received')
          console.log(response);
          this.users = response; 
        },
        (error) => {                              //Error callback
          console.error('Request failed with error')
          alert(error);
        },
        () => {                                   //Complete callback
          console.log('Request completed')
        })
  }

  

  
}
