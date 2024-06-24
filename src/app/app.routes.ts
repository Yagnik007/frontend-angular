import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            {path:"",component:LoginComponent},
            {path: 'dashboard', component: DashboardComponent},
            {path: 'login', component: LoginComponent},
            {path: 'register', component: RegisterComponent},
            {path: 'products', component: ProductsComponent},
            {path: 'cart', component: CartComponent},
            {path: 'contact', component: ContactComponent}
        ]
    }
];
