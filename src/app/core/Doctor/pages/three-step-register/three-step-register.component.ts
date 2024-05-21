import { Component, ViewChild, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ProgressiveBarComponent } from '../../../../shared/Components/progressive-bar/progressive-bar.component';
import { CommonModule } from '@angular/common';
import { DoctorRegisterTwoComponent } from '../../Components/doctor-additional-registration/doctor-register-two.component'; 
import { trigger, transition, style, animate } from '@angular/animations';
import { Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/GlobalStore/app.state';
import { GetCurrentdoctor, selectdoctorLoading } from '../../../../store/Doctor/doctor.selectors';
import { Subscription } from 'rxjs';
import { loadDoctor } from '../../../../store/Doctor/doctor.action';
import { AuthService } from '../../../../shared/Services/auth-service/auth.service'; 
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { DoctorRegisterThreeComponent } from '../../Components/doctor-third-step-registration/doctor-third-step-registration.component'; 

@Component({
  selector: 'app-three-step-register',
  standalone: true,
  imports: [ProgressiveBarComponent,
    CommonModule,DoctorRegisterTwoComponent,DoctorRegisterThreeComponent,RouterLink,
    ToastModule
  ],
  templateUrl: './three-step-register.component.html',
  styleUrl: './three-step-register.component.css',
  providers:[MessageService],
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
export class ThreeStepRegisterComponent  implements OnInit,OnDestroy {

  @ViewChild(DoctorRegisterTwoComponent) childComponentOne!: DoctorRegisterTwoComponent;
  @ViewChild(DoctorRegisterThreeComponent) childComponentTwo!:DoctorRegisterThreeComponent;
  isFormValid = false;
  successMessage: string | undefined;
  isLoading:boolean=false
  loadingSubscription!: Subscription | undefined;
  waitloader:boolean=false;
  docSubscription: Subscription | undefined;

  constructor(private store: Store<AppState>,
    private router: Router,
    private AuthService:AuthService,
    private messageService: MessageService
   ) {}

  handleFormValidityChange(isValid: boolean): void {
    this.isFormValid = isValid;
    console.log(this.isFormValid)
  }
  currentStep: number = 1;
  stepComponents: any[] = [DoctorRegisterTwoComponent, DoctorRegisterThreeComponent];
  
  prevStep() {
    console.log(this.currentStep)
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  async nextStep() {
    if (this.currentStep === 1 && this.isFormValid) {
      try {
        await this.childComponentOne.onSubmit();
        this.currentStep++;
    } catch (error) {
        console.error('Error during form submission:', error);
    }
    }
    // if(this.currentStep === 2){
    
    // }
    // if (this.currentStep < 2 && !this.isLoading) {
    //   this.currentStep++;
    // }
  }
  async Complete(){
    if (this.currentStep === 2) { 
      try {
      this.waitloader = true; 
     await this.childComponentTwo.onSubmit();
     this.currentStep++
      } catch (error) {
        this.messageService.add({ severity: 'error', summary: 'please Fill all fields', detail: 'Process incomplete', life: 3000 });
    }
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
  ngOnInit(): void {
      this.store.dispatch(loadDoctor());
      this.docSubscription = this.store.select(GetCurrentdoctor).subscribe(
        (doc: any) => {
          console.log(doc);
          const registrationStepsCompleted = Number(doc.registrationStepsCompleted);
          if (registrationStepsCompleted === 1) {
            this.currentStep = 1;
          } else if (registrationStepsCompleted === 2 ) {
            this.currentStep = 2;
          } 
          else if (registrationStepsCompleted === 3 && !doc.isProfileComplete) {
            this.currentStep = 3;
          } else {
            this.handleUnauthenticated();
          }
      })
  }
  ngOnDestroy(): void {
    if (this.loadingSubscription) {
      this.loadingSubscription.unsubscribe();
    }
     if (this.docSubscription) {
      this.docSubscription.unsubscribe();
    }
  }
  handleUnauthenticated(): void {
    if (this.AuthService.isAuthenticated()) {
      this.router.navigate(['/doctor']);
    } else {
      this.router.navigate(['/doctor/login']);
    }
  }

}
