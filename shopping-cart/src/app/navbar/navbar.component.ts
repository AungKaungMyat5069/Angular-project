import { Component, computed, inject } from '@angular/core';
import { CartService } from '../service/cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  cartService: CartService = inject(CartService);


  count = computed(() => this.cartService.cart().count);
  total = computed(() => this.cartService.cart().total);
}
