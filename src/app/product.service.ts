import { Injectable } from '@angular/core';
import { Product } from '../app/entities/product.entity';

@Injectable(
  {  providedIn: 'root'}
  )
export class ProductService {

  private products: Product[];

  constructor() {

    this.products = [
      { id: '01', name: 'Nike Tanjun', price: 99, img: '../assets/blue-nike-low-top-shoes-637076.jpg' },
      { id: '02', name: 'Nike Revolution', price: 89, img: '../assets/blur-close-up-depth-of-field-fashion-1478442.jpg' },
      { id: '03', name: 'Nike Tensaur', price: 119, img: '../assets/photo-of-nike-shoes-1598505.jpg' },
      { id: '04', name: 'Nike Air Max', price: 129, img: '../assets/photo-of-pair-of-vans-sneakers-1598508.jpg' },
      { id: '05', name: 'Tensaur C', price: 1099, img: '../assets/shallow-focus-photography-of-pair-of-red-low-top-sneakers-1240892.jpg' },
      { id: '06', name: 'Crazychaos w', price: 68, img: '../assets/fashion-shoes-footwear-19090.jpg' },
      { id: '07', name: 'Baseline CMF', price: 80, img: '../assets/footwear-leather-shoes-wear-267320.jpg' },
      { id: '08', name: 'Grand Court', price: 132, img: '../assets/photo-of-nike-shoes-1598505.jpg' },
    ];
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  getOneProduct(id: string): Product {
    return this.products[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: string) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        return i;
      }
    }
    return -1;
  }


}
