import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqLendersComponent } from './faq-lenders.component';

describe('FaqLendersComponent', () => {
  let component: FaqLendersComponent;
  let fixture: ComponentFixture<FaqLendersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqLendersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqLendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
