import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PostComponent } from '../../../../shared/Components/post-component/post-component.component';
import { Post } from '../../../../store/sharedStore/Feed-Store/post.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/GlobalStore/app.state';
import { loadPosts } from '../../../../store/sharedStore/Feed-Store/post.action';
import { selectPosts } from '../../../../store/sharedStore/Feed-Store/post.selector';
import { TokenService } from '../../../../shared/Services/TokenAuthService/Token.service';

@Component({
  selector: 'app-User-Home',
  standalone:true,
  imports:[CommonModule,RouterLink,PostComponent],
  templateUrl: './User-Home.component.html',
  styleUrls: ['./User-Home.component.css']
})
export class UserHomeComponent implements OnInit {
  posts: Post[] = [];
  constructor(private store:Store<AppState>,private tokenService:TokenService,private router:Router) { }

  ngOnInit() {
    if(!this.tokenService.isAuthenticated()){
      this.router.navigate([`login`]);
    }
    this.loadAllPosts();
    this.getAllPosts();
  }
  loadAllPosts(){
    this.store.dispatch(loadPosts())
  }

    getAllPosts(){
    this.store.select(selectPosts).subscribe(data=>{
      this.posts=data
      console.log("post  fromm ...",this.posts);
    });
  }

}
