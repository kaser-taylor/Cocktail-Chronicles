import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CocktailService {
    private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

}