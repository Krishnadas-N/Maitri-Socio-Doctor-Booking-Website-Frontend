import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AddPostComponent } from '../../../../../shared/Components/add-post/add-post.component';
import { PostComponent } from '../../../../../shared/Components/post-component/post-component.component';
import { Post, PostModel } from '../../../../../store/sharedStore/Feed-Store/post.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/GlobalStore/app.state';
import { FeedService } from '../../../../../shared/Services/feed-Service.service';
import { ToastrService } from 'ngx-toastr';
import { loadDoctor } from '../../../../../store/Doctor/doctor.action';
import { GetCurrentdoctor } from '../../../../../store/Doctor/doctor.selectors';
import { Doctor } from '../../../../../store/Doctor/doctor.model';

@Component({
  selector: 'app-DoctorFeedHome',
  standalone:true,
  imports:[PostComponent,AddPostComponent,CommonModule,],
  templateUrl: './DoctorFeedHome.component.html',
  styleUrls: ['./DoctorFeedHome.component.css']
})
export class DoctorFeedHomeComponent implements OnInit {
  addPostModal:boolean=false;
  posts: PostModel[] = [];
  doctorDetail:Doctor | null = null;
  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
    this.loadAllPosts();
    this.loadCurrentDoctor();
    this.getDoctor();
    }
  }
  getDoctor(){
    this.store.select(GetCurrentdoctor).subscribe((data)=>{
      this.doctorDetail= data
    });
  }
  loadCurrentDoctor(){
    this.store.dispatch(loadDoctor())
  }

  loadAllPosts(){
    this.FeedService.getAllPosts().subscribe(
      (res:any)=>{
        this.posts=res.data
        console.log(this.posts)
      },
      (err)=>{
        this.toastr.error(err)
      }
    )
  }

  openAddpost(){
    this.addPostModal = !this.addPostModal
  }


  constructor(private store:Store<AppState>,
    private FeedService:FeedService,
    private toastr:ToastrService,
    @Inject(PLATFORM_ID) public platformId :Object
  ){}
}
