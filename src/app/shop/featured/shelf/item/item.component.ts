import { Component, Input, OnInit } from '@angular/core';
import { DisplayStyle } from '../../../../shared/enums/display-style.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'my-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() displayStyle: DisplayStyle;
  DisplayStyle = DisplayStyle;
  items = [
    {id: '13534535', name: '可乐', price: 2.99, img: 'assets/icons/soda.svg'},
    {id: '53453332', name: '剃须刀', price: 20.99, img: ''},
    {id: '64544543', name: '大米', price: 2.99, img: null}];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewDetails(itemId: string) {
    this.router.navigate(['/details', itemId]);
  }

}
