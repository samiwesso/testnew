import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth.service';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';

import { Product } from '../entities/product.entity';
import { Item } from '../entities/item.entity';

//import { CookieService } from 'ngx-cookie-service';
//import { AuthService } from '../auth.service';
declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router, private cookieService: CookieService, private authService: AuthService, private productService: ProductService, private activatedRoute: ActivatedRoute) { }
  private items: Item[] = [];
  private total: number = 0;
  private itemQuantity: number = 0;



  isLoggedIn: boolean = this.cookieService.check('isLoggedIn')
  
  public user = {}

  ngOnInit() {
    if(this.isLoggedIn) {
      this.authService.getUser().subscribe(data => this.user = data)
    }

    this.activatedRoute.params.subscribe(params => {
      var id = params['id'];
      if (id) {
        var item: Item = {
          product: this.productService.getOneProduct(id),
          quantity: 1
        };
        if (localStorage.getItem('cart') == null) {
          let cart: any = [];
          cart.push(JSON.stringify(item));
          localStorage.setItem('cart', JSON.stringify(cart));
        } else {
          let cart: any = JSON.parse(localStorage.getItem('cart'));
          let index: number = -1;
          for (var i = 0; i < cart.length; i++) {
            let item: Item = JSON.parse(cart[i]);
            if (item.product.id == id) {
              index = i;
              break;
            }
          }
          if (index == -1) {
            cart.push(JSON.stringify(item));
            localStorage.setItem('cart', JSON.stringify(cart));
          } else {
           
            let item: Item = JSON.parse(cart[index]);
            item.quantity += 1;
            cart[index] = JSON.stringify(item);
            localStorage.setItem("cart", JSON.stringify(cart));
          }
        }
        this.loadCart();
        
      } else {
        this.loadCart();
        
      }
    });
  }
  loadCart(): void {
    this.itemQuantity = 0;
    this.total = 0;
    this.items = [];
    
    let cart = JSON.parse(localStorage.getItem('cart'));
    for (var i = 0; i < cart.length; i++) {
      let item = JSON.parse(cart[i]);
      this.items.push({
        product: item.product,
        quantity: item.quantity
      });
      this.total += item.product.price * item.quantity;
      this.itemQuantity += item.quantity;
    }
  }
  
// remove(id: string): void {
//   this.itemQuantity = 0;
//   let cart: any = JSON.parse(localStorage.getItem('cart'));
//   let index: number = -1;
//   for (var i = 0; i < cart.length; i++) {
//     let item: Item = JSON.parse(cart[i]);
  
//     if (item.product.id == id) {
//       this.itemQuantity += item.quantity;
//       cart.splice(i, 1);
//       break;
      
//     }
//   }
//   localStorage.setItem("cart", JSON.stringify(cart));
//   this.loadCart();
// }
}
