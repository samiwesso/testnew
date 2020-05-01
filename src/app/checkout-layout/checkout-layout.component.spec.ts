import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutLayoutComponent } from './checkout-layout.component';

describe('CheckoutLayoutComponent', () => {
  let component: CheckoutLayoutComponent;
  let fixture: ComponentFixture<CheckoutLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
