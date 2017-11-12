import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import range from 'lodash/range'; // es6 default export syntax cause here doesn't need {}

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
      this.stars = range(Math.floor(this.rate));
    }
  }

}
