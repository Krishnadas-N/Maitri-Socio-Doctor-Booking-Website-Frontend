import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonService } from '../../../../shared/Services/common-services/common.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rating-review-dialog',
  templateUrl: './rating-review-dialog.component.html',
  styleUrls: ['./rating-review-dialog.component.css'],
  standalone:true,
  imports:[CommonModule,FormsModule],
})
export class RatingReviewDialogComponent implements OnInit {
  rating:number=0;
  reviewText:string=''
  isLoading:boolean=false;
  appoinmentId!:string;
  constructor(
    private toastr:ToastrService,
    private dialogRef:MatDialogRef<RatingReviewDialogComponent>,
    private commonService:CommonService,
    @Inject(MAT_DIALOG_DATA) public data: { appoinmentId: string}
  ) {
    console.log(data);
    this.appoinmentId = data.appoinmentId
   }

  ngOnInit() {
    
  }

  setRating(stars: number) {
    this.rating = stars;
  }

  submitReview(){
    console.log(this.rating,this.reviewText,this.appoinmentId);
    if(this.rating>0 && this.reviewText.trim().length>3){
      this.isLoading = true;
      this.commonService.addReview(this.rating,this.reviewText,this.appoinmentId).subscribe(
        {
          next:(res)=>{
            this.isLoading = false;
            this.toastr.success('Review added successfully')
            this.closeDialog(res.data);
          },
          error:(err)=>{
            this.isLoading = false;
              this.toastr.error(err)
          }
        }
      )
    }
  }

  closeDialog(data: any) {
    this.dialogRef.close(data);
  }
  onCancel(): void {
    // Close the dialog without emitting a result
    this.dialogRef.close();
  }

}
