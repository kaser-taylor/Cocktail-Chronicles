// so we import the onInit because itll let us run some code on the initialization of the the component we end up using this to subsribe to the search term
import { Component, OnInit } from '@angular/core';
// we're gonna use the ngif and ngfor for our html generation
import { CommonModule } from '@angular/common';
// this lets us use the cocktail service that we wrote that actually calls the api to search
import { CocktailService } from '../../services/cocktail.service';
// this is the search bar service that gives us the term
import { SearchService } from '../../services/search.service';
// so this allows us to use that router link thing that looks like [routerLink] in the html
import { Router, RouterModule } from '@angular/router';


@Component({
    selector: 'app-results',
    // injects the imports into the component
    imports: [CommonModule, RouterModule],
    templateUrl: './results.component.html',
    styleUrl: './results.component.css'
})

// the OnInit calls it immediately on the lifecycle hook
export class ResultsComponent implements OnInit {
    // So this is going to be an array that we hold the cocktail api return in and its kinda like a variable in decleration and we do the : because this is an object and then since this is typescript we have to declare the type lol so any[]
    cocktails: any[] = [];

    // So we include this in case the api returns an error
    errorMessage: string = '';

    // no we need to inject our dependencies directly into the class. the reason we only put values in here and not
    // logic to process is because in the angular lifecycle it will automagically populate the curly braces with the logic
    // from the dependencies you inject so it looks blank but Actually 🤓 it will contain logic
    constructor(
        // pulls cocktail api
        private cocktailService: CocktailService,
        // pulls search term from bar
        private searchService: SearchService,
        // lets us change router url
        private router: Router
    ) {}

    ngOnInit(): void {
        // this . calls search service injection . calls get search term from search service . subscribes to the oberservable from cocktail api by calling listDrinks from it with the argument term from the search service
        this.searchService.getSearchTerm().subscribe((term: string) => {this.listDrinks(term)});
}
    // creating the function that gathers the item lists
    listDrinks(searchTerm: string) {
        // this changes the url to clear the search results and details from the last query
        this.router.navigate(['/'])

        // this resets the array on a new search
        this.cocktails = []

        // calls the search by Name from the cocktail service which returns an observable notice we use the parameter passed into the this.listDrinks
        this.cocktailService.searchByName(searchTerm).subscribe({
            // this sets the first value of the object to next and sets next to an arrow function passing the response from the observable as a parameter. this.cocktails = the response.drinks use drinks because thats how cocktail db response if it returns nothing than you set it to an empty array
            next: (response) => {
                // so response checks if there even is one response.drinks checks if .drinks is part of response and .drinks.length checks if the length is greater than 0 then we can append to the array
                if (response && response.drinks && response.drinks.length > 0) {
                    // we push it on the array so we can have ingredients and named cocktails
                    this.cocktails.push(...response.drinks)
                }
            },

          error: (err) => {
            console.error('error occurred:', err);
          }
        })

        this.cocktailService.searchByIngredient(searchTerm).subscribe({
            // this sets the first value of the object to next and sets next to an arrow function passing the response from the observable as a parameter. this.cocktails = the response.drinks use drinks because thats how cocktail db response if it returns nothing than you set it to an empty array
            next: (response) => {
                // so response checks if there even is one response.drinks checks if .drinks is part of response and .drinks.length checks if the length is greater than 0 then we can append to the array
                if (response && response.drinks && response.drinks.length > 0) {
                    // we push it on the array so we can have ingredients and named cocktails
                    this.cocktails.push(...response.drinks)
                }
            }

        })


    }
}
