import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateLandlordComponent } from './rate-landlord.component';

describe('RateLandlordComponent', () => {
  let component: RateLandlordComponent;
  let fixture: ComponentFixture<RateLandlordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RateLandlordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RateLandlordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
