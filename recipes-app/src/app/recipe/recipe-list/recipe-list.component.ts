import { Component, inject, OnInit, signal } from '@angular/core';
import { RecipeService } from '../service/recipe.service';
import { Observable } from 'rxjs';
import { Recipe } from '../ds/recipe';
import { CommonModule } from '@angular/common';
import { RecipeCardComponent } from "./recipe-card/recipe-card.component";

@Component({
  selector: 'app-recipe-list',
  imports: [CommonModule, RecipeCardComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  //V1
  recipeService:RecipeService = inject(RecipeService);
  //V1
  // resipe$:Observable<Recipe[]> = this.recipeService.getAllRecipes();

  //V2
  recipe$ = signal<Recipe[]>([]);

  ngOnInit(): void {
    // V2
    // this.getRecipes().then(
    //   () => console.log('Recipes loaded')
    // );

    // V3
    // This method will connect to database once time
    this.recipe$ = this.recipeService.recipeSignal;
  }
  //V2
  // async getRecipes(){
  //   try {
  //     const recipes = await this.recipeService.getAllRecipesV2();
  //     this.recipe$.set(recipes);


  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}
