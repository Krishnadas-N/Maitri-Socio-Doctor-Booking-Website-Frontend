import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { mediaValidator } from '../../validators/imageValidator';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/GlobalStore/app.state';
import { addPost } from '../../../store/sharedStore/Feed-Store/post.action';
import { selectPostsLoading } from '../../../store/sharedStore/Feed-Store/post.selector';
import { SpinnerComponent } from '../spinner/spinner.component';
import { DomSanitizer } from '@angular/platform-browser';
import { MediaModalComponent } from '../media-modal/media-modal.component';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [CommonModule, SpinnerComponent, ReactiveFormsModule, FormsModule,MediaModalComponent],
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  @Input() isOpen!: boolean;
  isLoading: boolean = false;
  addPostForm!: FormGroup;
  showMediaModal = false;
  mediaUrl: string = '';
  mediaType: string = '';
  imageUrls: string[] = [];
  videoUrls: string[] = [];
  validationMessages = {
    title: {
      required: 'Title is required.',
      minlength: 'Title must be at least 3 characters long.'
    },
    content: {
      required: 'Content is required.',
      minlength: 'Content must be at least 3 characters long.'
    },
    media: {
      invalidMedia: 'Please upload a valid image or video file.'
    },
    tags: {
    }
  };

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private sanitizer: DomSanitizer) { 
    this.addPostForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      content: ['', [Validators.required, Validators.minLength(3)]],
      media: this.formBuilder.array([]),
      tags: ['']
    });
  }

  ngOnInit() {
    this.store.select(selectPostsLoading).subscribe((isLoad) => {
      this.isLoading = isLoad;
    });
  }

  onClose() {
    this.isOpen = false;
  }

  onSubmit() {
    if (this.addPostForm.valid) {
      console.log(this.addPostForm.value);
      this.store.dispatch(addPost({ post: this.addPostForm.value }));
    } else {
      this.addPostForm.markAllAsTouched();
    }
  }



  onFileSelected(event: any) {
    const file = event.target.files[0]; // Get the file

    if (!file) {
      return;
    }

    const files = event.target.files;
    if (files) {
      for (const file of files) {
        this.addMediaControl(file)
        const reader = new FileReader();
        reader.onload = (e: any) => {
          if (file.type.indexOf("image") > -1) {
            this.imageUrls.push(e.target.result as string);
          } else if (file.type.indexOf("video") > -1) {
            this.videoUrls.push(e.target.result as string);
          }
        };
        reader.readAsDataURL(file);
      }
      console.log(this.videoUrls,this.imageUrls);
      this.showMediaModal=true;
    }
  }

  addMediaControl(file: File): void {
    (this.addPostForm.get('media') as FormArray).push(new FormControl(file));
  }

  getErrorMessage(controlName: string, errorName: string) {
    const control = this.addPostForm.get(controlName);
    if (control && control.errors) {
      return control.errors[errorName];
    }
    return null;
  }

  isInvalidMedia(controlName: string) {
    const control = this.addPostForm.get(controlName);
    return control && control.errors && control.errors['invalidMedia'];
  }

  openMediaModal() {
    this.showMediaModal = true;
    // Here you can load the media URL and media type based on your requirements
  }

  closeMediaModal() {
    this.showMediaModal= false;
  }
}