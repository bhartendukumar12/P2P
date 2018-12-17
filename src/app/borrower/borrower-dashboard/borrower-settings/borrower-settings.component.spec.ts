import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowerSettingsComponent } from './borrower-settings.component';

describe('BorrowerSettingsComponent', () => {
  let component: BorrowerSettingsComponent;
  let fixture: ComponentFixture<BorrowerSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowerSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowerSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
