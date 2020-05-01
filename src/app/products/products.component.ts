import { Component, OnInit,Output, EventEmitter, Input  } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../app/entities/product.entity';

@Component({
  selector: 'product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductComponent implements OnInit {



  @Input() product: any;
  @Output() productAdded = new EventEmitter();
  addProductToCart(product) {
    this.productAdded.emit(product);
  }





  constructor() { }

  ngOnInit() {



  }

}
