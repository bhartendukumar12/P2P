import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowerNavigationComponent } from './borrower-navigation.component';

describe('BorrowerNavigationComponent', () => {
  let component: BorrowerNavigationComponent;
  let fixture: ComponentFixture<BorrowerNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowerNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowerNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
