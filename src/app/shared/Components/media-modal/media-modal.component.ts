import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-modal',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './media-modal.component.html',
  styleUrls: ['./media-modal.component.css']
})
export class MediaModalComponent implements OnInit {

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
