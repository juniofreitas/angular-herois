import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {
  private mensagens: string[] = [];

  constructor() { }

  getMensagens(): string[]{
    return this.mensagens;
  }

  add(m: string){
    this.mensagens.push(m);
  }

  clear(){
    this.mensagens = [];
  }
}
