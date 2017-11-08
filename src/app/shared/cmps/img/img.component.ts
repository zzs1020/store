import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {
  @Input() src: string;
  @Input() percent: number;

  constructor() { }

  ngOnInit() {
  }

}
