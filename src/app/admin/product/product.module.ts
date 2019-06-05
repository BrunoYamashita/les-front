import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductComponent } from './components/product-list/product/product.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductViewComponent, ProductListComponent, ProductFormComponent, ProductComponent]
})
export class ProductModule { }
