import { Component, input, Input, signal } from '@angular/core';
import { Recipe } from '../../ds/recipe';

@Component({
  selector: 'app-recipe-card',
  imports: [],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {
  // original style
  // @Input() 
  // recipe!: Recipe;

  // Signal style
  recipe = input.required<Recipe>({});
}
