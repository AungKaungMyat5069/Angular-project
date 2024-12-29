import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeListComponent } from "./recipe/recipe-list/recipe-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RecipeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // counter:number = 0; 

  // increment(){
  //   this.counter++;
  // }

  // decrement(){
  //   this.counter--;
  // }

  // reset(){
  //   this.counter = 0;
  // }

  // Signal to Angular that the component should be reused
  counter = signal(0);

  increment(){
    // this.counter.set(this.counter() + 1); //set method is used to update the value of the signal
    this.counter.update(n => n + 1); //update method is used to update the value of the signal
  }

  decrement(){
    // this.counter.set(this.counter() - 1);
    this.counter.update(n => n - 1);
  }

  reset(){
    // this.counter.set(0);
    this.counter.update(() => 0);
  }
}
