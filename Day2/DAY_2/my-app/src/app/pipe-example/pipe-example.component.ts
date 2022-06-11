import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: "pipe-example.component.html",
  // styles: ['legend{color:red}.search-rec{width:50%;height:30px;background-color:pink}'
  styleUrls:['pipe-example.component.css']
  
})
export class PipeExampleComponent implements OnInit {
  toDate=new Date(1980,2,2)
  words=0
  message: string=''
  celcius: number=0;
  Fahrenheit: number=0;  
  search:string=""
  employee=[
    {
      "id":101,
      "name":"Eshan Madake",
      "email":"eshan@gmail.com",
      "url":"https://www.google.co.in/"
    },
    {
      "id":102,
      "name":"Manish Sharma",
      "email":"manish@gmail.com",
      "url":"https://www.google.co.in/"
    },
    {
      "id":103,
      "name":"Anuja Patil",
      "email":"anj@gmail.com",
      "url":"https://www.google.co.in/"
    },
    {
      "id":104,
      "name":"Kranti Mishara",
      "email":"k132@gmail.com",
      "url":"https://www.google.co.in/"
    },
    {
      "id":105,
      "name":"Amitabh Kumbhar",
      "email":"amitk@gmail.com",
      "url":"https://www.google.co.in/"
    },
    {
      "id":106,
      "name":"Rajesh Kulkarni",
      "email":"rajeshk@gmail.com",
      "url":"https://www.google.co.in/"
    }
  
  ]


  dateVal=new Date(1980,2,2)
  birthday=new Date(1978,2,2)
  toggle=true
  power = 5;
  factor = 1;
  str="Welcome to angular learning"
  jsonvalue={name:'Tanish',age:"23","address":{city:"mumbai",area:"Dadar"}}


  constructor() { }

  ngOnInit(): void {
  }

  get format(){
    return this.toggle?'shortDate':'fullDate';
  }

  toggleFormat(){
    this.toggle=!this.toggle
  }
}
