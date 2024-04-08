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

@Component({
  selector: 'app-doctor-register-3',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,MatFormFieldModule,ErrorComponentComponent],
  templateUrl: './doctor-register-3.component.html',
  styleUrl: './doctor-register-3.component.css'
})
export class DoctorRegister3Component {
  @Output() formValidityChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  consultationForm!: FormGroup;
  profileImage: string | ArrayBuffer | null = null;
  constructor(private fb: FormBuilder,private dialog: MatDialog,private store:Store<AppState>) { }

  ngOnInit(): void {
    this.consultationForm = this.fb.group({
      consultationFee: [0, [Validators.required, Validators.min(0)]],
      availability: this.fb.array([
        this.createAvailabilityFormGroup()
      ]),
      profilePic: ['', [Validators.required]],
      bio: ['', [Validators.required, Validators.minLength(20)]],
      typesOfConsultation: this.fb.array([
        this.fb.control(false), // video
        this.fb.control(false), // chat
        this.fb.control(false)  // clinic
      ], this.validateTypesOfConsultation),
      maxPatientsPerDay: [10, [Validators.required, Validators.min(0),Validators.max(13)]],
    });
    this.consultationForm.valueChanges.subscribe(()=>{
      this.formValidityChange.emit(this.consultationForm.valid);
    })
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
    if(availabilityArray.length === 5){
      this.openDialog(); 
      return;
    } else{
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

  get typesOfConsultation(): FormArray {
    return this.consultationForm.get('typesOfConsultation') as FormArray;
  }


  previewImage(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.consultationForm.get('profilePic')?.setValue(file);
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

   
onSubmit(): Promise<void> {
  console.log("form tyring to submit");
  return new Promise((resolve, reject) => {
    if (this.consultationForm.valid) {
      console.log('////////////////+',this.consultationForm.value);
     
      resolve( this.store.dispatch(registerAdditionalRequest({doctorData:this.consultationForm.value})))
    } else {
      reject(new Error("Form validation failed")); // Reject the promise if form validation fails
    }
  });
}

}
