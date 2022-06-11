import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-example',
  template: `


Enter number <input type="text" [(ngModel)]="num"/>


<select [(ngModel)]="selectedValue">

  <option *ngFor="let item of items;" [value]="item">{{item}}</option>


</select>

  <div [ngSwitch]="selectedValue">

    <div *ngSwitchCase="1">ONE</div>
    <div *ngSwitchCase="2">TWO</div>
    <div *ngSwitchCase="3">THREE</div>
    <div *ngSwitchCase="4">FOUR </div>
    <div *ngSwitchCase="5">FIVE</div>
   <div *ngSwitchDefault>Default Case</div>

  </div>









  <ul *ngIf="isVisible">
    <li *ngFor="let rec of friendsList">
      {{rec.name}} {{rec.age}}

    </li>
 </ul>
  <button (click)="hideList()">CLICK TO HIDE LIST </button>
    {{show}}
    <button (click)="show=!show">{{show?'Hide':'Show'}}</button>

    <div *ngIf="show; else elseBlock">SHOWING MESSAGE</div>
    <ng-template #elseBlock> Else Block</ng-template>
  `,
  styles: [
  ]
})
export class NgIfExampleComponent implements OnInit {
  show=true
  items=[1,2,3,4,5,6,7,8,9]
  isVisible=true
  selectedValue=0;
  num=0
  friendsList=[
    {
      name:'Eshan',
      age:23
    },

    {
      name:'Tanish',
      age:12
    },
    {
      name:'Minal',
      age:45
    },
    {
      name:'Amitabh',
      age:23
    },
    {
      name:'Purva',
      age:43
    },

  ]


  hideList(){
    this.isVisible=!this.isVisible
  }

  constructor() { }

  ngOnInit(): void {
  }

}
