import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { PostMedia } from '../../../store/sharedStore/Feed-Store/post.model';

@Component({
  selector: 'app-post-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-carousel.component.html',
  styleUrls: ['./post-carousel.component.css'],
})
export class PostCarouselComponent implements OnInit {
  @Input() slides: PostMedia[] = [];
  currentIndex = 0;

  prevSlide() {
    this.currentIndex =
      this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1;
  }

  nextSlide() {
    this.currentIndex =
      this.currentIndex === this.slides.length - 1 ? 0 : this.currentIndex + 1;
  }
  ngOnInit() {
    console.log(this.slides, 'Log from  post carousel');
  }

  constructor() {}
}
