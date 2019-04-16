import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { CocktailEditComponent} from './cocktail-edit/cocktail-edit.component';
import { CocktailContainerComponent } from './cocktail-container.component';
import { FilterPipe } from '../shared/pipes/filter.pipe';
import { ShareModule } from '../shared/modules/share.module'
import { cocktailRouting } from './cocktail.routing';

@NgModule({
  declarations: [
    CocktailsListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    CocktailEditComponent,
    FilterPipe
  ],
  imports: [
    FormsModule, 
    RouterModule,
    ReactiveFormsModule,
    ShareModule,
    cocktailRouting
  ],
  providers: [],
  exports:[]
})
export class CocktailModule { }