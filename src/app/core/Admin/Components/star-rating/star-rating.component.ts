import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
  imports:[CommonModule],
  standalone:true,
})
export class StarRatingComponent implements OnInit,OnChanges  {

  constructor() { }

  ngOnInit() {
  }
  @Input() rating: number | null = 0;
  starWidth: number = 0;

  ngOnChanges(): void {
    if (this.rating !== null) {
      this.starWidth = (this.rating * 75) / 5;
    } else {
      this.starWidth = 0;
    }
  }

}
