import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowerReferalComponent } from './borrower-referal.component';

describe('BorrowerReferalComponent', () => {
  let component: BorrowerReferalComponent;
  let fixture: ComponentFixture<BorrowerReferalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowerReferalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowerReferalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
