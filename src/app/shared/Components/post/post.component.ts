import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Post, PostModel, SavedPost } from '../../../store/sharedStore/Feed-Store/post.model';
import { ImageModule } from 'primeng/image';
import { PostCarouselComponent } from '../post-carousel/post-carousel.component';
import { CommonModule } from '@angular/common';
import { AppState } from '../../../store/GlobalStore/app.state';
import { Store } from '@ngrx/store';
import { loadUser } from '../../../store/User/user.action';
import { GetCurrentUser } from '../../../store/User/user.selector';
import { PostCommentComponent } from '../post-comment/post-comment.component';
import { MatDialog } from '@angular/material/dialog';
import { loadDoctor } from '../../../store/Doctor/doctor.action';
import { FeedService } from '../../Services/feed.service';
@Component({
  selector: 'post-component',
  standalone:true,
  imports:[ImageModule,PostCarouselComponent,CommonModule,PostCommentComponent],
  templateUrl: './post.component.html',

  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit,AfterViewInit {
  @Input() postData!:PostModel;
  @Input() userType!:'Doctor'|'User';
  post!:any;
  isCommentBoxHidden:boolean=false;
  isSavedPost:boolean=false;
  currentUser!:any;
  constructor(private store:Store<AppState>,
    private feedService:FeedService,
    private dialog: MatDialog) { }
  timeDifference!: string;
  isLiked:boolean=true;
  ngOnInit() {
    this.post = this.postData.post;
    console.log("Post data ",this.postData,this.post)
    this.calculateTimeDifference();
    this.loadCurrentUser();
    this.getCurentUser();

  }
  ngAfterViewInit(): void {
  }
  loadCurrentUser(){
      if(this.userType === 'Doctor'){
        this.store.dispatch(loadDoctor())
      }else{
        this.store.dispatch(loadUser())
      }


  }

  getLikedStatus(): boolean {
    console.log(this.currentUser);
    return this.post.likes.some((like:any) => like.userId === this.currentUser._id);
  }

  isUserSavedPost(): boolean {
    const currentUserID = this.currentUser?._id;
    if (!currentUserID) {
        console.error("Current user not available.");
        return false;
    }
    console.log(this.post.savedBy.some((post:SavedPost) => post.userId.toString() === currentUserID.toString() ),'this.post.savedBy.some((post:SavedPost) => post.userId.toString() === currentUserID.toString() )');
    const isSavedByCurrentUser = this.post.savedBy.some((post:SavedPost) => post.userId.toString() === currentUserID.toString() );
    return isSavedByCurrentUser;
}

  getCurentUser(){
    this.store.select(GetCurrentUser).subscribe((data)=>{
      this.currentUser=data;
      console.log(this.currentUser);
      this.isLiked = this.getLikedStatus();
      this.isSavedPost = this.isUserSavedPost()
    })
  }
  calculateTimeDifference(): void {
    const currentTime = new Date();
    const postTime = new Date(this.post.createdAt);
    const differenceInSeconds = Math.floor((currentTime.getTime() - postTime.getTime()) / 1000);

    if (differenceInSeconds < 60) {
      this.timeDifference = `${differenceInSeconds} seconds ago`;
    } else if (differenceInSeconds < 3600) {
      const minutes = Math.floor(differenceInSeconds / 60);
      this.timeDifference = `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (differenceInSeconds < 86400) {
      const hours = Math.floor(differenceInSeconds / 3600);
      this.timeDifference = `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (differenceInSeconds < 604800) {
      const days = Math.floor(differenceInSeconds / 86400);
      this.timeDifference = `${days} day${days > 1 ? 's' : ''} ago`;
    } else {
      this.timeDifference = postTime.toLocaleDateString(); // More than a week, just display the date
    }
  }

  toggleLike(){
    this.feedService.likePost(this.post._id).subscribe({
      next:(res)=>{
        this.isLiked=!this.isLiked
      },
      error(err) {
          console.log(err);
      },
   })
  }

  toggleCommentBoxVisibility() {
    // this.isCommentBoxHidden = !this.isCommentBoxHidden;]
    this.dialog.open(PostCommentComponent, {
      width: '600px',
      data: { postId:this.post._id }
    });
  }

  handleChilLike(event:any){
    this.toggleLike()
  }

  toggleSavePost(){
    this.feedService.toggleSavePost(this.post._id).subscribe({
      next:(res)=>{
        this.isSavedPost=!this.isSavedPost
      },
      error(err) {
          console.log(err);
      },
    })
  }
}
