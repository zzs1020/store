import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllComponent } from './all.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('AllComponent', () => {
  let component: AllComponent;
  let fixture: ComponentFixture<AllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgbModule],
      declarations: [ AllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
