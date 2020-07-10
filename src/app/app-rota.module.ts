import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeroisComponent } from './herois/herois.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroiDetalheComponent } from './heroi-detalhe/heroi-detalhe.component';

const rotas: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'herois', component: HeroisComponent},
  { path: 'herois/:id', component: HeroiDetalheComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRotaModule { }
