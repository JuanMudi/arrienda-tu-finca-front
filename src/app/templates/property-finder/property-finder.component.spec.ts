import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyFinderComponent } from './property-finder.component';

describe('PropertyFinderComponent', () => {
  let component: PropertyFinderComponent;
  let fixture: ComponentFixture<PropertyFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyFinderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropertyFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
