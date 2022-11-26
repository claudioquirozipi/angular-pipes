import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'fly',
})
export class flyPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Vuela' : 'No vuela';
  }
}
