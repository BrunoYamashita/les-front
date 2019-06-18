import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: any;
  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
  }
  edit(){
    this.router.navigate(['admin/home/product', this.product.produto_id])
  }

  delete() {
    this.productService.deleteProduct(this.product.produto_id).subscribe(() => {
      this.router.navigate(['admin/home/product'])
    })
  }
}
