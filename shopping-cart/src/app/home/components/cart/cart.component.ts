import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../service/cart.service';
import { CartItemCardComponent } from "./cart-item-card/cart-item-card.component";

@Component({
  selector: 'app-cart',
  imports: [CartItemCardComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartService: CartService = inject(CartService);
  items = computed(() => this.cartService.cart().items);
  total = computed(() => this.cartService.cart().total);
  count = computed(() => this.cartService.cart().count);
}
