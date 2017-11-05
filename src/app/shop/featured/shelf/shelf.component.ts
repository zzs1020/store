import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss']
})
export class ShelfComponent implements OnInit {
  public title: string = 'h';

  constructor() { }

  ngOnInit() {
  }

}
