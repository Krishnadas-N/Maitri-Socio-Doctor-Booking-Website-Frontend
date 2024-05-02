import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FeedService } from '../../../../../shared/Services/feed-Service.service';
import { Post, PostModel } from '../../../../../store/sharedStore/Feed-Store/post.model';
import { ToastrService } from 'ngx-toastr';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PostComponent } from '../../../../../shared/Components/post-component/post-component.component';
import { PostCommentComponent } from '../../../../../shared/Components/postComment/postComment.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-doctor-my-feed',
  standalone:true,
  imports:[CommonModule,PostComponent,PostCommentComponent],
  templateUrl: './doctor-my-feed.component.html',
  styleUrls: ['./doctor-my-feed.component.css']
})
export class DoctorMyFeedComponent implements OnInit {
  doctorPosts:Post[]=[];
  isCommentBoxHidden:boolean=false;
  constructor(
    private dialog: MatDialog,
    private feedService:FeedService,
    private toastr:ToastrService,
    @Inject(PLATFORM_ID) public platformId :Object
    
  ) { }

  ngOnInit() {
    if(isPlatformBrowser(this.platformId)){
    this.getDoctorsPost();
    }
  }
  getDoctorsPost(){
    this.feedService.loadCurrentDoctorPosts().subscribe(
      (res:any)=>{
        console.log(res);
        this.doctorPosts=res.data;
      },
      (err)=>{
        this.toastr.error(err)
      }
    )
  }
  // handleChilLike(event:any){
  //   const postId = event;
  //   this.feedService.likePost(postId).subscribe(
  //     (res:any)=> {
  //     let index = this.doctorPosts.findIndex(val => val.post._id.toString() === postId.toString());
  //     this.doctorPosts[index] = res.data ;
  //     // this.doctorPosts[index].isLikedUser = true;
  //   },
  //   (err)=>{
  //     this.toastr.error(err);
  //   }
  // )
  // }

  onClickOpenModal(post:Post){
    this.dialog.open(PostCommentComponent, {
      width: '600px',
      data: { postId:post._id }
    });
  }
}
