import { Component, Input, OnInit } from '@angular/core';
import { Post, PostModel } from '../../../store/sharedStore/Feed-Store/post.model';
import { ImageModule } from 'primeng/image';
import { PostCarouselComponent } from '../post-carousel/post-carousel.component';
import { CommonModule } from '@angular/common';
import { AppState } from '../../../store/GlobalStore/app.state';
import { Store } from '@ngrx/store';
import { likePost } from '../../../store/sharedStore/Feed-Store/post.action';
import { loadUser } from '../../../store/User/user.action';
import { User } from '../../../store/User/user.model';
import { GetCurrentUser } from '../../../store/User/user.selector';
import { PostCommentComponent } from '../postComment/postComment.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'post-component',
  standalone:true,
  imports:[ImageModule,PostCarouselComponent,CommonModule,PostCommentComponent],
  templateUrl: './post-component.component.html',

  styleUrls: ['./post-component.component.css']
})
export class PostComponent implements OnInit {
  @Input() postData!:PostModel;
  post!:any;
  isCommentBoxHidden:boolean=false;
  currentUser!:any;
  constructor(private store:Store<AppState>,private dialog: MatDialog) { }
  timeDifference!: string;
  isLiked: boolean=true;
  ngOnInit() {
    this.post = this.postData.post;
    console.log("Post data ",this.postData,this.post)
    this.calculateTimeDifference();
    this.loadCurrentUser();
    this.getCurentUser();
    this.isLiked = this.getLikedStatus();
    
  }
  loadCurrentUser(){
    this.store.dispatch(loadUser())
  }

  getLikedStatus(): boolean {
    console.log(this.currentUser);
    return this.post.likes.some((like:any) => like.userId === this.currentUser._id);
  }
  getCurentUser(){
    this.store.select(GetCurrentUser).subscribe((data)=>{
      this.currentUser=data;
      console.log(this.currentUser);
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
    this.store.dispatch(likePost({postId:this.post._id}))
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

}
