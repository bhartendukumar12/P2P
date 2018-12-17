import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowerFaqComponent } from './borrower-faq.component';

describe('BorrowerFaqComponent', () => {
  let component: BorrowerFaqComponent;
  let fixture: ComponentFixture<BorrowerFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowerFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowerFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
