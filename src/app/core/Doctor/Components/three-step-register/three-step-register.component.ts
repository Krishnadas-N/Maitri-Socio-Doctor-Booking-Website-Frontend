import { Component, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ProgressiveBarComponent } from '../../../../shared/Components/progressive-bar/progressive-bar.component';
import { CommonModule } from '@angular/common';
import { DoctorRegister2Component } from '../doctor-register-2/doctor-register-2.component';
import { DoctorRegister3Component } from '../doctor-register-3/doctor-register-3.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/GlobalStore/app.state';
import { selectdoctorLoading } from '../../../../store/Doctor/doctor.selectors';
import { Subscription } from 'rxjs';
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
export class ThreeStepRegisterComponent  implements OnDestroy {

  @ViewChild(DoctorRegister2Component) childComponentOne!: DoctorRegister2Component;
  @ViewChild(DoctorRegister3Component) childComponentTwo!:DoctorRegister3Component;
  isFormValid = false;
  successMessage: string | undefined;
  isLoading:boolean=false
  loadingSubscription!: Subscription | undefined;

  constructor(private store: Store<AppState>) {
    this.loadingSubscription = this.store.select(selectdoctorLoading).subscribe(isLoading => {
      this.isLoading = isLoading;
    });
  }

  handleFormValidityChange(isValid: boolean): void {
    this.isFormValid = isValid;
    console.log(this.isFormValid)
  }
  currentStep: number = 1;
  stepComponents: any[] = [DoctorRegister2Component, DoctorRegister3Component];
  
  prevStep() {
    console.log(this.currentStep)
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

   nextStep() {
    if (this.currentStep === 1) {
         this.childComponentOne.onSubmit();
    }
    if(this.currentStep === 2){
         this.childComponentTwo.onSubmit();
    }
    if (this.currentStep < 2 && !this.isLoading) {
      this.currentStep++;
    }
  }
  Complete(){
    if (this.currentStep === 2) { 
      this.currentStep=3;
    }
  }
  getCurrentComponent(): any {
    return this.stepComponents[this.currentStep - 1]; // Get the component for the current step
  }
  isLastStep() {
    return this.currentStep > 2; 
  }

  getIsLoading(){
    this.store.select(selectdoctorLoading).subscribe((isLoading)=>{
      this.isLoading = isLoading
    })
  }
  
  ngOnDestroy(): void {
    if (this.loadingSubscription) {
      this.loadingSubscription.unsubscribe();
    }
  }
}
