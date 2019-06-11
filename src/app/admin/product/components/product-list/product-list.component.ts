import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private products: any;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((products: any) => {
      this.products = products;
      console.log(this.products);
    }, error => {
      error;
    });
  }

}
