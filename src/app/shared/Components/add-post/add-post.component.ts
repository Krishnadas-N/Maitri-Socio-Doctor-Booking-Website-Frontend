import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/GlobalStore/app.state';
import { addPost } from '../../../store/sharedStore/Feed-Store/post.action';
import { selectPostsLoading } from '../../../store/sharedStore/Feed-Store/post.selector';
import { SpinnerComponent } from '../spinner/spinner.component';
import { DomSanitizer } from '@angular/platform-browser';
import { MediaModalComponent } from '../media-modal/media-modal.component';
import { ChipsModule } from 'primeng/chips';
@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [
    CommonModule,
    SpinnerComponent,
    ReactiveFormsModule,
    FormsModule,
    MediaModalComponent,
    ChipsModule,
  ],
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
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
  isModalOpen: boolean = false;
  Imagefilenames: string[] = [];
  videofilenames: string[] = [];
  validationMessages = {
    title: {
      required: 'Title is required.',
      minlength: 'Title must be at least 3 characters long.',
    },
    content: {
      required: 'Content is required.',
      minlength: 'Content must be at least 3 characters long.',
    },
    media: {
      invalidMedia: 'Please upload a valid image or video file.',
    },
    tags: {},
  };

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private sanitizer: DomSanitizer
  ) {
    this.addPostForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      content: ['', [Validators.required, Validators.minLength(3)]],
      media: this.formBuilder.array([]),
      tags: new FormControl<string[]>([]),
    });
  }

  ngOnInit() {
    this.store.select(selectPostsLoading).subscribe((isLoad) => {
      this.isLoading = isLoad;
      if (this.isModalOpen == true && this.isLoading === false) {
        this.isOpen = false;
        this.isModalOpen = false;
      }
    });
  }

  get tags() {
    return this.addPostForm.get('tags') as FormArray;
  }

  splitTags(event: Event): void {
    const inputValue: string = (event.target as HTMLInputElement).value;
    const tagsArray = inputValue.trim().split(' ');
    this.tags.clear(); // Clear existing tags
    tagsArray.forEach((tag) => {
      if (tag !== '') {
        this.tags.push(this.formBuilder.control(tag));
      }
    });
  }

  removeTag(index: number) {
    this.tags.removeAt(index);
  }

  onClose() {
    this.isOpen = false;
  }

  onSubmit() {
    if (this.addPostForm.valid) {
      console.log(this.addPostForm.value);
      this.isModalOpen = true;
      this.store.dispatch(addPost({ post: this.addPostForm.value }));
      this.addPostForm.reset();
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
        if (file.type.startsWith('image')) {
          this.Imagefilenames.push(file.name);
        } else if (file.type.startsWith('video')) {
          this.videofilenames.push(file.name);
        }

        this.addMediaControl(file);
        const reader = new FileReader();
        reader.onload = (e: any) => {
          if (file.type.indexOf('image') > -1) {
            this.imageUrls.push(e.target.result as string);
          } else if (file.type.indexOf('video') > -1) {
            this.videoUrls.push(e.target.result as string);
          }
        };
        reader.readAsDataURL(file);
      }
      console.log(this.videoUrls, this.imageUrls);
      this.showMediaModal = true;
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
    this.showMediaModal = false;
  }

  getFileDisplayName(url: string): string {
    // Extract filename from the URL
    console.log(url);
    const filename = url.split('/').pop() || '';
    return filename;
  }

  removeMedia(index: number): void {
    // Remove media file from the arrays
    if (index >= 0 && index < this.imageUrls.length) {
      this.imageUrls.splice(index, 1);
      this.Imagefilenames.splice(index, 1);
    } else if (
      index >= this.imageUrls.length &&
      index < this.imageUrls.length + this.videoUrls.length
    ) {
      this.videoUrls.splice(index - this.imageUrls.length, 1);
      this.videofilenames.splice(index - this.imageUrls.length, 1);
    }
  }
}
