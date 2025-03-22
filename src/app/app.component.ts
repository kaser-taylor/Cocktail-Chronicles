import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CocktailComponent } from './components/cocktailName/cocktail.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CocktailDetailComponent } from './components/cocktail-detail/cocktail-detail.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CocktailComponent, IngredientComponent, SearchBarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cocktail-chronicles';
}
