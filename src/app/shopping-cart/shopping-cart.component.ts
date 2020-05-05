import { Component, Input, Output,OnInit, EventEmitter  } from '@angular/core';

import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../entities/product.entity';
import { Item } from '../entities/item.entity';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  private items: Item[] = [];
  private total: number = 0;
  private itemQuantity: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService ) { }


 // @Input() products: any[];
  @Output() productRemoved = new EventEmitter();
  calcTotal() {
    return this.items.reduce((acc, item) => acc+= item.quantity ,0)
  }
  removeProduct(item) {
    this.productRemoved.emit(item)
  }

  ngOnInit() {

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

  remove(id: string): void {
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    let index: number = -1;
    for (var i = 0; i < cart.length; i++) {
      let item: Item = JSON.parse(cart[i]);
      if (item.product.id == id) {

        cart.splice(i, 1);
        break;
        
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.loadCart();
  }
 }
