import { Component, input, output } from '@angular/core';
import { Product } from '../../../../data/protect';
import { TruncatePipe } from '../../../../pipe/truncate.pipe';

@Component({
  selector: 'app-product-card',
  imports: [TruncatePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
    product = input.required<Product>();

    add = output<Product>();
    addOn() {
      console.log('Product added', this.product());
      
    }
    
    addClicked() {
        this.add.emit(this.product());
    }
}
