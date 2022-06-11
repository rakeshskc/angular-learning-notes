  import { Component, OnInit } from '@angular/core';
  import {NameService} from '../name.service';
  @Component({
    selector: 'app-first',
    template: `
      
      <input type="text" [(ngModel)]="name"/>
      <button (click)="setName()">SET Name </button>
    
    `,
    styles: [
    ]
  })
  export class FirstComponent implements OnInit {

    name: string;
    constructor(private nameService: NameService) {
      this.name=""
    }

    ngOnInit(): void {
    }

    setName(){
      this.nameService.setName(this.name)
    }
  }
