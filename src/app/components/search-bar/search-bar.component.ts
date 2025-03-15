// So what this import does: Component, allows the component decorator and the class to talk to eachother; EventEmitter and Output, allows the component to send data to a parent component.
import { Component, EventEmitter, Output } from '@angular/core'
// So the forms module basically connects the form the backend component logic to direct the play, enables that two way data binding we were looking up
import { FormsModule } from '@angular/forms';

// Now we have out component 
@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['/.search-bar.component.css'],
    standalone: true,
    // this is a dependency injection that allows us to use the from module directly in the component
    imports: [FormsModule]
    
})

// remember export allows us to use it in other parts of our project
export class SearchBarComponent {
    // now we need to create the variable that holds the search term of the user. Remember that this is typescript so we have to declare the type
    searchTerm: string = '';
    
    // here we are using @output instead of an observable fo two reasons. It is not a data stream, and in the forms module @output allows the component to talk to its parent component
    // search is the name of the event look at the = its like a variable
    // parent listens for the search event in the html
    // new event emitter creates a new instance of angulars built in class event emitter which allows you to send custom events. think like onclick()
    // the <string> in the angle parameter tells the emitter what the data type is
    @Output() search = new EventEmitter<string>();

    // on search is the function name
    onSearch() {
        // sets a constant variable to the search term variable above and trims it
        const trimmedTerm = this.searchTerm.trim();
        // sets an if block to a truthy falsy value basically if the string has characters it emits the search term.
        if (trimmedTerm) {
            // emits the custom event we declard in the @output called search
            this.search.emit(trimmedTerm)
        }
    }

}

// So basically the run down of this component is it takes a search value and then emits it to the parent function
