import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import { Post } from '../../../store/sharedStore/Feed-Store/post.model';
import { PostCarouselComponent } from '../post-carousel/post-carousel.component';
import { FormsModule } from '@angular/forms';
import { AppState } from '../../../store/GlobalStore/app.state';
import { Store } from '@ngrx/store';
import { commentOnPost } from '../../../store/sharedStore/Feed-Store/post.action';
import { FeedService } from '../../Services/feed-Service.service';
import { ToastrService } from 'ngx-toastr';
import { TimeDiffPipe } from '../../pipes/time-diff.pipe';
import { EditPostComponent } from '../../../core/Doctor/Components/Doctor-Feed/edit-post/edit-post.component';
@Component({
  selector: 'app-postComment',
  standalone:true,
  imports:[CommonModule,PostCarouselComponent,FormsModule,TimeDiffPipe,EditPostComponent],
  templateUrl: './postComment.component.html',
  styleUrls: ['./postComment.component.css']
})
export class PostCommentComponent implements OnInit {
 @Input() ishidden:boolean=false;
 @Input() post!:any;
 isLoading:boolean=false;
 replyAuthor:string='';
 commentText: string = ''; 
 targetComment: any;
 commentRepliesVisibility: { [commentId: string]: boolean } = {};
 isOptionsModalOpen:boolean=false;
 isEditPost:boolean=false

  constructor(private store: Store<AppState>,private feedService:FeedService,private toastr:ToastrService) { }
 
  ngOnInit() {
    console.log("Comment Component ",this.post)
  }
  postComment() {
    if (this.targetComment && this.hasMention(this.commentText)) {
      this.replyToTargetComment(this.targetComment, this.commentText);
    } else {
      this.postNewComment(this.commentText);
    }
    this.commentText = '';
    this.targetComment = null;
  }

  replyToTargetComment(comment: any, replyText: string): void {

    this.isLoading = true;
    replyText = this.removeMention(replyText);
    console.log(replyText);
    this.feedService.replyToComment(this.post._id as string, comment._id, replyText).subscribe(
      (res:any)=>{
        this.isLoading=false;
        console.log(res);
        
        console.log( comment);
        this.post.comments.find((c: any) => c._id.toString() === comment._id.toString())!['replies'].push(res.data)
      },
      (err)=>{
        this.isLoading=false;
        this.toastr.error(err)
      })
  }

  postNewComment(commentText: string): void {
    if (commentText.trim() !== '' && this.post._id) {
      console.log(commentText);
      this.isLoading=true;
      this.feedService.commentOnPost(this.post._id as string, commentText.trim()).subscribe(
        (res:any)=>{
          this.isLoading=false;
          console.log(res);
          this.post.comments.push(res.data);
        },
        (err)=>{
          this.isLoading=false;
          this.toastr.error(err)
        }
      )
    }
  }

 
  replyToComment(comment: any) {
  this.targetComment = comment;
  this.commentText = `@${comment.userId.firstName} `
  }

  closeModal(){
    this.ishidden = false
  }

  removeMention(text: string): string {
    return text.replace(/@\w+\s?/, '');
  }
  hasMention(text: string): boolean {
    return /@\w+/.test(text);
  }

  toggleRepliesVisibility(comment: any): void {
    // If the comment ID is not in the visibility object, initialize it as true (visible)
    if (!(comment._id in this.commentRepliesVisibility)) {
      this.commentRepliesVisibility[comment._id] = true;
    } else {
      // Toggle the visibility
      this.commentRepliesVisibility[comment._id] = !this.commentRepliesVisibility[comment._id];
    }
  }

  openOptions(){
    this.isOptionsModalOpen=!this.isOptionsModalOpen
  }

  updatePost(updatedData:any){
    this.post.title = updatedData.title;
    this.post.content = updatedData.content;
    this.post.tags = updatedData.tags;
  
  }

  deleteItem() {
    console.log('Delete item');
  }

  editItem() {
    console.log('Edit item');
    this.isEditPost=true
  }

  archiveItem() {
    // Add your archive functionality here
    console.log('Archive item');
  }

  closeEditDialog(event:any){
    this.isEditPost=false
  }
}
