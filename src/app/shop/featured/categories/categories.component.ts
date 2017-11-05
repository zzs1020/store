import { Component, OnInit } from '@angular/core';
import { Category } from '../../../shared/enums/category.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'my-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  Category = Category; // use enum in template

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToCategory(category: Category) {
    this.router.navigate(['']);
  }
}
