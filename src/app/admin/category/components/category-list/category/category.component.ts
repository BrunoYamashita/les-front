import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() category:any; 
  constructor(private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
  }
  edit() {
    this.router.navigate(['admin/home/category',this.category.categoria_id]);
  }

  delete(){
    this.categoryService.deleteCategory(this.category.categoria_id).subscribe(() =>{
      this.router.navigate(['admin/home/category']);
    })
  }

}
