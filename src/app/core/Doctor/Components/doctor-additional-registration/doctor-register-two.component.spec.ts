import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRegisterTwoComponent } from './doctor-register-two.component';

describe('DoctorRegisterTwoComponent', () => {
  let component: DoctorRegisterTwoComponent;
  let fixture: ComponentFixture<DoctorRegisterTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorRegisterTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorRegisterTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
