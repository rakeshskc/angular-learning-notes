import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent3',
  template: `
    <p>
      parent3 works!
    </p>

    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>

    Message: {{message}}
    <app-child3 (messageEvent)="receiveMessage($event)" [counter]=Counter></app-child3>


    <div class="sampleCode">
        <div class="parentClass">



        </div>

        <div class ="childClass">
          
        </div>


    </div>

  `,
  styles: [
  ]
})
export class Parent3Component implements OnInit {

  Counter=5
  message:string=''
  constructor() { }

  ngOnInit(): void {
  }


  increment(){

    this.Counter++;
  }

  decrement(){
    this.Counter--;
  }
  receiveMessage($event:any){
    this.message=$event;
  }
}
