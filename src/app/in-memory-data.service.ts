import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Heroi } from './heroi.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb(){
    const heroes: Heroi[] = [
      {id: 1, name: 'Hulk'},
      {id: 2, name: 'Homem-aranha'},
      {id: 3, name: 'Super-homem'},
      {id: 4, name: 'Batman'},
      {id: 5, name: 'Homen-de-ferro'},
      {id: 6, name: 'Mulher-maravilha'},
      {id: 7, name: 'Thor'}
    ];

    return { heroes};
  }

  genId(hs: Heroi[]): number{
    return hs && hs.length > 0 ?
      Math.max(... hs.map(h => h.id) ) + 1 : 1;
  }

  constructor() { }
}

// insomnia
