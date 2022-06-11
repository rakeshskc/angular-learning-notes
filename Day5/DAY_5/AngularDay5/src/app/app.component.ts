import { Component } from '@angular/core';
import {TimeService} from './time.service';
import {DataService} from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDay5';
  currentDate:any;
  currentTime:any;
  employeeList:any=[];
  show:boolean = false;
  constructor(private timeService: TimeService,private dataService: DataService){
    this.currentDate=this.timeService.getTime().toLocaleDateString();
    this.currentTime=this.timeService.getTime().toLocaleTimeString();
    this.employeeList=this.dataService.getList()
  }
}
