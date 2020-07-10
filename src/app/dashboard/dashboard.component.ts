import { Component, OnInit } from '@angular/core';
import { Heroi } from '../heroi.model';
import { HeroiService } from '../heroi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  herois: Heroi[] = [];


  constructor(private hService: HeroiService) { }

  ngOnInit(): void {
    this.getHerois();
  }

  getHerois(){
    this.hService.getHerois().subscribe(r => (this.herois = r));
  }
}
