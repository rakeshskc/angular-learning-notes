import { Directive ,ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appMyHighLight]'
})
export class MyHighLightDirective {

  
  constructor(private elementRef: ElementRef) { 
    console.log(elementRef)
   
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.highLight('Green')
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.highLight('')
  }

  private highLight(color:string){
    this.elementRef.nativeElement.style.backgroundColor =color
  }
  

}
