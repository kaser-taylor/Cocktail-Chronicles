/* First we import component and oninit. */
/* Component labels the component in angular and helps the component decorator talk to the class */
/* oninit allows us to automatically run some code on the initialization of the component/class thingy using ngOnInit() */
import { Component, OnInit } from '@angular/core';
// next we import CommonModule. this lets us use a lot of common angular things like ng if and ng for
import { CommonModule } from '@angular/common';
// next we import the cocktail service that we made earlier. this lets us search for different things
import { CocktailService } from '../../services/cocktail.service'

// then we define our component using the componenet decorator. Remember behind the scenes it will connect to a following class and this is why folder and file management is so important in angular. it makes things easier to debug and helps keep organized

@Component({
    // first we give it a selector. This is how it will be referenced by other files and parts of the code
    selector: 'app-ingredient',
    // then we do this standalone thing. I am not completely sure what this does but I think this is a discrepency between gpt training and modern angular versions
    standalone: true,
    // then we give the import list of things we will use in this component. we import the commonmodule on this one because we are going to use the ngig and ngfor to render indredient lists and cocktails
    imports: [CommonModule],
    // then we have to point it at an html file so it knows how to structure the component on the webpage
    templateUrl: './ingredient.component.html',
    // then we do the same for styling
    styleUrls: ['./ingredient.component.css']
})

// We then need to define the class. we are going to use the export keyword so it is available in other spots for export. and then we include implements OnInit. This causes angular to call the class when it is intialized on the lifecycle hook

export class CocktailComponent implements OnInit {
    // now we need a container for the ingredients. cocktail db returns ingredients as an array of strings. because this is typescript we have to define the type lol thats why we do any []. remember this is an object so we use :
    drinks: any[] = [];
    // we have to remember to handle errors so we give a container for the errors
    errorMessage: string = '';
    // next we need to inject the cocktail service we wrote earlier into this class and we do that with a constructor we do it privately so its only accessible in this class. cocktailService1 is the variable name cocktailService is the class we want to inject
    constructor(private cocktailService: CocktailService) {}

    // so now we are going to a function that is called on the initialization of the class remember common module. this function is going to call another function we will write below. the void means that there is not a return for this function
    ngOnInit(): void {
        this.listDrinks('negroni');
    }

    // create the function structure
    listDrinks(name: string) {
        // okay so this line it a doozy. first we use this to reference the class we are in, then we point that at the cocktailService variable from above. we then call searchByIngredient from the class that refrences and pass a name into it. we then subscribe to the data coming from the api
        this.cocktailService.searchByIngredient(name).subscribe({
            // Since the data is piped in response at a time the next respone that is sent from cocktailService is passed into the ingredients array or it gives it an empty array if empty
            next: (response) => this.cocktailService = response.ingredients || [],
            // this is how it handles error messages
            error: (err) => this.errorMessage = err.message
        })
    }
}