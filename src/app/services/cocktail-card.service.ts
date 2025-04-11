// We know what this one does it makes it an injectable
import { Injectable } from '@angular/core';
// This one makes it really easy to use http requests you basically just use this.http
import { HttpClient } from '@angular/common/http';
// This we've used a ton of time it creates an observable for pushing and pulling data
import { BehaviorSubject, Observable, map } from 'rxjs';
// interface for observable
import { Drinks, CocktailFacts } from '../models/cocktailCard.model';


// the injectable decorator allows dependency injection the provided in 'root' makes it available globally
@Injectable({
    providedIn: 'root',
})

export class CocktailCardService {
    // this creates a private variable of the base url. it helps us not repeat the url
    private baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

    // injects the http client and gives it the refrence name http
    constructor(private http: HttpClient){}

    // we need a behavior subject to listen to
    private cocktailInfo$ = new BehaviorSubject<CocktailFacts | null>(null);

    // obeservable for component to listen to
    cocktail$ = this.cocktailInfo$.asObservable();


    // creates a function that takes a cocktail id in the form of a string as an argument and
    getCocktailDetailsById(cocktailId: string | null = null): void {
        // So what this does is create a get http request that accepts any type of response. this.http refers the http module that we injected into this service. its also important to remember that this.http.get returns an observable which is essentially a stream of data
        // console.log('working');

        this.http.get<Drinks>(`${this.baseUrl}/lookup.php?i=${cocktailId}`).pipe(
            map(response => {
                const cocktail = response.drinks[0];
                this.cocktailInfo$.next(cocktail);
            })
        )

        // return this.http.get<any>(`${this.baseUrl}/lookup.php?i=${cocktailId}`);
    }

}
