import { Routes } from '@angular/router';
import { CocktailDetailComponent } from './components/cocktail-detail/cocktail-detail.component';

export const routes: Routes = [
    // So here we add a route so angular knows to send url with cocktail/ an id to the cocktail detail compontent: see cocktial detail component and ing and cocktail comp for more notes 
    {path: 'cocktail/:id', component: CocktailDetailComponent}
];
