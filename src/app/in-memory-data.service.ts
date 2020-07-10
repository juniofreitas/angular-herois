import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Heroi } from './heroi.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb(){
    const heroes: Heroi[] = [
      {id: 1, nome: 'Hulk'},
      {id: 2, nome: 'Homem-aranha'},
      {id: 3, nome: 'Super-homem'},
      {id: 4, nome: 'Batman'},
      {id: 5, nome: 'Homen-de-ferro'},
      {id: 6, nome: 'Mulher-maravilha'},
      {id: 7, nome: 'Thor'}
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
