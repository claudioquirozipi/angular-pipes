import { Component } from '@angular/core';
import { Color, Hero, HeroParams } from '../../interfaces/sales.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  isUppercase: boolean = true;
  heros: Hero[] = [
    {
      name: 'superman',
      fly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.black,
    },
    {
      name: 'robin',
      fly: false,
      color: Color.green,
    },
    {
      name: 'Daredevil',
      fly: false,
      color: Color.red,
    },
    {
      name: 'Green Lantern',
      fly: true,
      color: Color.green,
    },
  ];
  orderByTerm: HeroParams = 'name';

  toggleValue() {
    this.isUppercase = !this.isUppercase;
  }
  orderBy(term: HeroParams) {
    this.orderByTerm = term;
  }
}
