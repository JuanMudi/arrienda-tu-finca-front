import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyPicturesComponent } from './property-pictures.component';

describe('PropertyPicturesComponent', () => {
  let component: PropertyPicturesComponent;
  let fixture: ComponentFixture<PropertyPicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyPicturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropertyPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
