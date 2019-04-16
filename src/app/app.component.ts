import { Component } from '@angular/core';
import { Cocktail } from './shared/models/cocktail.model'
import { Ingredient } from './shared/models/ingredient.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cocktails';

  cocktail = new Cocktail(
    'Mojito',
    'https://cdn.liquor.com/wp-content/uploads/2011/01/10103125/Skinny-Mojito-newest.jpg',
  'Le mojito, prononcé [moˈxito] en espagnol, ou mojito, morito, ou mohito en français, est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche',
  [
    new Ingredient('perrier', 1),
    new Ingredient('citron', 2),
    new Ingredient('sucre', 3)
  ])
}
