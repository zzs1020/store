import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlahComponent } from './blah.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BlahComponent', () => {
  let component: BlahComponent;
  let fixture: ComponentFixture<BlahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NgbModule],
      declarations: [ BlahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
