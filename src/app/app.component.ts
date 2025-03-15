import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CocktailComponent } from './components/cocktailName/cocktail.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CocktailComponent, IngredientComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cocktail-chronicles';
}
