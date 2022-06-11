import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child works! {{empId}} {{name}} {{salary}}

    </p>
    
  `,
  styles: [
  ]
})
export class ChildComponent implements OnInit {

  @Input() empId: string='';
  @Input() name: string='';
  @Input() salary: string='';
  constructor() { }

  ngOnInit(): void {
  }

}
