// so we import the onInit because itll let us run some code on the initialization of the the component we end up using this to subsribe to the search term
import { Component, OnInit } from '@angular/core';
// we're gonna use the ngif and ngfor for our html generation
import { CommonModule } from '@angular/common';
// this lets us use the cocktail service that we wrote that actually calls the api to search
import { CocktailService } from '../../services/cocktail.service';
// this is the search bar service that gives us the term
import { SearchService } from '../../services/search.service';
// 
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-results',
  imports: [],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {

}
