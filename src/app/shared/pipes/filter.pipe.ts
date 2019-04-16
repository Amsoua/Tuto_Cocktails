import { Pipe, PipeTransform } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cocktails: Cocktail[], searh: string): Cocktail[] | null {
    if(!searh.length){
      return cocktails;
    }else{
      return cocktails.filter( c => c.name.toLowerCase().includes(searh));
    }
  }

}
