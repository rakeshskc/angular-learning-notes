import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  // firstName: string=''
  // password: string=''


  user={
    firstName:'abc',
    password:'abc'
  }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmitTemplateBased(user:any){
    console.log("Tempalate Driven form Submiitted")
    console.log(user)
  }

}
