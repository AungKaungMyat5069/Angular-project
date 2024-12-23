import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, delayWhen, Observable, retryWhen, shareReplay, tap, timer } from 'rxjs';
import { Book } from '../ds/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private BASE_URL = "http://localhost:8080/book"
  private $bookSubject:BehaviorSubject<Book[]>  = new BehaviorSubject<Book[]>([]); // 2 1
  $books = this.$bookSubject.asObservable(); //2 3

  constructor(private http:HttpClient) {
    this.getAllBook()
    .pipe(
      shareReplay() //2 4
      ,retryWhen(error => {
        return error.pipe(
          delayWhen(() => timer(3000))
          , tap(() => console.log("Connection is something lost"))
        )
      })
    )
    .subscribe(
      {
        next: data => this.$bookSubject.next(data),
        error: err => console.log(err)
      }
    ) //2 2
   }

  private getAllBook():Observable<Book[]> {// Observable is produce, so When you call you need consumer
    return this.http.get<Book[]>(this.BASE_URL + "/all")
  }

  //to Control service 2 step 0
}
