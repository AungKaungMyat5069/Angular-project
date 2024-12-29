import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterModule } from '@angular/router';
import { RecipeListComponent } from "../recipe/recipe-list/recipe-list.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, RouterModule, RecipeListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
