import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../../../../../shared/Components/post-component/post-component.component';
import { AddPostComponent } from '../../../../../shared/Components/add-post/add-post.component';

@Component({
  selector: 'app-doctor-feed-main',
  standalone: true,
  imports: [PostComponent,AddPostComponent],
  templateUrl: './doctor-feed-main.component.html',
  styleUrl: './doctor-feed-main.component.css'
})
export class DoctorFeedMainComponent implements OnInit {
  addPostModal:boolean=false;
  ngOnInit(): void {
      
  }
  openAddpost(){
    this.addPostModal = !this.addPostModal
  }
}
