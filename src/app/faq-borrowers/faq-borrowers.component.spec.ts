import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqBorrowersComponent } from './faq-borrowers.component';

describe('FaqBorrowersComponent', () => {
  let component: FaqBorrowersComponent;
  let fixture: ComponentFixture<FaqBorrowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqBorrowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqBorrowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
