import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualifyTenantComponent } from './qualify-tenant.component';

describe('QualifyTenantComponent', () => {
  let component: QualifyTenantComponent;
  let fixture: ComponentFixture<QualifyTenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualifyTenantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QualifyTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
