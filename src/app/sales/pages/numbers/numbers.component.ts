import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css'],
})
export class NumbersComponent {
  constructor() {}
  netSales: number = 23_123_456.456789;
  percentage: number = 0.45;
}
