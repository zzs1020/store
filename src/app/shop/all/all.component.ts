import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig, NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'my-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
  providers: [NgbPaginationConfig, NgbDropdownConfig]
})
export class AllComponent implements OnInit {
  currentPage: number;
  menu = [
    {value: 'low-high', desp: '价格:由低到高'},
    {value: 'high-low', desp: '价格:由高到低'},
    {value: 'popular', desp: '人气'},
    {value: 'rating', desp: '评分'},
    {value: 'new', desp: '上架时间'}];
  selected: any = {};

  constructor(private config: NgbPaginationConfig) {
    this.config.maxSize = 5; // todo: doesn't work because ngb bug
    this.config.boundaryLinks = true;
    this.config.rotate = true;
  }

  ngOnInit() {
  }

  onSelect(type) {
    this.selected = type;
  }
}
