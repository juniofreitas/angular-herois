import { Component, OnInit } from '@angular/core';
import { Heroi } from '../heroi.model';
import { HeroiService } from '../heroi.service';

@Component({
  selector: 'app-herois',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  herois: Heroi[];

  filter = '';

  constructor(private hService: HeroiService) { }

  ngOnInit(): void {
    this.getHerois();
  }


  getHerois(){
    this.hService.getHerois().subscribe(herois => (this.herois = herois));
    //this.herois = this.hService.getHerois();
  }

  onAdd(name: string): void{
    this.hService.addHeroi( {name} as Heroi).subscribe((heroi) => {
        if(heroi) {
          this.herois.push(heroi);
        }
      }
    )
  }

  delete(heroi: Heroi): void{
    this.hService.delHeroi(heroi).subscribe(
      (res) => {
        if(typeof res !== 'undefined'){
          this.herois = this.herois.filter((item) => item != heroi);
        }
      }
    )
  }

  onFilter(term: string){
    this.filter = term;
  }
}
