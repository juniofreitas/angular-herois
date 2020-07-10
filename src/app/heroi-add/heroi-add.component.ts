import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-heroi-add',
  templateUrl: './heroi-add.component.html',
  styleUrls: ['./heroi-add.component.css']
})
export class HeroiAddComponent  {
  heroiNome: string = '';

  @Output() add = new EventEmitter<string>();

  constructor() { }

  onAdd(): void{
    this.add.emit(this.heroiNome);
    this.heroiNome = '';
  }
}
