import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CocktailService {
    private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

    constructor(private http: HttpClient) {}

    searchByName(name: string): Observable<any> {
        return this.http.get(`${this.apiUrl}/search.php?s=${name}`).pipe(
            catchError(this.handleError)
        );
    }

    searchByIngredient(ingredient: string): Observable<any>
}