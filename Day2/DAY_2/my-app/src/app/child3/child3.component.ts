import { Component, OnInit, Output,EventEmitter ,Input,SimpleChanges} from '@angular/core';


@Component({
  selector: 'app-child3',
  template: `
    <p>
      child3 works!
      <button (click)="sendMessage()">SEND MESSAGE</button>
    </p>


    {{fname}}
    <button (click)="changeName()"> Change Name </button>




    <!-- Counter {{counter}}
    <br><br>
    <hr>
    {{fname}} {{lname}} {{age}}
    <br>
    <br>
    Enter your first name<input type="text" [(ngModel)]="fname"> 
    Enter your last name<input type="text" [(ngModel)]="lname"> 
    Enter you age<input type="number" [(ngModel)]="age"> 
  <br> -->

    <!-- <form #myfrom = "ngForm">
        {{ myfrom.value | json }}
        <br>
        <br>
    Name: <input type="text" name = 'name' ngModel>
    Roll: <input type="text" name = 'roll' ngModel>
    </form>
   -->
  
  `,

  styles: [
  ]
})
export class Child3Component implements OnInit {
  fname="abc"
  lname=""
  age=0
  value=""
  @Input() counter:number = 0;
  message: string="Hello Angular from Child3Component"
  @Output() messageEvent=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }


  changeName(){
    this.fname="Amitabh"
  }

  ngOnChanges(changes: SimpleChanges){

    // console.log(changes)
    for(let property in changes){
      if(property=="counter"){
        console.log("Previous Value",changes[property].previousValue)
        console.log("Current Value",changes[property].currentValue)
        console.log("First chagne Value",changes[property].firstChange)
      }

    }

  }
  sendMessage(){
   this.messageEvent.emit(this.message)
  }

}
