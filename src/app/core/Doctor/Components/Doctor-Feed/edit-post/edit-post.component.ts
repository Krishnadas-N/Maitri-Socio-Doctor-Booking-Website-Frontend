import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { PostCarouselComponent } from '../../../../../shared/Components/post-carousel/post-carousel.component';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FeedService } from '../../../../../shared/Services/feed-Service.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-edit-post',
  standalone:true,
  imports:[PostCarouselComponent,DialogModule,CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  @Input() post!: any;
  editPostForm!: FormGroup;
  @Input()visible!: boolean;
  isLoading:boolean=false;
  @Output() updatedPostData=new EventEmitter<any>();
  @Output() closeEditModal=new EventEmitter<boolean>(false);
  constructor(private formBuilder: FormBuilder,private feedService:FeedService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.editPostForm = this.formBuilder.group({
      title: [this.post?.title || '', [Validators.required, Validators.minLength(3)]],
      content: [this.post?.content || '', [Validators.required, Validators.minLength(3)]],
      tags: this.formBuilder.array(this.post?.tags || [])
    });
  }

  get f() {
    return this.editPostForm.controls;
  }

  onUpdateSubmit() {
    if (this.editPostForm.valid) {
      console.log(this.editPostForm.value);
      this.isLoading=true;
      const updatedPost = {
        title: this.editPostForm.value.title,
        content: this.editPostForm.value.content,
        tags: this.convertTagsToArray(this.editPostForm.value.tags)
      };
      console.log('Updated post:', updatedPost);
      this.feedService.editPost(this.post._id,updatedPost).subscribe(
        (res)=>{
         this.closeEditModal.emit(true)
         this.isLoading=false;
          this.updatedPostData.emit(res.data);
        },
        (err)=>{
          this.isLoading=false;
          this.closeEditModal.emit(true)
          this.toastr.error(err)
        }
      )
      // You can now perform further actions like updating the post
    }else{
      this.toastr.error("please fill all fields correctly")
    }
  }

  convertTagsToArray(tagsInput:string | any[]): string[] {
    if (typeof tagsInput === 'string') {
      return tagsInput.split(',').map(tag => tag.trim());
    } else if (Array.isArray(tagsInput)) {
      return tagsInput.map(control => control && control?.value ? control?.value: "");
    } else {
      return [];
    }
  }
}
