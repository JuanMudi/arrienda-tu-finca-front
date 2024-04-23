import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualifyPropertyComponent } from './qualify-property.component';

describe('QualifyPropertyComponent', () => {
  let component: QualifyPropertyComponent;
  let fixture: ComponentFixture<QualifyPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualifyPropertyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QualifyPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
