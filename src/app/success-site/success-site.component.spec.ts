import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessSiteComponent } from './success-site.component';

describe('SuccessSiteComponent', () => {
  let component: SuccessSiteComponent;
  let fixture: ComponentFixture<SuccessSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
