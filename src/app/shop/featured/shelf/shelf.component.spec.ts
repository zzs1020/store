import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfComponent } from './shelf.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ShelfComponent', () => {
  let component: ShelfComponent;
  let fixture: ComponentFixture<ShelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ ShelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
