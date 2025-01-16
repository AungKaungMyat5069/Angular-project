import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './home/components/product/product.component';
import { CartComponent } from './home/components/cart/cart.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'home',
        pathMatch:'full'
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'cart',
        component: CartComponent,
    }
];
