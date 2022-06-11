import { Component, OnInit } from '@angular/core';
import {NameService} from '../name.service';
@Component({
  selector: 'app-second',
  template: `
    <input type="text" [(ngModel)]="name"/>
    <button (click)="getName()">GET Name </button>
  `,
  styles: [
  ]
})
export class SecondComponent implements OnInit {

  name: string;
  constructor(private nameService: NameService) {
    this.name=""
   }

  ngOnInit(): void {
  }

  getName(){
    this.name=this.nameService.getName();
  }



}
