// this allows us to use the component decorator to pull in the css and html files and also gives us an initialization funtion we can call if we want
import { Component, OnInit } from '@angular/core';
// So this enables angular routing. This does a lot of things but in this case it will let us pass the url from the url into our cocktail card service
import { ActivatedRoute, RouterModule } from '@angular/router';
// imports the cocktail card service which pulls the recipe for the card
import { CocktailCardService } from '../../services/cocktail-card.service';
import { CommonModule } from '@angular/common';
import { CocktailFacts } from '../../models/cocktailCard.model';

// Tells angular the following class is a component and to use this info for it
@Component({
  selector: 'app-cocktail-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './cocktail-detail.component.html',
  styleUrl: './cocktail-detail.component.css'
})
export class CocktailDetailComponent {

  // runs these privately when a component is created and REMEMBER THIS IS HOW YOU INJECT DEPENDENCIES YOUVE DONE THIS A BUNCH
  constructor(
    // this listens to changes in the URL and lets you grab the query parameters. remember we need the cocktail ID to search for it
    private route: ActivatedRoute,
    private cocktailcardservice: CocktailCardService,
  ) {}


  cocktailFacts: CocktailFacts | null = null
// this is a life cycle hook in angualr that runs automagically when the component loads
  ngOnInit(): void {
    this.cocktailcardservice.cocktail$.subscribe(info => {
        if (info) {
            this.cocktailFacts = info;
        }
    })

  }


  ingredientsList() {
    const ingredients: {ingredient: string | null; measure: string | null}[] = []
    for (let i = 1; i <= 15; i ++) {
    const ingredientKey = `strIngredient${i}` as keyof CocktailFacts;
    const measureKey = `strMeasure${i}` as keyof CocktailFacts;

    if (this.cocktailFacts) {
    const ingredient = this.cocktailFacts[ingredientKey as keyof CocktailFacts];
    const measure = this.cocktailFacts[measureKey as keyof CocktailFacts];
    if (ingredient !== null) {
    ingredients.push({ingredient, measure})
            }
        }
        
    }
    return ingredients
}
}
// we need to add logic to listen to search updates

//   getIngredientsList() {
//     // Okay so this creates an array of objects {}[] in typescript we have to declare the types of the values coming from the object which is an ingredient: with a string data type and a measure: also with a string data type.
//     const ingredients: { ingredient: string; measure: string}[] = []

//     for (let i = 1; i <= 15; i++) {
//       // creates an ingredient variable that pulls from the cocktail object returned by the api. The api gives its response like this {'strIngredient1': 'tequila', 'strIngredient2': ''} since this object is one index we use one of those fancy strings that we can put variables in and incremement the number at the end. following that we declare a variable for measure that does the same thing
//       const ingredient = this.cocktail[`strIngredient${i}`];
//       const measure = this.cocktail[`strMeasure${i}`];
//       if (ingredient) {
//         ingredients.push({
//           ingredient,
//           measure: measure ? measure.trim() : ''
//         });
//       }
//     }
//     return ingredients
//   }
// }
// }
