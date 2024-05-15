import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccdetailsComponent } from './accdetails.component';

describe('AccdetailsComponent', () => {
  let component: AccdetailsComponent;
  let fixture: ComponentFixture<AccdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccdetailsComponent]
    });
    fixture = TestBed.createComponent(AccdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
