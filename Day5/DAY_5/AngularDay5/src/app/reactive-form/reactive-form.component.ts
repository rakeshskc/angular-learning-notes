import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup ,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  form=new FormGroup({"firstName":new FormControl("",Validators.required),
                     "password":new FormControl("",Validators.required)})


  onSubmitModelBased(){
    console.log("REactive Form submitted")
    console.log(this.form)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
