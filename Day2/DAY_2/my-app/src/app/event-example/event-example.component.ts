import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-event-example',
  templateUrl:'./event-example.component.html' ,
  styleUrls:['./event-example.component.css']
})
export class EventExampleComponent implements OnInit {
 clickMessage="CLick me "
 value=''
 heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  constructor() { }

  ngOnInit(): void {
  }

  myClick(){
    this.clickMessage="You have clicked me"
  }

  onKey(event:any){
    this.value+=event.target.value+'|'
  }

  highlightMe(event:any){
    alert(event.target.value)
  }


  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }

  mouseEnterMethod(){
    alert("mouseEnterMethod is called")
  }

  // @HostListener('window:scroll', ['$event']) // for window scroll events

  scrollEventMethod(event:Event){
    alert("Scrolling....")
  }


}
