import { Pipe, PipeTransform } from '@angular/core';
import { Heroi } from './heroi.model';

@Pipe({
  name: 'heroiFilter'
})
export class HeroiFilterPipe implements PipeTransform {

  transform(herois: Heroi[], filter: string): Heroi[] {
    const name = filter.trim().toLocaleLowerCase();
    if(!name){
      return herois;
    }
    return herois.filter(
      heroi => heroi.name.toLocaleLowerCase().indexOf(name) !== -1
    );
  }

}
