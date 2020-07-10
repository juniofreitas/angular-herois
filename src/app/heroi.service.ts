import { Injectable } from '@angular/core';
import { Heroi } from './heroi.model';
import { Observable, of} from 'rxjs';
import { tap, catchError } from 'rxjs/Operators';
import { MensagemService } from './mensagem.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroiService {

  private heroisUrl = `${environment.baseUrl}/herois`;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    })
  };

  constructor(
    private mService: MensagemService,
    private http: HttpClient) { }

  getHerois(): Observable<Heroi[]> {
    return this.http.get<Heroi[]>(this.heroisUrl, this.httpOptions).pipe(
      tap(() => this.log("obtida lista de heróis.")),
      catchError(this.handleError<Heroi[]>('getHerois', []))
    );
  }

  getHeroi(id: number): Observable<Heroi>{

    return this.http.get<Heroi>(this.heroisUrl+"/"+id, this.httpOptions).pipe(
      tap(() => this.log("obtido herói de id" + id)),
      catchError(this.handleError<Heroi>('getHerois', ))
    );
  }

  updateHeroi(h: Heroi): Observable<Heroi>{
    const url = `${this.heroisUrl}/${h.id}`;
    return this.http.put<Heroi>(url, h, this.httpOptions).pipe(
      tap(() => this.log(`atualizado herói id=${h.id}`)),
      catchError(this.handleError<Heroi>('updateHeroi'))
    );
  }

  addHeroi(heroi: Heroi): Observable<Heroi> {
    return this.http.post(this.heroisUrl, heroi, this.httpOptions).pipe(
      tap((nHeroi: Heroi) => this.log(`adicionado heroi com id=${nHeroi.id}`)),
      catchError(this.handleError<Heroi>('addHeroi'))
    );
  }

  delHeroi(heroi: Heroi): Observable<any>{
    const url = `${this.heroisUrl}/${heroi.id}`;

    return this.http.delete<any>(url, this.httpOptions).pipe(
      tap(() => this.log(`Removido herói de id=${heroi.id}`)),
      catchError(this.handleError<Heroi>('delHeroi'))
    );
  }

  searchHerois(term: string): Observable<Heroi[]> {
    if (!term.trim()) {
      return of([]);
    }

    return this.http
      .get<Heroi[]>(`${this.heroisUrl}/?nome=${term}`, this.httpOptions)
      .pipe(
        tap((herois) =>
          herois && herois.length
            ? this.log(`encontrado heróis com "${term}"`)
            : this.log(`não encontrado heróis com "${term}"`)
        ),
        catchError(this.handleError<Heroi[]>('searchHerois', []))
      );
  }

  private log(m: string){
    this.mService.add(`HeroiService: ${m}`);
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
