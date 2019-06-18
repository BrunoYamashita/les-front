import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  private categoryForm: FormGroup;
  private id:any;
  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.createForm();
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      if (this.id){
        this.categoryService.getCategoryById(this.id).subscribe((category: any) => {
          this.categoryForm.patchValue(category);
        });
      }
    });
  }

  createForm() {
    this.categoryForm = this.formBuilder.group({
      categoria_nome: ['', Validators.required],
      categoria_status: ['', Validators.required],
      _method: ''
    });
  }

  submit() {
    if(this.id) {
      this.categoryForm.patchValue({'_method':'PUT'})
      return this.categoryService.updateCategory(this.id, this.categoryForm.value).subscribe(() => {
        this.router.navigate(['admin/home/category'], {replaceUrl: true});
      }, error =>{
        console.log(error);
      })
    }
    this.categoryService.createCategory(this.categoryForm.value).subscribe((success) => {
      console.log(success);
      this.router.navigate(['admin/home/category'], {replaceUrl: true});

    }, error => {
      console.log("error:" + error);
    })
  }
}
