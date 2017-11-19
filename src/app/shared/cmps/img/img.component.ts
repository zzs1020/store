import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {
  @Input() src: string;
  @Input() percent: string = '100%';
  @Input() rect: boolean; // used for ad

  constructor() { }

  ngOnInit() {
  }

  // catch when bad resource
  onError() {
    if (this.rect) {
      this.src = 'assets/icons/404-2.svg';
    } else {
      this.src = 'assets/icons/magnifying_glass.svg';
    }
  }

}
