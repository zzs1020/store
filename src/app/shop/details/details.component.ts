import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, share } from 'rxjs/operators';
import { ProductService } from '../../shared/services/product/product.service';
import { Observable } from 'rxjs/Observable';
import { ProductDetails } from '../../shared/services/product/product-details';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'my-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgbRatingConfig]
})
export class DetailsComponent implements OnInit {
  item$: Observable<ProductDetails>;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.item$ = this.route.paramMap
      .pipe(
        switchMap(params => this.productService.getProductDetails(params.get('id'))),
        share() // 1 api call
      );
  }

}
