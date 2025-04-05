// So what this import does: Component, allows the component decorator and the class to talk to eachother; EventEmitter and Output, allows the component to send data to a parent component.
import { Component, EventEmitter, Output } from '@angular/core'
// So the forms module basically connects the form the backend component logic to direct the play, enables that two way data binding we were looking up
import { FormsModule } from '@angular/forms';
// So this will allow us to use our search service which basically created a mailing list for the search term
import { SearchService } from '../../services/search.service';

// Now we have out component
@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css'],
    standalone: true,
    // this is a dependency injection that allows us to use the from module directly in the component
    imports: [FormsModule]

})

// remember export allows us to use it in other parts of our project
export class SearchBarComponent {
    // now we need to create the variable that holds the search term of the user. Remember that this is typescript so we have to declare the type
    searchTerm: string = '';

    // so this enables the dependency injection of search service into this class. We will be using this to push searchTerm to the other components
    constructor(private searchService: SearchService) {}

    onSearch() {
        // creates a trimmed version of the term for the API
        const trimmedTerm = this.searchTerm.trim();
        // if trimmed term is truthy (if there is one) then sets the search service search term
        if (trimmedTerm) {
            this.searchService.setSearchTerm(trimmedTerm);
        }
    }
}

// So basically the run down of this component is it takes a search value and then emits it to the parent function
