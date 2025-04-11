// this allows us to use the component decorator to pull in the css and html files and also gives us an initialization funtion we can call if we want
import { Component, OnInit } from '@angular/core';
// So this enables angular routing. This does a lot of things but in this case it will let us pass the url from the url into our cocktail card service
import { ActivatedRoute, RouterModule } from '@angular/router';
// imports the cocktail card service which pulls the recipe for the card
import { CocktailCardService } from '../../services/cocktail-card.service';
import { CommonModule } from '@angular/common';

// Tells angular the following class is a component and to use this info for it
@Component({
  selector: 'app-cocktail-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './cocktail-detail.component.html',
  styleUrl: './cocktail-detail.component.css'
})
export class CocktailDetailComponent {
  // sets a variable to hold the data from our observable
  cocktail: any;

  // runs these privately when a component is created and REMEMBER THIS IS HOW YOU INJECT DEPENDENCIES YOUVE DONE THIS A BUNCH
  constructor(
    // this listens to changes in the URL and lets you grab the query parameters. remember we need the cocktail ID to search for it
    private route: ActivatedRoute,
    private cocktailcardservice: CocktailCardService,
  ) {}

// this is a life cycle hook in angualr that runs automagically when the component loads
  ngOnInit(): void {

    // grabs the id from the url this.route refers to the injected dependency in the constructor, .snapshot is a property of the dependency that contains a static snapshot of the route at the time of the request .paramMap is an object that provides access to route paratmesters. they are defined in the route with a colon: an example is /cocktial/:id. finally the .get gets the parameters from paramMap with the given variable in the call in this case id
    const cocktailId = this.route.snapshot.paramMap.get('id');

    // an if statement saying if there is a cocktailId then we do this
    if(cocktailId) {
      // this calls our cocktail card servcice to get the cocktails by the id we snagged early and subsribes to the obervable of the service
      this.cocktailcardservice.getCocktailDetailsById(cocktailId).subscribe(
        {
          // next means it happens if the api responds sucessfully and it uses the ternary operator to set cocktail = to the response and = to null if there are no drinks so the app doesn't crash
          next: (response) => {this.cocktail = response.drinks ? response.drinks[0]: null;

            // So basically if there is a response from the api it calls the get ingredients function
            if (this.cocktail) {
            this.getIngredientsList();
            }
          },
          // error is what displays if the observable or api fails
          error: (error) => {console.error('Error fetching cocktail details', error);},

        }

      );

    }
  }


// we need to add logic to listen to search updates 

  getIngredientsList() {
    // Okay so this creates an array of objects {}[] in typescript we have to declare the types of the values coming from the object which is an ingredient: with a string data type and a measure: also with a string data type.
    const ingredients: { ingredient: string; measure: string}[] = []

    for (let i = 1; i <= 15; i++) {
      // creates an ingredient variable that pulls from the cocktail object returned by the api. The api gives its response like this {'strIngredient1': 'tequila', 'strIngredient2': ''} since this object is one index we use one of those fancy strings that we can put variables in and incremement the number at the end. following that we declare a variable for measure that does the same thing
      const ingredient = this.cocktail[`strIngredient${i}`];
      const measure = this.cocktail[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push({
          ingredient,
          measure: measure ? measure.trim() : ''
        });
      }
    }
    return ingredients
  }
}
