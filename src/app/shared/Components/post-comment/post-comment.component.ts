import { Component, OnInit ,Input,EventEmitter,Output,Inject } from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import { Post } from '../../../store/sharedStore/Feed-Store/post.model';
import { PostCarouselComponent } from '../post-carousel/post-carousel.component';
import { FormsModule } from '@angular/forms';
import { AppState } from '../../../store/GlobalStore/app.state';
import { Store } from '@ngrx/store';
import {  MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { commentOnPost } from '../../../store/sharedStore/Feed-Store/post.action';
import { FeedService } from '../../Services/feed.service';
import { ToastrService } from 'ngx-toastr';
import { EditPostComponent } from '../../../core/Doctor/Components/Doctor-Feed/edit-post/edit-post.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TimeDiffPipe } from '../../Pipes/time-diff.pipe';
@Component({
  selector: 'app-postComment',
  standalone:true,
  imports:[CommonModule,PostCarouselComponent,FormsModule,TimeDiffPipe,EditPostComponent],
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {
//  @Input() ishidden:boolean=false;
//  @Input() userType!:string;
 postData!:any;
 isLoading:boolean=false;
 replyAuthor:string='';
 commentText: string = ''; 
 targetComment: any;
 commentRepliesVisibility: { [commentId: string]: boolean } = {};
 isOptionsModalOpen:boolean=false;
 isEditPost:boolean=false
 

  constructor(private store: Store<AppState>,
    private feedService:FeedService,
    private toastr:ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PostCommentComponent>,
    private router: Router,
    private location: Location
  ) { }
 
  ngOnInit() {
    this.loadPost()
    console.log("Comment Component ",this.data.postId,this.postData);
   
  }
  loadPost(){
    this.feedService.getPostById(this.data.postId).subscribe(
      (res:any)=>{
        console.log(res.data);
        this.postData=res.data
      },
      (err)=>{
        console.error(err);
        this.toastr.error(err)
      }
    )
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
    this.feedService.replyToComment(this.postData.post._id as string, comment._id, replyText).subscribe({
      next:(res:any)=>{
        this.isLoading=false;
        console.log(res);
        
        console.log( comment);
        this.postData.post.comments.find((c: any) => c._id.toString() === comment._id.toString())!['replies'].push(res.data)
      },
      error:(err)=>{
        this.isLoading=false;
        this.toastr.error(err)
      }})
  }

  postNewComment(commentText: string): void {
    if (commentText.trim() !== '' && this.postData.post._id) {
      console.log(commentText);
      this.isLoading=true;
      this.feedService.commentOnPost(this.postData.post._id as string, commentText.trim()).subscribe({
       next:(res:any)=>{
          this.isLoading=false;
          console.log(res);
          this.postData.post.comments.push(res.data);
        },
      error:(err)=>{
          this.isLoading=false;
          this.toastr.error(err)
        }
    })
    }
  }

 
  replyToComment(comment: any) {
  this.targetComment = comment;
  this.commentText = `@${comment.userId.firstName} `
  }

  closeModal(){
    
    this.dialogRef.close();
    const currentUrl = this.location.path();
    if (currentUrl.includes('/doctor/feed')) {
      this.router.navigate(['/doctor/feed']);
    } else if(currentUrl.includes('/doctor/feed/my-feed')){
      this.router.navigate(['/doctor/feed/my-feed']);
    }else{
      this.router.navigate(['/']);
    }
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
    this.postData.post.title = updatedData.title;
    this.postData.post.content = updatedData.content;
    this.postData.post.tags = updatedData.tags;
  
  }

  deleteItem() {
    console.log('Delete item');
    this.isLoading=true;
    this.feedService.deletePost(this.postData.post._id).subscribe(
      (res)=>{
        this.isLoading=false;
        this.closeModal()
      },
      (err)=>{
        this.isLoading=false;
        this.toastr.error(err)
      }
    )
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
