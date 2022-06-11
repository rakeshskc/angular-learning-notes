import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  name: string;


  constructor() {
    this.name=""
   }


  getName(){
    return this.name;
  }

  setName(name: string){
    this.name = name;
  }

}
