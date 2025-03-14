import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CocktailComponent } from './components/cocktailName/cocktail.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CocktailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cocktail-chronicles';
}
