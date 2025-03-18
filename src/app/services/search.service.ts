// So the injectable import marks the class for the compiler as injectable which allows you to provide access to it in other components and services. Its like a hey I'm available for coffee of angular components and services
import { Injectable } from '@angular/core'
// So these decorators are important for moving the data around. The subject decorator is kinda like the owner of an email list. It basically says hey im gonna send some data to my subscribers. The obervable decorator basically says hey im going to be sending streams of data. 
import { Subject, Observable } from 'rxjs'

// So this decorator marks the following class as the injectable. provided in root means it is globally accessible 
@Injectable({ providedIn: 'root'})
// this exports the class globally called SearchService. If ihad to guess it throughs the reference to this class into the memory heap
export class SearchService {
    // so this creates a local private variable called searchTerm subject and sets it to a new instance of the Subject class which allows you to push data in a stream/observable fashion and sets the data type of this to a string
    private searchTermSubject = new Subject<string>();

    // creates a new function called setSearchTerm and sets the data type of the term parameter to string. this function allows the search bar component to set the search term
    setSearchTerm(term: string) {
        // the logic for this function is it pushes the variable searchTermSubject created earlier in the class to all of the subscribers using the this keyword to reference it and the next() method to push it
        this.searchTermSubject.next(term);
    }

    // this allows the ingredient and cocktail components to retrieve the search term in a safe observable fashion.
    getSearchTerm(): Observable<string> {
        return this.searchTermSubject.asObservable();
    }
}