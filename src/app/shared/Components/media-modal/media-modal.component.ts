import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-media-modal',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './media-modal.component.html',
  styleUrls: ['./media-modal.component.css']
})
export class MediaModalComponent implements OnInit {
  @Output() removeMediaClicked = new EventEmitter<void>();
  @Input()imageUrls: string[] = [];
  @Input() videoUrls: string[] = [];
  currentSlideIndex: number = 0;
  showModal = true;


  constructor() { }

  ngOnInit() {
    console.log(this.imageUrls,this.videoUrls);
  }
  openModal() {
    this.showModal = true;
  }

  removeMedia(): void {
  // Implement logic to remove the current media file from imageUrls or videoUrls based on currentSlideIndex
  if (this.currentSlideIndex < this.imageUrls.length) {
    this.imageUrls.splice(this.currentSlideIndex, 1);
  } else {
    const videoIndex = this.currentSlideIndex - this.imageUrls.length;
    this.videoUrls.splice(videoIndex, 1);
  }
}

  closeModal() {
    this.showModal = false;
  }
  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % (this.imageUrls.length + this.videoUrls.length);
  }

  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + (this.imageUrls.length + this.videoUrls.length)) % (this.imageUrls.length + this.videoUrls.length);
  }
}
