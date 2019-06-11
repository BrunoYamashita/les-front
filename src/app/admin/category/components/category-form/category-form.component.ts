import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  private categoryForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.categoryForm = this.formBuilder.group({
      categoria_nome: ['', Validators.required],
      categoria_status: ['', Validators.required]
    });
  }

  submit() {
    this.categoryService.createCategory(this.categoryForm.value).subscribe((success) => {
      console.log(success);
      this.router.navigate(['admin/home/category'], {replaceUrl: true});

    }, error => {
      console.log("error:" + error);
    })
  }
}
