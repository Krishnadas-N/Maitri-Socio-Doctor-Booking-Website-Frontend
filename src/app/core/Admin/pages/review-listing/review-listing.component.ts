import { Component, OnInit } from '@angular/core';
import { AppoinmentTableComponent } from '../../Components/appoinment-table/appoinment-table.component';
import { AdminPaginationComponent } from '../../Components/admin-pagination/admin-pagination.component';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime } from 'rxjs';
import { AdminService } from '../../Services/admin-service/auth.service';
import { ReviewDetails } from '../../Models/reviews.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-review-listing',
  templateUrl: './review-listing.component.html',
  styleUrls: ['./review-listing.component.css'],
  standalone:true,
  imports:[AppoinmentTableComponent,AdminPaginationComponent,FormsModule]
})
export class ReviewListingComponent implements OnInit {
  currentPage: number = 1;
  totalPages: number = 0;
  totalCount: number = 0; 
  pageSize: number = 6;
  searchQuery: string = '';
  searchSubject: Subject<string> = new Subject<string>();
  constructor(private adminService:AdminService,private toastr:ToastrService) {
    this.searchSubject.pipe(
      debounceTime(300)
    ).subscribe(query => {
      this.searchQuery = query;
      this.getReviewDetails();
    });
   }
   headers = [
    { text: 'Patient Name', key: 'patientName' },
    { text: 'Doctor Name', key: 'doctorName' },
    { text: 'Ratings', key: 'rating' },
    { text: 'Description', key: 'comment' },
    { text: 'Date', key: 'createdAt' },
];

  reviews:ReviewDetails[] =[]

  config = {
    showViewButton: false,
    showDeleteButton: true
  };

  ngOnInit() {
    this.getReviewDetails()
  }

  getReviewDetails(){
    this.adminService.getReviews(this.currentPage,this.pageSize,this.searchQuery).subscribe({
      next:(res)=>{
        console.log("Reviwws in Admin Side",res);
        this.reviews = res.data.reviews;
        this.currentPage = res.data.currentPage;
        this.pageSize = res.data.pageSize;
        this.totalCount = res.data.totalCount;
        this.totalPages = res.data.totalPages;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  onSearchChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchSubject.next(inputElement.value);
  }

  onPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
     this.getReviewDetails();
    }
  }
  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
     this.getReviewDetails();
  }
  onNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
     this.getReviewDetails();
    }
  }

  deletreview(event:any){
    this.adminService.deleteReview(event).subscribe({
      next:(res)=>{
         const idx=  this.reviews.findIndex((review=>review._id.toString()===event));
          this.reviews.splice(idx,1)
      },
      error:(err)=>{
        this.toastr.error("Error While deleting Review",err)
      }
    })
  }
 
}
