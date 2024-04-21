import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../../../../shared/Services/feed-Service.service';
import { Post } from '../../../../../store/sharedStore/Feed-Store/post.model';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctor-my-feed',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './doctor-my-feed.component.html',
  styleUrls: ['./doctor-my-feed.component.css']
})
export class DoctorMyFeedComponent implements OnInit {
  doctorPosts:Post[]=[];
  constructor(private feedService:FeedService,
    private toastr:ToastrService
  ) { }

  ngOnInit() {
    this.getDoctorsPost();
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
}
