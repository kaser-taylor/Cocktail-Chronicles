// this allows us to use the component decorator to pull in the css and html files and also gives us an initialization funtion we can call if we want 
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 


@Component({
  selector: 'app-cocktail-detail',
  imports: [],
  templateUrl: './cocktail-detail.component.html',
  styleUrl: './cocktail-detail.component.css'
})
export class CocktailDetailComponent {

}
