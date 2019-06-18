import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProviderService } from 'src/app/admin/provider/service/provider.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { forkJoin } from 'rxjs';
import { CategoryService } from 'src/app/admin/category/services/category.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  private productForm: FormGroup;
  private categorydrop: any;
  private providerdrop: any;
  private id: any;
  constructor(private formBuilder: FormBuilder, 
              private providerService: ProviderService, 
              private router: Router,
              private route: ActivatedRoute,
              private categoryService: CategoryService,
              private productService: ProductService) { }

  ngOnInit() {
    this.createForm();
    this.getDropDown();
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      if(this.id) {
        this.productService.getProductsById(this.id).subscribe((product) =>{
          this.productForm.patchValue(product);
        })
      }
    })

  }

  createForm() {
    this.productForm = this.formBuilder.group({
      produto_nome: ['', Validators.required],
      produto_descricao: ['', Validators.required],
      produto_estoque: ['', Validators.required],
      produto_valor: ['', Validators.required],
      marca_id: ['', Validators.required],
      produto_valor_promocao: ['', Validators.required],
      categoria_id: ['', Validators.required],
      produto_status: ['', Validators.required],
      _method: [''],
    });
  }

  submit() {
    if(this.id){
      this.productForm.patchValue({'_method':'PUT'})
      return this.productService.updateProduct(this.id, this.productForm.value).subscribe(() => {
        this.router.navigate(['admin/home/product'], {replaceUrl: true});

      })
    }
    this.productService.createProducts(this.productForm.value).subscribe((success) => {
      console.log(success);
      this.router.navigate(['admin/home/product'], {replaceUrl: true});

    }, error => {
      console.log("error:" + error);
    })
  }

  getDropDown() {
    forkJoin(this.categoryService.getCategory(), this.providerService.getProviders()).subscribe(([category, provider]) =>{
      this.providerdrop = provider;
      this.categorydrop = category;
    }, error => {
      console.log(error);
    })
  }
}
