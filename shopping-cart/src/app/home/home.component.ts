import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { DealComponent } from "./components/deal/deal.component";
import { ProductComponent } from "./components/product/product.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, FooterComponent, DealComponent, ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
