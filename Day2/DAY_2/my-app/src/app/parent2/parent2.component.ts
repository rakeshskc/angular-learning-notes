import { Component, OnInit, ViewChild } from '@angular/core';
import {Child2Component} from '../child2/child2.component'



@Component({
  selector: 'app-parent2',
  template: `
    <p>
      parent2 works!
    </p>
  Message : {{Message}}
    <app-child2></app-child2>
  `,
  styles: [
  ]
})
export class Parent2Component implements OnInit {
  Message:string=''
  @ViewChild(Child2Component) child:any;
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.Message=this.child.message;
  }
}
