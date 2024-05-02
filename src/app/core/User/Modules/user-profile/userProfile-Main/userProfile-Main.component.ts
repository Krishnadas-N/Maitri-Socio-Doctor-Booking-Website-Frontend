import { Component, OnInit } from '@angular/core';
import { User } from '../../../../../store/User/user.model';
import { AppState } from '../../../../../store/GlobalStore/app.state';
import { Store } from '@ngrx/store';
import { loadUser } from '../../../../../store/User/user.action';
import { GetCurrentUser } from '../../../../../store/User/user.selector';
import { UserServiceService } from '../../../Services/user-service.service';

@Component({
  selector: 'app-userProfile-Main',
  templateUrl: './userProfile-Main.component.html',
  styleUrls: ['./userProfile-Main.component.css'],
})
export class UserProfileMainComponent implements OnInit {
  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;
  imageSrc: string = '';
  UserDetails!: User;
  loading:boolean=true;
  constructor(
    private store: Store<AppState>,
    private userService: UserServiceService
  ) {}

  ngOnInit() {
    this.loadCurrentUserDetails();
    this.geturrentUserDetails();
  }

  loadCurrentUserDetails() {
    this.store.dispatch(loadUser());
  }
  geturrentUserDetails() {
    this.store.select(GetCurrentUser).subscribe((user) => {
      if (user) {
        // Check if user is not null
        this.UserDetails = user;
        if (user.profilePic) {
          this.imageSrc = user.profilePic;
        }

        // this.setFormValues();
      }
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
    const fd = new FormData();
    fd.append('profilePic', imageFile, imageFile.name);
    this.userService.changeProfilePic(fd).subscribe(
      (res) => {
        this.imageSrc = res.data;
      },
      (error) => {
        alert(error);
      }
    );
  }
}
