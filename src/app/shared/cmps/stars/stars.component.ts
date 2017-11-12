import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'my-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnChanges {
  @Input() rate: number;
  extraHalfStar: boolean;
  stars: [number]; // a dummy collection used for ngFor

  constructor() { }

  // because async get data
  ngOnChanges(changes: SimpleChanges) {
    // only run when input property 'rate' changed
    if (changes['rate']) {
      // if not int, then we need a extra half star
      this.extraHalfStar = this.rate % 1 !== 0;
      this.stars = _.range(Math.floor(this.rate));
    }
  }

}
