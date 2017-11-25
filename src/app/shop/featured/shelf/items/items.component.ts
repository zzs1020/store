import { Component, Input, OnInit } from '@angular/core';
import { DisplayStyle } from '../../../../shared/settings/display-style.enum';
import { Router } from '@angular/router';
import { Product } from '../../../../shared/services/product/product';
import { ProductService } from '../../../../shared/services/product/product.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ProductsState } from '../../../../shared/settings/states.interface';
import { Action } from '../../../../shared/settings/action';
import { share } from 'rxjs/operators';

@Component({
  selector: 'my-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  @Input() displayStyle: DisplayStyle;
  DisplayStyle = DisplayStyle;
  loading: boolean; // loading just for a specific part because don't want to freeze UI
  items$: Observable<Product[]>;

  constructor(private router: Router, private productService: ProductService, private store: Store<ProductsState>) {
  }

  ngOnInit() {
    this.items$ = this.store.select('products').pipe(share()); // async won't subscribe multiple times with share
    this.loadMore();
  }

  loadMore() {
    this.loading = true;
    this.productService.getPopularProducts().subscribe((action: Action<Product[]>) => {
      this.store.dispatch(action);
      this.loading = false;
    });
  }

  viewDetails(itemId: string) {
    this.router.navigate(['/details', itemId]);
  }

}
