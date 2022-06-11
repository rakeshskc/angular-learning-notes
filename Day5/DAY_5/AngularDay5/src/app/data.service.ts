import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getList(){
    return[
      {'empid':101,'name':'Tanish','salary':10000},
      {'empid':102,'name':'Anish','salary':20000},
      {'empid':103,'name':'Manish','salary':30000},
      {'empid':104,'name':'Vanish','salary':40000},
      {'empid':105,'name':'Kanish','salary':50000},

    ]
  }
}
