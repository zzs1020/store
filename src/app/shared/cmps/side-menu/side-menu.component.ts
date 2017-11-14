import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'my-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  animations: [
    trigger('menuInOut', [
      state('in', style({transform: 'translateX(0)'})),
      state('out', style({transform: 'translateX(-100%)'})),
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate(200)
      ]),
      transition(':leave', [
        animate(100, style({transform: 'translateX(-100%)'}))
      ]) // todo: angular bug make this doesn't work
    ])
  ]
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
