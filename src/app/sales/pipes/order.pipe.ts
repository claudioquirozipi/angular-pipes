import { Pipe, PipeTransform } from '@angular/core';
import { Hero, HeroParams } from '../interfaces/sales.interface';

@Pipe({
  name: 'order',
})
export class OrderPipe implements PipeTransform {
  transform(heros: Hero[], term: HeroParams = 'name'): Hero[] {
    heros = heros.sort((a, b) => (a[term] > b[term] ? 1 : -1));
    return heros;
  }
}
