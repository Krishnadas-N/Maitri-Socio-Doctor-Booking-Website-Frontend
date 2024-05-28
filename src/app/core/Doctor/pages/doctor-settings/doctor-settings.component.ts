import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfilePictureComponent } from '../../../../shared/Components/profile-picture/profile-picture.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/GlobalStore/app.state';
import { loadDoctor } from '../../../../store/Doctor/doctor.action';
import { GetCurrentdoctor } from '../../../../store/Doctor/doctor.selectors';
import { Doctor, Specialization } from '../../../../store/Doctor/doctor.model';
import { SkeletonModule } from 'primeng/skeleton';
// import { PhotoService } from '@service/photoservice';
import { ImageModule } from 'primeng/image';
import { DoctorService } from '../../Services/doctor-services/doctor.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FormValidator } from '../../../../shared/validators/formValidators';

@Component({
  selector: 'app-doctor-settings',
  standalone:true,
  imports:[ReactiveFormsModule,CommonModule,NgxSkeletonLoaderModule, ProfilePictureComponent,SkeletonModule,ImageModule  ],
  templateUrl: './doctor-settings.component.html',
  styleUrls: ['./doctor-settings.component.css'],
  providers: []
})
export class SettingsPageComponent implements OnInit {
  section: 'General' | 'Certifications' | 'Education' | 'Fee' | 'changePassword'= 'General';
  guidelines = [
    'Arrive 10 minutes before your appointment.',
    'Ensure a stable internet connection for video consultations.',
    'Keep your medical records handy during the consultation.',
    'Maintain privacy and confidentiality during the session.',
    'Be prepared to discuss the patient’s medical history and current symptoms.',
    'Ensure all necessary medical equipment is functioning and accessible.',
    'Respect patient’s time by staying on schedule as much as possible.',
    'Maintain a professional and empathetic demeanor throughout the consultation.',
    'Follow up with patients as required, ensuring they understand their treatment plans.',
    'Document the consultation thoroughly and accurately in the patient’s medical records.',
    'Adhere to all relevant medical guidelines and ethical standards during consultations.'
  ];

  policy = `
    If you cancel your appointment, 20% of the amount will be credited to your account. If we cancel, no amount will be received.
  `;

  isLoading:boolean = false;
  profileForm!: FormGroup;
  currentDoctor!: Doctor;
  initialLoading: boolean = false;
  isEditGeneralDetails: boolean = false;
  imageSrc:string='';
  changePasswordForm: FormGroup;

  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private store: Store<AppState>,
    private doctorService: DoctorService
  ) {
    this.initialLoading = true;
    this.changePasswordForm = this.fb.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit() {
    this.store.dispatch(loadDoctor());
    this.store.select(GetCurrentdoctor).subscribe((res) => {
      console.log(res);
      if (res) {
        this.currentDoctor = res;
        this.imageSrc = this.currentDoctor.profilePic
        this.initializeForm();
        this.patchFormValues()
        this.initialLoading = false;
      }
    });

  }

  passwordMatchValidator(form: FormGroup) {
    const newPasswordControl = form.get('newPassword');
    const confirmPasswordControl = form.get('confirmPassword');

    if (newPasswordControl && confirmPasswordControl) {
      return newPasswordControl.value === confirmPasswordControl.value? null : { mismatch: true };
    }

    return null;
  }
  toggleeditGeneralDetails() {
    this.isEditGeneralDetails = !this.isEditGeneralDetails;
    this.toggleFormControls(this.isEditGeneralDetails);
  }

  initializeForm() {
    this.profileForm = this.fb.group({
      firstName: ['',  [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      lastName: ['',[Validators.required, Validators.maxLength(50)]],
      bio: ['', [Validators.required, Validators.minLength(8)]],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required,FormValidator.checkSixYaersBefore],
      phone: ['',[Validators.required, FormValidator.phoneNumberValidator]],
      address: this.fb.group({
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipcode: ['', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6),
        ]],
        country: ['', Validators.required]
      })
    });
  }

  get f() { return this.profileForm.controls; }


  patchFormValues() {
    if (this.currentDoctor) {
      this.profileForm.patchValue({
        firstName: this.currentDoctor.firstName || '',
        lastName: this.currentDoctor.lastName || '',
        bio: this.currentDoctor.bio || '',
        gender: this.currentDoctor.gender || '',
        dateOfBirth: this.currentDoctor.dateOfBirth || '',
        email: this.currentDoctor.email || '',
        phone: this.currentDoctor.phone || '',
        address: {
          city: this.currentDoctor.address?.city || '',
          state: this.currentDoctor.address?.state || 'N/A',
          zipcode: this.currentDoctor.address?.zipcode || '',
          country: this.currentDoctor.address?.country || ''
        }
      });
    }
console.log( this.profileForm.value)
  }


  changeSection(sectionName: 'General' | 'Certifications' | 'Education' | 'Fee' | 'changePassword') {
    this.section = sectionName;
  }

  toggleEditGeneralDetails() {
    this.isEditGeneralDetails = true;
  }

  getSpecializationName(specialization: any): string {
    if (typeof specialization === 'object' && specialization !== null) {
      return specialization.name;
    }
    return specialization || 'Not available';
  }

  onSubmit() {
    console.log(this.profileForm.value);
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
      // Submit the form data to your backend or perform other actions here;
      this.doctorService.editDoctorDetails(this.profileForm.value).subscribe({
        next:(res)=>{
          this.currentDoctor = res.data;
          this.isEditGeneralDetails  = false;
          this.toastr.success("Doctor Details Edited SuccessFully")
          },
          error:(err)=>{
            this.isEditGeneralDetails  = false;
            this.toastr.error("Error caused while Editing the user")
          }

      })
      this.isEditGeneralDetails  = false;
    } else {
      console.log('Form is invalid');
    }
  }

  onImageSelected(file: any) {
    console.log('Selected image:', file);
    if (file) {
      this.changeProfileImage(file);
    }
  }

  changeProfileImage(imageFile: File) {
    this.doctorService.changeProfilePic(imageFile).subscribe({
      next: (res) => {
        this.imageSrc = res.data;
      },
      error: (error) => {
        this.toastr.error(error);
      }
    });
  }

  toggleFormControls(enable: boolean) {
    if (enable) {
      this.profileForm.enable();
    } else {
      this.profileForm.disable();
    }
  }

  getFileType(certification:string){
    const extension = certification.split('.').pop()?.toLowerCase();
   if(extension){
    if (extension === 'pdf') {
      return 'pdf';
    } else if (['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff'].includes(extension)) {
      return 'image';
    }
  }
    return 'unknown';
  }

changePassword(){
  if (this.changePasswordForm.valid) {
    const { currentPassword, newPassword } = this.changePasswordForm.value;
    console.log('Change Password Form Submitted', { currentPassword, newPassword });
    // Implement your change password logic here
  }
}
}
