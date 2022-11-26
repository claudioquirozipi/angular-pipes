import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUppercase',
})
export class myUppercasePipe implements PipeTransform {
  transform(value: string, isUppercase: boolean = true): string {
    return isUppercase ? value.toUpperCase() : value.toLocaleLowerCase();
  }
}
