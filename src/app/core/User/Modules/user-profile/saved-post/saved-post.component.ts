import { Component, OnInit, inject } from '@angular/core';
import { Post } from '../../../../../store/sharedStore/Feed-Store/post.model';
import { FeedService } from '../../../../../shared/Services/feed.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-saved-post',
  templateUrl: './saved-post.component.html',
  styleUrls: ['./saved-post.component.css'],
})
export class SavedPostComponent implements OnInit {
  savedPosts: Post[] = [];
  constructor(
    private feedService: FeedService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loadSavedPosts();
  }
  loadSavedPosts() {
    this.feedService.getSavedPosts().subscribe({
      next: (res) => {
        console.log(res);
        this.savedPosts = res.data;
      },
      error: (err) => {
        this.toastr.error(err);
      },
    });
  }
}
