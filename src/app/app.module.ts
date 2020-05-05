import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ProductCollageComponent } from './product-collage/product-collage.component';
import { FooterComponent } from './footer/footer.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductComponent } from './products/products.component';
import { PopularProductsComponent } from './popular-products/popular-products.component';
import { RouterModule } from '@angular/router';
import { ProductInfoComponent } from './product-info/product-info.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SuccessSiteComponent } from './success-site/success-site.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CheckoutLayoutComponent } from './checkout-layout/checkout-layout.component';
import { CookieService} from 'ngx-cookie-service';
import { LogoutComponent } from './logout/logout.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCartComponent } from './product-cart/product-cart.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowcaseComponent,
    FooterComponent,
    ProductCollageComponent,
    NewsletterComponent,
    CarouselComponent,
    NavigationComponent,
    ProductComponent,
    PopularProductsComponent,
    ProductInfoComponent,
    AboutComponent,
    RegisterComponent,
    ShoppingCartComponent,
    LoginComponent,
    ProfileComponent,
    SuccessSiteComponent,
    RegisterComponent,
    CheckoutLayoutComponent,
    LogoutComponent,
    ProductListComponent,
    ProductCartComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
