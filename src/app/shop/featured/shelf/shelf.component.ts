import { Component, Input, OnInit } from '@angular/core';
import { DisplayStyle } from '../../../shared/settings/display-style.enum';

@Component({
  selector: 'my-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss']
})
export class ShelfComponent implements OnInit {
  @Input() title: string;
  @Input() displayStyle: DisplayStyle;

  constructor() { }

  ngOnInit() {
  }

}
