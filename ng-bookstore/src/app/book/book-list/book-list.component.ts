import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../ds/book';
import { BookService } from '../service/book.service';
import { CommonModule } from '@angular/common';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-list',
  imports: [CommonModule, RouterModule], // this import will be prototype // router module to jump the browser path
  
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit, OnDestroy{
  books!:Book[];
  // constructor(private bookservice: BookService) {// this written is dependance injection
    // this way is first and second way
  // }
  //first way
  
  // subscribe!: Subscription
  // ngOnInit(): void {
  //   this.subscribe = this.bookservice.getAllBook()
  //   .subscribe(
  //     {
  //       next: data => this.books = data,
  //       error: err => console.log(err),
  //       complete: () => console.log("stage is complete")
  //     }
  //   )
  // }

  // ngOnDestroy(): void {
  //   this.subscribe.unsubscribe();
  // }

  //second way calling api
  // $destory = new Subject<void>();
  // ngOnInit(): void {
  //   this.bookservice.getAllBook()
  //   .pipe(
  //     takeUntil(this.$destory) // take util is work until argument is emit
  //   )
  //   .subscribe(
  //     {
  //       next: data => this.books = data,
  //       error: err => console.log(err),
  //       complete: () => console.log("stage is complete")
  //     }
  //   )
    
  // }

  // ngOnDestroy(): void {
  //   this.$destory.next() //next is emition
  //   this.$destory.complete();
  // }

  // bookservice:BookService = inject(BookService);
  // $books:Observable<Book[]> = this.bookservice.getAllBook(); 

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    
  }

  bookservice:BookService = inject(BookService);
  $books:Observable<Book[]> = this.bookservice.$books;
}
