import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'my-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @Output() closed: EventEmitter<boolean>;

  constructor() {
    this.closed = new EventEmitter();
  }

  ngOnInit() {
  }

  closeMenu() {
    this.closed.emit(true);
  }
}
