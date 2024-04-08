import { CommonModule } from '@angular/common';
import { Component, OnInit,EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-admin-pagination',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './admin-pagination.component.html',
  styleUrls: ['./admin-pagination.component.css']
})
export class AdminPaginationComponent implements OnInit {

  constructor() { }
  @Input() totalPages!: number;
  @Output() pageChange = new EventEmitter<number>();

  currentPage = 1;
  totalPagesArray!: number[];
  ngOnChanges(): void {
    this.totalPagesArray = Array(this.totalPages).fill(0).map((x, i) => i + 1);
  }
  ngOnInit() {
  }
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.emitPageChange();
    }
  }
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.emitPageChange();
    }
  }
  goToPage(page: number): void {
    if (this.currentPage !== page) {
      this.currentPage = page;
      this.emitPageChange();
    }
  }
  private emitPageChange(): void {
    this.pageChange.emit(this.currentPage);
  }
  shouldDisplay(page: number): boolean {
    const maxVisiblePages = 5; // Change this value based on your preference
    const middlePage = Math.ceil(maxVisiblePages / 2);
    const currentPageIndex = this.totalPagesArray.indexOf(this.currentPage);
    const minIndex = Math.max(0, currentPageIndex - middlePage);
    const maxIndex = Math.min(this.totalPagesArray.length - 1, minIndex + maxVisiblePages - 1);

    return page >= this.totalPagesArray[minIndex] && page <= this.totalPagesArray[maxIndex];
  }
}
