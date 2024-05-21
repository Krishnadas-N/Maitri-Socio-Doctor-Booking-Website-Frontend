import { CommonModule, } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AddPostComponent } from '../../../../../shared/Components/add-post/add-post.component';
import { PostComponent } from '../../../../../shared/Components/post/post.component'; 
import {  PostModel } from '../../../../../store/sharedStore/Feed-Store/post.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/GlobalStore/app.state';
import { FeedService } from '../../../../../shared/Services/feed.service';
import { ToastrService } from 'ngx-toastr';
import { loadDoctor } from '../../../../../store/Doctor/doctor.action';
import { GetCurrentdoctor } from '../../../../../store/Doctor/doctor.selectors';
import { Doctor } from '../../../../../store/Doctor/doctor.model';
import { CardSkeltonLoaderComponent } from '../../../../../shared/Components/card-skelton-loader/card-skelton-loader.component';

@Component({
  selector: 'app-DoctorFeedHome',
  standalone:true,
  imports:[PostComponent,AddPostComponent,CommonModule,CardSkeltonLoaderComponent],
  templateUrl: './doctor-feed-home.component.html',
  styleUrls: ['./doctor-feed-home.component.css']
})
export class DoctorFeedHomeComponent implements OnInit {
  addPostModal:boolean=false;
  isLoadingPosts:boolean=false;
  userType:'Doctor'|'User'='Doctor';
  posts: PostModel[] = [];
  doctorDetail:Doctor | null = null;
  ngOnInit(): void {
    this.isLoadingPosts=true
    this.loadAllPosts();
    this.loadCurrentDoctor();
    this.getDoctor();
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
    this.FeedService.getAllPosts().subscribe({
      next: (res:any) =>{
        this.posts =res.data
        console.log(this.posts);
        this.isLoadingPosts =false;
      },
      error: (e) =>   this.toastr.error(e),
      complete: () => console.info('complete') 
    })
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
