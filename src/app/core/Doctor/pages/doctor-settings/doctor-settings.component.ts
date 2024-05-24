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
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DoctorService } from '../../Services/doctor-services/doctor.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
@Component({
  selector: 'app-doctor-settings',
  standalone:true,
  imports:[ReactiveFormsModule,CommonModule,NgxSkeletonLoaderModule, ProfilePictureComponent,PdfViewerModule,SkeletonModule,ImageModule  ],
  templateUrl: './doctor-settings.component.html',
  styleUrls: ['./doctor-settings.component.css'],
  providers: []
})
export class SettingsPageComponent implements OnInit {
  section: 'General' | 'Certifications' | 'Education' = 'General';
  profileForm!: FormGroup;
  currentDoctor!: Doctor;
  initialLoading: boolean = false;
  isEditGeneralDetails: boolean = false;
  imageSrc:string='';
  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private store: Store<AppState>,
    private doctorService: DoctorService
  ) {
    this.initialLoading = true;
  }

  ngOnInit() {
    this.store.dispatch(loadDoctor());
    this.store.select(GetCurrentdoctor).subscribe((res) => {
      console.log(res);
      if (res) {
        this.currentDoctor = res;
        this.imageSrc = this.currentDoctor.profilePic
        this.initializeGeneralDetailsForm();
        this.initialLoading = false;
      }
    });
  }
  toggleeditGeneralDetails() {
    this.isEditGeneralDetails = !this.isEditGeneralDetails;
    this.toggleFormControls(this.isEditGeneralDetails);
  }

  initializeGeneralDetailsForm() {
    this.profileForm = this.fb.group({
      firstName: [this.currentDoctor.firstName || '', Validators.required],
      lastName: [this.currentDoctor.lastName || '', Validators.required],
      bio: [this.currentDoctor.bio || '', [Validators.required, Validators.minLength(8)]],
      gender: [this.currentDoctor.gender || '', Validators.required],
      dateOfBirth: [this.currentDoctor.dateOfBirth || '', Validators.required],
      email: [this.currentDoctor.email || '', [Validators.required, Validators.email]],
      phone: [this.currentDoctor.phone || '', Validators.required],
      address: this.fb.group({
        city: [this.currentDoctor.address?.city || '', Validators.required],
        state: [this.currentDoctor.address?.state || '', Validators.required],
        zipcode: [this.currentDoctor.address?.zipcode || '', Validators.required],
        country: [this.currentDoctor.address?.country || '', Validators.required]
      })
    });
  }

  changeSection(sectionName: 'General' | 'Certifications' | 'Education') {
    this.section = sectionName;
  }

  toggleEditGeneralDetails() {
    this.isEditGeneralDetails = !this.isEditGeneralDetails;
  }

  getSpecializationName(specialization: any): string {
    if (typeof specialization === 'object' && specialization !== null) {
      return specialization.name;
    }
    return specialization || 'Not available';
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
      // Submit the form data to your backend or perform other actions here
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
}
