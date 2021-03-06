import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/cocktail.service';
import { Ingredient } from '../../shared/models/ingredient.model';
import { PanierService } from '../../shared/services/panier.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {
  public cocktail: Cocktail; 
  public index: number;
  
  constructor(private activedRoute: ActivatedRoute, private cocktailService: CocktailService, private panierService: PanierService) { }

  ngOnInit() {
    this.activedRoute.params.subscribe( ( params: Params ) => {
      if(params.index){
        this.index = params.index;      
      }else{
        this.index = 0;   
      }
      this.cocktailService.getCoctail(this.index).subscribe( (cocktail: Cocktail) => {
        this.cocktail = cocktail
      });
    })
  }

  addPanier(ingredients: Ingredient[]): void{
    this.panierService.addIngredients(ingredients);
  }

  getUrl(): string[]{
    return ['/cocktails', this.index + '', 'edit'];
  }
}
