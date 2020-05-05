import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './products/products.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { ModuleWithProviders } from '@angular/core';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SuccessSiteComponent } from './success-site/success-site.component';
import { CheckoutLayoutComponent } from './checkout-layout/checkout-layout.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCartComponent } from './product-cart/product-cart.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home',  },
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-info', component: ProductInfoComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'product-cart', component: ProductCartComponent },
  { path: 'cart', component: ShoppingCartComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'success-site', component: SuccessSiteComponent},
  { path: 'checkout', component: CheckoutLayoutComponent},
  { path: 'logout', component: LogoutComponent}
  
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
