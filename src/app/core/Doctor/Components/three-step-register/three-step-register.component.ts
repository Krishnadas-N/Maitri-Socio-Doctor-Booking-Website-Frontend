import { Component, ViewChild, ElementRef } from '@angular/core';
import { ProgressiveBarComponent } from '../../../../shared/Components/progressive-bar/progressive-bar.component';
import { CommonModule } from '@angular/common';
import { DoctorRegister2Component } from '../doctor-register-2/doctor-register-2.component';
import { DoctorRegister3Component } from '../doctor-register-3/doctor-register-3.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-three-step-register',
  standalone: true,
  imports: [ProgressiveBarComponent,CommonModule,DoctorRegister2Component,DoctorRegister3Component,RouterLink],
  templateUrl: './three-step-register.component.html',
  styleUrl: './three-step-register.component.css',
  animations: [
    trigger('slideAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-out', style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class ThreeStepRegisterComponent {
  @ViewChild(DoctorRegister2Component) childComponentOne!: DoctorRegister2Component;
  isFormValid = false;
  successMessage: string | undefined;

  handleFormValidityChange(isValid: boolean): void {
    this.isFormValid = isValid;
  }
  currentStep: number = 1;
  stepComponents: any[] = [DoctorRegister2Component, DoctorRegister3Component];
  constructor() {
  }
  prevStep() {
    console.log(this.currentStep)
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  nextStep() {
    if(this.currentStep===1){
      this.childComponentOne.onSubmit();
    }
    if (this.currentStep < 3) { 
      this.currentStep++;
    }
  }
  Complete(){
    if (this.currentStep === 3) { 
      this.currentStep=4;
    }
  }
  getCurrentComponent(): any {
    return this.stepComponents[this.currentStep - 1]; // Get the component for the current step
  }
  isLastStep() {
    return this.currentStep > 3; 
  }

  submitForm(): void {
    if (this.isFormValid) {
      this.successMessage = 'Form submitted successfully!';
    } else {
      this.successMessage = undefined; // Clear previous success message
    }
  }
}
