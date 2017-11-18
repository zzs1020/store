import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdComponent } from './ad.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AdComponent', () => {
  let component: AdComponent;
  let fixture: ComponentFixture<AdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ AdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
