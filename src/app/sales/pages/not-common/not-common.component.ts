import { Component } from '@angular/core';
import { interval } from 'rxjs';

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

  clients: string[] = ['claudio', 'ana', 'josé', 'juan', 'carol'];
  clientMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  person = {
    name: 'Claudio',
    age: 35,
    address: 'Lima, Perú',
  };

  heros = [
    {
      name: 'Superman',
      fly: true,
    },
    {
      name: 'batman',
      fly: false,
    },
    {
      name: 'Goku',
      fly: true,
    },
  ];

  toggleClientName() {
    console.log('hola');
    this.name = this.name === 'Claudio' ? 'Anahis' : 'Claudio';
    this.gender = this.gender === 'm' ? 'f' : 'm';
  }
  removeClient() {
    console.log('mundo');
    this.clients.pop();
  }

  myObservable = interval(1000);

  myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
