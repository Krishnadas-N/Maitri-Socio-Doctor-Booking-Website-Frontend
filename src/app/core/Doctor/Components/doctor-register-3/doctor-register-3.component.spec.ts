import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRegister3Component } from './doctor-register-3.component';

describe('DoctorRegister3Component', () => {
  let component: DoctorRegister3Component;
  let fixture: ComponentFixture<DoctorRegister3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorRegister3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorRegister3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
