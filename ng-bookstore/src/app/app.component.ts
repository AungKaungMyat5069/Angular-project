import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookListComponent } from "./book/book-list/book-list.component";
import { catchError, delay, delayWhen, from, map, of, retry, retryWhen, tap, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BookListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ng-bookstore';

  ngOnInit(): void {
    // const stream$ = from(['4', '5', 'Hello', '3'])
    // stream$.pipe(
    //   map(
    //     value  => {
    //       if(isNaN(value as any) ) {
    //         throw new Error("This is not a number")
    //       }
    //       return parseInt(value)
    //     }
    //   ),
    //   // retry(2), 
    //   retryWhen(error => {
    //     return error.pipe(
    //       delayWhen(() => timer(4000)),
    //       tap(() => console.log("This is package")) // same as the peak but with side effect(input the data from outersider)
    //     )
    //   }),
    //   catchError(
    //     err => {
    //       console.log(err)
    //       return of()
    //     }
    //   )
    // ).subscribe(
    //   {
    //     next: data => console.log(data),
    //     error: err => console.log(err),
    //     complete: () => console.log("Complete stage")
    //   }
    // )
  }
}
