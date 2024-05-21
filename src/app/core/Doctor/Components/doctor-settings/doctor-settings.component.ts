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
@Component({
  selector: 'app-doctor-settings',
  standalone:true,
  imports:[ReactiveFormsModule,CommonModule,ProfilePictureComponent,PdfViewerModule,SkeletonModule,ImageModule  ],
  templateUrl: './doctor-settings.component.html',
  styleUrls: ['./doctor-settings.component.css'],
  providers: []
})
export class SettingsPageComponent implements OnInit {

  section:'General'|'Certifications'|'Education'='General'
  profileForm!: FormGroup;
  currentDoctor!:Doctor;
  intialLoading:boolean=false
  isEditGeneralDetails:boolean = false
  constructor(private toastr:ToastrService,private fb: FormBuilder,private store:Store<AppState>,private doctorService:DoctorService) { 
    this.intialLoading=true 
  }

  ngOnInit() {
    this.store.dispatch(loadDoctor());
    this.store.select(GetCurrentdoctor).subscribe((res)=>{
      console.log(res);
      if(res){
        this.currentDoctor=res;
        this.initializeGeneralDetailsForm();
        this.intialLoading = false
      }
     
    })
  }

  intialLizeGeneralDetailsForm(){
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      bio: ['', [Validators.required, Validators.minLength(8)]],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: this.fb.group({ // Create a nested form group for address
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipcode: ['', Validators.required],
        country: ['', Validators.required]
      })
    });
  }

  changeSection(sectionName:'General'|'Certifications'|'Education'){
    this.section  = sectionName
  }

  toggleeditGeneralDetails(){
    this.isEditGeneralDetails = !this.isEditGeneralDetails
  }

  getSpecializationName(specialization: Specialization): string {
    if (typeof specialization === 'object' && specialization !== null) {
      return specialization.name;
    }
    return specialization || 'Not available';
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
      // You can submit the form data to your backend or perform other actions here
    } else {
      // Form is invalid, display error messages
      console.log('Form is invalid');
    }
  }

  
initializeGeneralDetailsForm() {
  // Initialize the form with predefined values
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
onImageSelected(file: any) {
  console.log('Selected image:', file);
  if (file) {
    this.ChangeProfileImage(file);
  }
  // Assuming you have a method to handle the upload
  // this.uploadProfilePicture(file);
}

ChangeProfileImage(imageFile: File) {
  this.doctorService.changeProfilePic(imageFile).subscribe({
    next:(res) => {
      this.currentDoctor.profilePic = res.data;
    },
   error:(error) => {
      this.toastr.error(error)
    }
});
}
}
