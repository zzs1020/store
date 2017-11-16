import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'my-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss'],
  providers: [NgbCarouselConfig]
})
export class AdComponent implements OnInit {
  @ViewChild(NgbCarousel) carousel;
  ads = ['assets/imgs/ad1.jpg', 'assets/imgs/ad2.jpg', 'assets/imgs/ad3.jpg'];

  constructor(private config: NgbCarouselConfig) {
    this.config.interval = 3000; // todo: wait for ngbootstrap bug fix, doesn't work
  }

  ngOnInit() {
  }

  swipe(e) {
    if (e === 'swiperight') {
      this.carousel.prev();
    } else {
      this.carousel.next();
    }
  }

}
