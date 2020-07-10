import { Component, OnInit, Input } from '@angular/core';
import { Heroi } from '../heroi.model';
import { ActivatedRoute} from '@angular/router';
import { HeroiService} from '../heroi.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero-detalhe',
  templateUrl: './hero-detalhe.component.html',
  styleUrls: ['./hero-detalhe.component.css']
})
export class HeroDetalheComponent implements OnInit {
  @Input() heroi: Heroi;

  constructor(
    private route: ActivatedRoute,
    private hService: HeroiService,
    private location: Location) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.hService.getHeroi(id).subscribe(h => this.heroi = h);
  }

  goBack(){
    this.location.back();
  }

  save(){
    this.hService.updateHeroi(this.heroi).subscribe(() => this.goBack());
  }
}
