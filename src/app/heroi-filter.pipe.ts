import { Pipe, PipeTransform } from '@angular/core';
import { Heroi } from './heroi.model';

@Pipe({
  name: 'heroiFilter'
})
export class HeroiFilterPipe implements PipeTransform {

  transform(herois: Heroi[], filter: string): Heroi[] {
    const nome = filter.trim().toLocaleLowerCase();
    if(!nome){
      return herois;
    }
    return herois.filter(
      heroi => heroi.nome.toLocaleLowerCase().indexOf(nome) !== -1
    );
  }

}
