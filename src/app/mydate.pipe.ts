import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mydate'
})
export class Mydate implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
