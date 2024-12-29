import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Recipe } from '../ds/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  http:HttpClient = inject(HttpClient);
  RECIPE_BACKEND_URL = 'http://localhost:8080';

  //Second Method
  recipeSignal = signal<Recipe[]>([]);

  //Second Method
  constructor() {
    this.getAllRecipesV3().then(
      reponse => this.recipeSignal.set(reponse)
    ).catch(
      error => console.log(error + 'Error in RecipeService')
    )
   }

  getAllRecipes():Observable<Recipe[]>{
    return this.http.get<Recipe[]>(`${this.RECIPE_BACKEND_URL}/recipes`);
  }

  async getAllRecipesV2():Promise<Recipe[]>{
    const $recipes = this.http.get<Recipe[]>(`${this.RECIPE_BACKEND_URL}/recipes`);
    const recipe$ = await firstValueFrom($recipes);
    return recipe$;
  }

  async getAllRecipesV3():Promise<Recipe[]>{
    const response = await fetch(`${this.RECIPE_BACKEND_URL}/recipes`, {
        method: 'GET' // this is the default method so this line is optional
      }
    );
    const recipes = await response.json();
    return recipes;
  }
}
