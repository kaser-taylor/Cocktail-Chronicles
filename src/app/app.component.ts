import { Component } from '@angular/core';

import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ResultsComponent } from './components/results/results.component';
import { CocktailDetailComponent } from './components/cocktail-detail/cocktail-detail.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [SearchBarComponent, HeaderComponent, ResultsComponent, CocktailDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cocktail-chronicles';
}
