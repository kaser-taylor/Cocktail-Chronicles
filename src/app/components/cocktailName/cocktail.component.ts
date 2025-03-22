import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailService } from '../../services/cocktail.service';
import { SearchService } from '../../services/search.service';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-cocktail',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './cocktail.component.html',
    styleUrls: ['./cocktail.component.css']
})

export class CocktailComponent implements OnInit {
    cocktails: any[] = [];
    errorMessage: string = '';

    constructor(
        private cocktailService: CocktailService,
        private searchService: SearchService
    ) {}

    ngOnInit() {
        this.searchService.getSearchTerm().subscribe((term: string) => {this.searchCocktails(term)});
    }

    searchCocktails(name: string) {
        this.cocktailService.searchByName(name).subscribe({
            next: (response) => this.cocktails = response.drinks || [],
            error: (err) => this.errorMessage = err.message    
        })
    }
}
