import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecyclehooks',
  template: `
    <p>
      lifecyclehooks works!
     
    </p>
    <div *ngFor="let book of books">
        {{book}}
      </div>
  `,
  styles: [
  ]
})
export class LifecyclehooksComponent implements OnInit {

  books=["Book1","Book2","Book3"]



  constructor() { 
    console.log("Constructor of LifeCycleHooksComponent is called")
    setInterval(() =>{
      this.books.push("new Book")
    },2000)

  }

  ngOnChanges(){
    console.log("ngOnChanges of LifeCycleHooksComponent is called")
  }



  ngOnInit(): void {
    console.log("ngOnInit of LifeCycleHooksComponent is called")
  }


  // ngDoCheck(){
  //   console.log("ngDoCheck of LifeCycleHooksComponent is called")
  // }


  // ngAfterContentInit(): void {
  //   console.log("ngAfterContentInit of LifeCycleHooksComponent is called") 
  // }

  // ngAfterContentChecked(): void {
  //   console.log("ngAfterContentChecked of LifeCycleHooksComponent is called")
  // }

  // ngAfterViewInit(): void {
  //   console.log("ngAfterViewInit of LifeCycleHooksComponent is called")
  // }

  // ngAfterViewChecked(){
  //   console.log("ngAfterViewChecked of LifeCycleHooksComponent is called")
  // }

  // ngonDestroy(): void {
  //   console.log("ngonDestroy of LifeCycleHooksComponent is called")

  // }

}
