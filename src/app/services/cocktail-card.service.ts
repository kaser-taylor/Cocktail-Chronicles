// We know what this one does it makes it an injectable 
import { Injectable } from '@angular/core';
// This one makes it really easy to use http requests you basically just use this.http
import { HttpClient } from '@angular/common/http';
// This we've used a ton of time it creates an observable for pushing and pulling data
import { Observable } from 'rxjs';

// the injectable decorator allows dependency injection the provided in 'root' makes it available globally
@Injectable({
    providedIn: 'root',
})

export class CocktailCardService {
    // this creates a private variable of the base url. it helps us not repeat the url
    private baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1';
    
    // injects the http client and gives it the refrence name http
    constructor(private http: HttpClient){}

    get
}