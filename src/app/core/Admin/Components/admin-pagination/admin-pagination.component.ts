import { CommonModule } from '@angular/common';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-admin-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-pagination.component.html',
  styleUrls: ['./admin-pagination.component.css'],
})
export class AdminPaginationComponent implements OnInit {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 0; 
  @Input() totalCount: number = 0; 
  @Input() pageSize: number = 6;
  @Output() prevPage = new EventEmitter<void>();
  @Output() nextPage = new EventEmitter<void>();
  @Output() goToPage = new EventEmitter<number>();
  noOfPage: number[] = [];
  
  constructor() { }

  ngOnInit() {
    this.updateNoOfPage();
  }

  ngOnChanges(): void {
    this.updateNoOfPage();
  }

  goToPageNumber(pageNumber: number): void {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.goToPage.emit(pageNumber);
    }
  }

  private updateNoOfPage(): void {
    const maxPagesToShow = 5; 

    let startPage = Math.max(1, this.currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(this.totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    this.noOfPage = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
  }
}
