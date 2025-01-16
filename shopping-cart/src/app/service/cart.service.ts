import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Cart>(
    { items: [], count: 0, total: 0 }
  );

  constructor() { }

  addItem(item: CartItem) {
    const items = this.cart().items.find(i => i.id === item.id);
    if (items) {
      this.incrementItem(items);
    } else {
      this.cart.update(preCart => {
        return {
          items: [...preCart.items, item],
          count: preCart.count + 1,
          total: preCart.total + item.price
        };
      });
    }
  }

  incrementItem(item:CartItem) {
    this.cart.update(preCart => {
      const newCart = {
        ...preCart,
        items: [...preCart.items]
      } 
      const itemObj = newCart.items.find(i => i.id === item.id);
      itemObj!.quantity = itemObj!.quantity + 1;
      newCart.count ++;
      newCart.total += item.price;
      return newCart;
    })
  }

}

export interface CartItem {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  count: number;
  total: number;
}
