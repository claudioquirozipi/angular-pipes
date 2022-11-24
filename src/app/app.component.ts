import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name: string = 'claudio';

  constructor(private readonly primeNGConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primeNGConfig.ripple = true;
  }
  getName() {
    console.log('name', this.name);
  }
}
