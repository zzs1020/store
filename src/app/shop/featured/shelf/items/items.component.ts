import { Component, Input, OnInit } from '@angular/core';
import { DisplayStyle } from '../../../../shared/settings/display-style.enum';
import { Router } from '@angular/router';
import { Product } from '../../../../shared/services/product/product';
import { ProductService } from '../../../../shared/services/product/product.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  @Input() displayStyle: DisplayStyle;
  DisplayStyle = DisplayStyle;
  items: Product[];
  loading: boolean;

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.productService.getPopularProducts().subscribe(products => {
      this.items = products;
    });
  }

  viewDetails(itemId: string) {
    this.router.navigate(['/details', itemId]);
  }

  loadMore() {
    this.loading = true;
    this.productService.getPopularProducts().subscribe(products => {
      this.loading = false;
      this.items = this.items.concat(products);
    });
  }

}
