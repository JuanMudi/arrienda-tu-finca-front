import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestRentalComponent } from './request-rental.component';

describe('RequestRentalComponent', () => {
  let component: RequestRentalComponent;
  let fixture: ComponentFixture<RequestRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestRentalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
