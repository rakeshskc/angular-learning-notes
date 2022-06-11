import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
  <div class="parentClass"><code><pre>{{parenCode}}</pre></code></div>
  
    <!-- <div class="sampleCode">
        <div class="parentClass" >
        <code>
              <strong>
                
              </strong>
        </code>


        </div>

        <div class ="childClass">
          Child Code
        </div>


    </div> -->
    <app-child [empId]="empId" [name]="name" [salary]="salary"></app-child>

  `,
   styleUrls: ['./parent.component.css']
  
})
export class ParentComponent implements OnInit {

  // parentMessage="Message from Parent Component"
  empId="101";
  name="Tanish"
  parenCode:string = `
  import { Component, OnInit } from "@angular/core";

  @Component({
    selector: "app-parent",
    template: "
        <app-child [empId]="empId" [name]="name" [salary]="salary"></app-child>
  
    ",
    styles: [
    ]
  })
  export class ParentComponent implements OnInit {
  
  
    empId="101";
    name="Tanish"
  
    
    salary="100000"
  
    constructor() { }
  
    ngOnInit(): void {
    }
  
  }`
  




  childCode:string=`


  `
  salary="100000"

  constructor() { }

  ngOnInit(): void {
  }

}
