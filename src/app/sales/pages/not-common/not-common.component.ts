import { Component } from '@angular/core';

@Component({
  selector: 'app-not-common',
  templateUrl: './not-common.component.html',
  styleUrls: ['./not-common.component.css'],
})
export class NotCommonComponent {
  name: string = 'Claudio';
  gender: 'm' | 'f' = 'm';
  genderMap = {
    f: 'invitarla',
    m: 'invitarlo',
  };
}
