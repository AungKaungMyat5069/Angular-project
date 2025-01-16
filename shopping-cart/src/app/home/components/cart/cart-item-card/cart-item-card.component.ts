import { Component, input } from '@angular/core';
import { CartItem } from '../../../../service/cart.service';

@Component({
  selector: 'app-cart-item-card',
  imports: [],
  templateUrl: './cart-item-card.component.html',
  styleUrl: './cart-item-card.component.scss'
})
export class CartItemCardComponent {
  cart_item = input.required<CartItem>();
}
