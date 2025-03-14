import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CocktailComponent } from './components/cocktailName/cocktail.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CocktailComponent, IngredientComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cocktail-chronicles';
}
