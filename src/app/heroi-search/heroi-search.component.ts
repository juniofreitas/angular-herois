import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Heroi } from '../heroi.model';
import { HeroiService } from '../heroi.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/Operators';

@Component({
  selector: 'app-heroi-search',
  template: `
    <app-search-input (search)="onSearch($event)"></app-search-input>
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let h of herois$ | async">
        <a routerLink="/heroes/{{ h.id }}">
          {{ h.nome }}
        </a>
      </li>
    </ul>
  `,
})
export class HeroiSearchComponent implements OnInit {
  herois$: Observable<Heroi[]>;
  private searchTerms = new Subject<string>();

  constructor(private hService: HeroiService) { }

  ngOnInit(): void {
    this.getHerois();
  }

  getHerois(){
    this.herois$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.hService.searchHerois(term))
    );
  }

  onSearch(term: string){
    this.searchTerms.next(term);
  }
}
