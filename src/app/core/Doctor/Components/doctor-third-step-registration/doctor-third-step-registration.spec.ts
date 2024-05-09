import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRegisterThreeComponent } from './doctor-third-step-registration.component';

describe('DoctorRegisterThreeComponent', () => {
  let component: DoctorRegisterThreeComponent;
  let fixture: ComponentFixture<DoctorRegisterThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorRegisterThreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorRegisterThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
