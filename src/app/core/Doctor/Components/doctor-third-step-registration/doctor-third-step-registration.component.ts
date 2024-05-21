import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../Services/auth-service/auth.service'; 
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-doctor-third-step-registration',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,MatFormFieldModule],
  templateUrl: './doctor-third-step-registration.component.html',
  styleUrl: './doctor-third-step-registration.component.css'
})
export class DoctorRegisterThreeComponent {
  @Output() formValidityChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() isLoading = new EventEmitter<boolean>(false);
  selectedFile: File | null = null;
  consultationForm!: FormGroup;
  profileImage: string | ArrayBuffer | null = null;

  constructor(
    private fb: FormBuilder,
    private doctorAuthService: AuthService,
    private toastr:ToastrService
  ) { }

  consultationFees = {
    video: 0,
    chat: 0,
    clinic: 0
  };

  ngOnInit(): void {
    this.consultationForm = this.fb.group({
      typesOfConsultation: this.fb.array([
        this.createConsultationTypeFormGroup('video'), // video
        this.createConsultationTypeFormGroup('chat'), // chat
        this.createConsultationTypeFormGroup('clinic') // clinic
      ], this.validateTypesOfConsultation),
      consultationFee: this.fb.array([
        this.createConsultationFeeFormGroup('video'), // video
        this.createConsultationFeeFormGroup('chat'), // chat
        this.createConsultationFeeFormGroup('clinic') // clinic
      ]),
      // availability: this.fb.array([
      //   this.createAvailabilityFormGroup()
      // ]),
      bio: ['', [Validators.required, Validators.minLength(20)]],
      maxPatientsPerDay: [10, [Validators.required, Validators.min(0), Validators.max(13)]],
    });

    this.consultationForm.valueChanges.subscribe(() => {
      this.formValidityChange.emit(this.consultationForm.valid);
    });
  }


  createConsultationTypeFormGroup(type: string): FormGroup {
    return this.fb.group({
      type: [type]
    });
  }

  createConsultationFeeFormGroup(type: string): FormGroup {
    return this.fb.group({
      type: [type],
      fee: [0, [Validators.required, Validators.min(0)]]
    });
  }
  updateConsultationFees(value: boolean[]): void {
    value.forEach((isChecked, index) => {
      const type = this.typesOfConsultation.at(index)?.get('type')?.value;
      const feeControl = this.consultationForm.get('consultationFee')?.get(type);
      if (feeControl) {
        if (isChecked) {
          feeControl.enable();
        } else {
          feeControl.disable();
        }
      }
    });
  }
  

  get typesOfConsultation(): FormArray {
    return this.consultationForm.get('typesOfConsultation') as FormArray;
  }

  get consultationFeeControl(): FormArray {
    return this.consultationForm.get('consultationFee') as FormArray;
  }

  updateFee(index: number, event:any) {
    const feeControl = this.consultationFeeControl.at(index).get('fee');
    if (feeControl) {
      feeControl.setValue(event.value);
    }
  }
  


  validateTypesOfConsultation(controls: AbstractControl): ValidationErrors | null {
    const selectedTypes = controls.value.filter((isChecked: boolean) => isChecked);
    return selectedTypes.length > 0 ? null : { required: true };
  }

  
 
  get profilePicControl() {
    return this.consultationForm.get('profilePic');
  }

  get bioControl() {
    return this.consultationForm.get('bio');
  }


 previewImage(event: any): void {
  const file: File = event.target.files[0];
  if (file) {
    if (!file.type.startsWith('image/')) {
      console.error('Invalid file type. Please select an image file.');
      return;
    }
    this.selectedFile = file;
    this.uploadImage();
    const reader: FileReader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      this.profileImage = e.target?.result as string; // Casting result to string
    };
    reader.readAsDataURL(file);
  }
}

  async uploadImage(): Promise<void> {
    if (!this.selectedFile) {
      console.error('No file selected!');
      return;
    }

    try {
      const response = await this.doctorAuthService.addProfilePic(this.selectedFile).toPromise();
      console.log('Image uploaded successfully:', response);
    } catch (error) {
      console.error('Error uploading image:', error);
      // Handle error
    }
  }


   
  async onSubmit(): Promise<any> {
  this.logErrors()
    console.log("form trying to submit",JSON.stringify(this.consultationForm.value));
    console.log('////////////////+', this.consultationForm.value);
    try {
      if (this.consultationForm.valid) {
        console.log('////////////////+', this.consultationForm.value);
        this.isLoading.emit(true);
        const response = await this.doctorAuthService.registerAdditional(this.consultationForm.value).toPromise();
        this.isLoading.emit(false);
        return response;
      } else {
        
        this.consultationForm.markAllAsTouched();
        throw new Error('Please check the form for errors')
      }
    } catch (error) {
      this.isLoading.emit(false);
      console.error('An error occurred while submitting data or form validation failed:', error);
      throw error;
    }
  }
  
  logErrors(){
    console.log('Form validity:', this.consultationForm.valid);
console.log('Form errors:', this.consultationForm.errors);

console.log('Types of consultation validity:', this.typesOfConsultation.valid);
console.log('Types of consultation errors:', this.typesOfConsultation.errors);

console.log('Consultation fee validity:', this.consultationForm.get('consultationFee')?.valid);
console.log('Consultation fee errors:', this.consultationForm.get('consultationFee')?.errors);


console.log('Bio validity:', this.bioControl?.valid);
console.log('Bio errors:', this.bioControl?.errors);

console.log('Max patients per day validity:', this.consultationForm.get('maxPatientsPerDay')?.valid);
console.log('Max patients per day errors:', this.consultationForm.get('maxPatientsPerDay')?.errors);

  }

}
