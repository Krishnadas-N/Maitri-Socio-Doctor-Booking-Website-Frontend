import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, afterNextRender } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PostComponent } from '../../../../shared/Components/post-component/post-component.component';
import { Post, PostModel } from '../../../../store/sharedStore/Feed-Store/post.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/GlobalStore/app.state';
import { loadPosts } from '../../../../store/sharedStore/Feed-Store/post.action';
import { selectPosts } from '../../../../store/sharedStore/Feed-Store/post.selector';
import { TokenService } from '../../../../shared/Services/TokenAuthService/Token.service';
import { FeedService } from '../../../../shared/Services/feed-Service.service';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-User-Home',
  standalone:true,
  imports:[CommonModule,RouterLink,PostComponent],
  templateUrl: './User-Home.component.html',
  styleUrls: ['./User-Home.component.css']
})
export class UserHomeComponent implements OnInit {
  posts: PostModel[] = [];
  constructor(
    private FeedService:FeedService,
    private store:Store<AppState>,
    private tokenService:TokenService,private router:Router,
    private toastr:ToastrService,
    @Inject(PLATFORM_ID) public platformId :Object
   
  ) { }

  ngOnInit() {
    if(isPlatformBrowser(this.platformId)){
    if(!this.tokenService.isAuthenticated()){
      this.router.navigate([`login`]);
    }
    
    this.loadAllPosts();
  }
  }

  loadAllPosts(){
    this.FeedService.getAllPosts().subscribe(
      (res:any)=>{
        this.posts=res.data
        console.log("post from user home ",this.posts)
      },
      (err)=>{
        this.toastr.error(err)
      }
    )
  }

}
