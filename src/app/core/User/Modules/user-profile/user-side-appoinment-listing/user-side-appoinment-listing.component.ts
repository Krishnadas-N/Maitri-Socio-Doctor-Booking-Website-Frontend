import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../Services/user.service';

@Component({
  selector: 'app-user-side-appoinment-listing',
  templateUrl: './user-side-appoinment-listing.component.html',
  styleUrls: ['./user-side-appoinment-listing.component.css']
})
export class UserSideAppoinmentListingComponent implements OnInit {
  currentPage: number = 1;
  totalPages: number = 0;
  totalCount: number = 0; 
  pageSize: number = 6;
  userAppoinmentDetails!:any;
  userType:"doctor" | "user" = 'user';
  constructor(
    private userService:UserService,
    private toastr:ToastrService
  ) { }

  ngOnInit() {
    this.totalPages = Math.ceil(this.totalCount / this.pageSize);
    this.fetchUserAppoinmentDetails();
  }
  fetchUserAppoinmentDetails(){
    this.userService.getUserAppoinments(this.currentPage, this.pageSize).subscribe(
      (res:any)=>{
        console.log("Repsonse from userlisitng",res)
        this.userAppoinmentDetails =res.data.appointments;
        this.currentPage = res.data.page;
        this.pageSize = res.data.pageSize;
        this.totalCount = res.data.totalCount;
        this.totalPages = res.data.totalPages;
      },
      (err)=>{
        setTimeout(()=>{
          this.toastr.error(err)
        },500)
      }
    )
  }
  changeStatus(event:any){
    this.userService.changeAppoinmentStatus(event.id,event.status).subscribe(
      (res:any)=>{
        console.log(res.data);
        const index = this.userAppoinmentDetails.findIndex((appointment: any) => appointment._id.toString() === event.id.toString());
        console.log(res.data,index);
        if (index !== -1) {
        // Update the status of the appointment at the found index
        this.userAppoinmentDetails[index].status = event.status;
      } else {
        // Handle case where appointment with the given ID is not found
        console.error('Appointment not found:', event.id);
      }
      },
      (err)=>{

      })
  }

  onPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchUserAppoinmentDetails()
    }
  }
  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.fetchUserAppoinmentDetails()
  }
  onNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.fetchUserAppoinmentDetails()
    }
  }

}
