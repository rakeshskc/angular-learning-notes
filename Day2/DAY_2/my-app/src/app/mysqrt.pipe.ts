import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mysqrt'
})
export class MysqrtPipe implements PipeTransform {

  transform(value:number):number{
    return Math.sqrt(value)
  }

}
