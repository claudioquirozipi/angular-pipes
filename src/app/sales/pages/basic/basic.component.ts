import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css'],
})
export class BasicComponent {
  constructor() {}

  nameLower: string = 'claudio';
  nameUpper: string = 'CLAUDIO';
  nameCompleted: string = 'ClAudiO quiRoZ';
  date: Date = new Date();
}
