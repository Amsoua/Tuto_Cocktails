import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/models/ingredient.model';
import { PanierService } from '../../shared/services/panier.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit, OnDestroy {
  public ingredients: Ingredient[] = [new Ingredient('lemon', 2)];
  private subscription: Subscription;

  constructor(private panierService: PanierService) { }

  ngOnInit() {
    this.subscription = this.panierService.panier.subscribe( (ingredients: Ingredient[] ) => {
      this.ingredients = ingredients;
    } )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
