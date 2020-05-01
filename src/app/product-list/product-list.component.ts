import { Component, OnInit,Output, EventEmitter, Input  } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../app/entities/product.entity';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 
  @Input() product: any;
  @Output() productAdded = new EventEmitter();
  addProductToCart(product) {
    this.productAdded.emit(product);
  }



  private products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {

    this.products = this.productService.getAllProducts();

  }

}
