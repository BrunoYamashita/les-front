import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  @Input() categories: any;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategory().subscribe((categories) => {
      this.categories = categories;
    },error => {
      console.log(error);
    })
  }

}
