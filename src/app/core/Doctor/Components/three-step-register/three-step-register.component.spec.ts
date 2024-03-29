import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeStepRegisterComponent } from './three-step-register.component';

describe('ThreeStepRegisterComponent', () => {
  let component: ThreeStepRegisterComponent;
  let fixture: ComponentFixture<ThreeStepRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeStepRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThreeStepRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
