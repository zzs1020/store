import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedComponent } from './featured.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('FeaturedComponent', () => {
  let component: FeaturedComponent;
  let fixture: ComponentFixture<FeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ FeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
