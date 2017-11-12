import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { ProductService } from '../../shared/services/product/product.service';
import { Observable } from 'rxjs/Observable';
import { ProductDetails } from '../../shared/services/product/product-details';

@Component({
  selector: 'my-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements OnInit {
  item$: Observable<ProductDetails>;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.item$ = this.route.paramMap
      .switchMap(params => this.productService.getProductDetails(params.get('id')))
      .share(); // 1 api call
  }

}
