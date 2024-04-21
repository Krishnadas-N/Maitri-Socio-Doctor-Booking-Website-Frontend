import { Component, OnInit } from '@angular/core';
import { User } from '../../../../../store/User/user.model';
import { AppState } from '../../../../../store/GlobalStore/app.state';
import { Store } from '@ngrx/store';
import { editUserProfile, loadUser } from '../../../../../store/User/user.action';
import { GetCurrentUser, selectUserLoading } from '../../../../../store/User/user.selector';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidator } from '../../../../../shared/validators/FromValidators';
import { UserServiceService } from '../../../Services/user-service.service';

@Component({
  selector: 'app-home-profile',
  templateUrl: './home-profile.component.html',
  styleUrls: ['./home-profile.component.css']
})
export class HomeProfileComponent implements OnInit {
  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;

  isEdit: boolean = false;
  constructor(private store :Store<AppState>,private formBuilder: FormBuilder,private userService:UserServiceService) { }
  UserDetails!:User;
  profileForm!: FormGroup;
  private hasLoadingOccurred = false;
  imageSrc:string=''
  
  loading$ = this.store.select(selectUserLoading);
  ngOnInit() {

    this.loadCurrentUserDetails();
    this.geturrentUserDetails();
    this.initForm();
    this.store.select(selectUserLoading).subscribe((isLoading)=>{
      if (this.hasLoadingOccurred) {
        if (!isLoading) {
          this.isEdit = false;
        }
      } else {
        if (isLoading) {
          this.hasLoadingOccurred = true;
        }
      }
    })
  }
  initForm() {
    this.profileForm = this.formBuilder.group({
      firstName: ['', [Validators.required,Validators.minLength(3), Validators.maxLength(25)]], // Define form controls with validators
      lastName: ['', [Validators.required, Validators.minLength(1),Validators.maxLength(25)]],
      username: ['', [Validators.required, Validators.maxLength(25),Validators.pattern(/^[a-z0-9_]+$/)]],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required,FormValidator.checkSixYaersBefore]
    });
  }

  get f() { return this.profileForm.controls; }
  
  loadCurrentUserDetails(){
    this.store.dispatch(loadUser());
  }
  geturrentUserDetails(){
    this.store.select(GetCurrentUser).subscribe((user)=>{
      if (user) { // Check if user is not null
        this.UserDetails = user;
        if(user.profilePic){
          this.imageSrc=user.profilePic;
        }
        
        this.setFormValues();
      }
    })
  }
  ClickToEdit() {
    this.isEdit = !this.isEdit; // Toggle the value of isEdit
  }
  setFormValues() {
    this.profileForm.patchValue({
      firstName: this.UserDetails.firstName,
      lastName: this.UserDetails.lastName,
      username: this.UserDetails.username,
      dateOfBirth: this.UserDetails.dateOfBirth,
      gender: this.UserDetails.gender
    });
  }
 onSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value); // Example: Log form values
      this.store.dispatch(editUserProfile({user:this.profileForm.value}))
    } else {
      this.profileForm.markAllAsTouched();
    }
  }

  onImageSelected(file: any) {
    console.log('Selected image:', file);
    if(file){
      this.ChangeProfileImage(file);
    }
    // Assuming you have a method to handle the upload
    // this.uploadProfilePicture(file);
  }

  ChangeProfileImage(imageFile: File) {
    const fd = new FormData();
    fd.append("profilePic", imageFile, imageFile.name);
    this.userService.changeProfilePic(fd).subscribe(
      (res)=>{
        this.imageSrc=res.data
      },
      (error)=>{
        alert(error)
      }
    )
  }

  changePassword() {
    this.userService.changePassword().subscribe(
      (res) => {
        alert("Password reset link sent successfully.");
      },
      (error) => {
        console.error("Error occurred while sending password reset link:", error);
      }
    );
  }

}
