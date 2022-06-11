import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  selector: 'app-comment',
  template: `
  
      <button (click)="getUsers()">CLICK</button>
  
  `,
  styles: [
  ]
})
export class CommentComponent implements OnInit {

  constructor(private http:HttpClient) { }

  getUsers(): Observable<any> {
    // const url = 'Some wrong url for test purpose';
    console.log(this.http.get("https://jsonplaceholder.typicode.com/comments"))
    return this.http.get("https://jsonplaceholder.typicode.com/comments");
  }
  ngOnInit(): void {
    
  }

}
