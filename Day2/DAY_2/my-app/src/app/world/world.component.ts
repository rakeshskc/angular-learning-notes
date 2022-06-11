import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-world',
  template: `
    <p>
      world works!
      
    </p>
    <p>firstName is {{firstname}}</p>
    <p>lastName is {{lastname}}</p>
    <p>Age {{age}}</p>
  `,
  styles: [
  ],
  
})
export class WorldComponent implements OnInit {
  @Input() firstname: string=''
  @Input() age:string=""
  lastname="Madake"

  constructor() { }

  ngOnInit(): void {
  }

}
