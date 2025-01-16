import { Component, inject } from '@angular/core';
import { Product, PRODUCTS } from '../../../data/protect';
import { ProductCardComponent } from './product-card/product-card.component';
import { CartService } from '../../../service/cart.service';

@Component({
  selector: 'app-product',
  imports: [ProductCardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  products = PRODUCTS;

  cartService: CartService = inject(CartService)

  addProduct(product: Product) {
   // this argument is Product but passing as CartItem so JavaScript Developer can pass any type of argument
    this.cartService.addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity: 1
    })
  }
} 
