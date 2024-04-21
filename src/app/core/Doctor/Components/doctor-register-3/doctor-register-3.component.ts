import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { validateImageFileType } from '../../../../shared/validators/imageValidator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponentComponent } from '../../../../shared/Components/error-component/error-component.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../Services/Auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/GlobalStore/app.state';
import { registerAdditionalRequest } from '../../../../store/Doctor/doctor.action';
import { FormValidator } from '../../../../shared/validators/FromValidators';

@Component({
  selector: 'app-doctor-register-3',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,MatFormFieldModule,ErrorComponentComponent],
  templateUrl: './doctor-register-3.component.html',
  styleUrl: './doctor-register-3.component.css'
})
export class DoctorRegister3Component {
  @Output() formValidityChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() isLoading = new EventEmitter<boolean>(false);
  consultationForm!: FormGroup;
  profileImage: string | ArrayBuffer | null = null;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private store: Store<AppState>,
    private doctorAuthService: AuthService
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
      availability: this.fb.array([
        this.createAvailabilityFormGroup()
      ]),
      profilePic: ['', [Validators.required, Validators.email]],
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
      const type = isChecked ? this.typesOfConsultation.at(index)?.get('type')?.value : '';
      const feeControl = this.consultationForm.get('consultationFee')?.get(type);
     if (isChecked && feeControl) {
        feeControl.enable();
      } else if (!isChecked && feeControl) {
        feeControl.disable();
      }
    });
  }

  get typesOfConsultation(): FormArray {
    return this.consultationForm.get('typesOfConsultation') as FormArray;
  }

  get consultationFeeControl(): FormArray {
    return this.consultationForm.get('consultationFee') as FormArray;
  }

  createAvailabilityFormGroup(): FormGroup {
    return this.fb.group({
      dayOfWeek: ['', [Validators.required, Validators.pattern(/^(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)$/)]],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required]
    });
  }
  get availabilityControls(): FormArray {
    return this.consultationForm.get('availability') as FormArray;
  }

  validateTypesOfConsultation(controls: AbstractControl): ValidationErrors | null {
    const selectedTypes = controls.value.filter((isChecked: boolean) => isChecked);
    return selectedTypes.length > 0 ? null : { required: true };
  }

  
  addAvailability(): void {
    const availabilityArray = this.consultationForm.get('availability') as FormArray;
    if (availabilityArray.length === 5) {
      this.openDialog();
    } else {
      availabilityArray.push(this.createAvailabilityFormGroup());
    }
  }

  removeAvailability(index: number): void {
    const availabilityArray = this.consultationForm.get('availability') as FormArray;
    availabilityArray.removeAt(index);
  }

  get profilePicControl() {
    return this.consultationForm.get('profilePic');
  }

  get bioControl() {
    return this.consultationForm.get('bio');
  }


  previewImage(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.consultationForm.patchValue({
        profilePic: file
      });
      const reader: FileReader = new FileReader();  
      reader.onload = (e: ProgressEvent<FileReader>) => {  // Narrow event type
        this.profileImage = e.target?.result || null;  // Use optional chaining
      };
      reader.readAsDataURL(file);
    }
  }
  

  openDialog(): void {
    const dialogRef = this.dialog.open(ErrorComponentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

   
  async onSubmit(): Promise<any> {
    console.log("form trying to submit");
    try {
      if (this.consultationForm.valid) {
        console.log('////////////////+', this.consultationForm.value);
        this.isLoading.emit(true);
        const response = await this.doctorAuthService.registerAdditional(this.consultationForm.value).toPromise();
        this.isLoading.emit(false);
        return response;
      } else {
        
        throw new Error('Form validation failed');
      }
    } catch (error) {
      this.isLoading.emit(false);
      console.error('An error occurred while submitting data or form validation failed:', error);
      throw error;
    }
  }
  

}
