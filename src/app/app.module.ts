import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetalheComponent } from './hero-detalhe/hero-detalhe.component';
import { MensagensComponent } from './mensagens/mensagens.component';
import { AppRotaModule } from './app-rota.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, InMemoryDbService} from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroiAddComponent } from './heroi-add/heroi-add.component';
import { HeroiFilterPipe } from './heroi-filter.pipe';
import { SearchInputComponent } from './search-input/search-input.component';
import { HeroiSearchComponent } from './heroi-search/heroi-search.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetalheComponent,
    MensagensComponent,
    NavbarComponent,
    DashboardComponent,
    HeroiAddComponent,
    HeroiFilterPipe,
    SearchInputComponent,
    HeroiSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRotaModule,
    NgbCollapseModule,
    HttpClientModule,
    environment.production ? []:
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,
      { delay: 500})
  ],
  providers: [InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
