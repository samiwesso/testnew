import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCollageComponent } from './product-collage.component';

describe('ProductCollageComponent', () => {
  let component: ProductCollageComponent;
  let fixture: ComponentFixture<ProductCollageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCollageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCollageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
