import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  constructor() { }

  public pictures = {};

  ngOnInit() {
  }

selectedPic: string = '';

selectChangeHandler (event: any) {
  this.selectedPic = event.target.value;

}



}