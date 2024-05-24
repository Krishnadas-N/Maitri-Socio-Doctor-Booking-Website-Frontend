import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../../../shared/Components/table/table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { AdminPaginationComponent } from '../../Components/admin-pagination/admin-pagination.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AdminService } from '../../Services/admin-service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-doctor-list',
  standalone: true,
  imports: [
    TableComponent,
    NgxPaginationModule,
    FormsModule,
    AdminPaginationComponent,
    CommonModule,
  ],
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css'],
})
export class DoctorListComponent implements OnInit {

  currentPage: number = 1;
  totalPages: number = 0;
  totalCount: number = 0;
  pageSize: number = 6;
  searchQuery: string = '';

  constructor(
    private adminService:AdminService,
    private toastr:ToastrService,
     private route: Router) {}
  doctorHeader = [
    'profilePic',
    'firstName',
    'email',
    'isProfileComplete',
    'specialization',
    'isBlocked',
    'Actions',
  ];
  headerMapping: { [key: string]: string } = {
    profilePic: 'Profile Picture',
    firstName: 'Name',
    email: 'Email',
    isProfileComplete: 'Verified-Profile',
    specialization: 'Specialization',
    isBlocked: 'Blocked',
    Actions: 'Actions',
  };
  TabContents = [
    'All',
    'Blocked',
    'Verified-Profiles',
    'Not-Verified-Profiles',
  ];
  selectedTab: string = 'all';
  doctorRows: any = [];



  ngOnInit() {
    this.fetchData();
  }

  fetchData(){
    this.adminService.getDoctors(this.currentPage, this.pageSize,this.searchQuery).subscribe({
     next: (res:any)=>{
        console.log("Repsonse from userlisitng",res)
        this.doctorRows =res.data.doctors;
        this.currentPage = res.data.currentPage;
        this.pageSize = res.data.pageSize;
        this.totalCount = res.data.totalCount;
        this.totalPages = res.data.totalPages;
      },
     error: (err)=>{
          this.toastr.error(err)
      }
   })
  }

  onBlockStatusChange(id: any) {
    // Handle block/unblock action here
    console.log('Block status changed:', event);
    this.adminService.blockDoctor(id).subscribe({
      next: (res)=>{

      },
      error:(err)=>{
        this.toastr.error(err)
      }
    })
  }


  selectTab(event: any) {
    console.log(event.target.value);
    let tab = event.target.value;
    this.selectedTab = tab;
    switch (tab) {
      case 'all':
        // this.fetchdoctors(tab);
        break;
      case 'blocked':
        // this.fetchdoctors(tab);
        break;
      case 'verified-profiles':
        // this.fetchdoctors(tab);
        break;
      case 'not-verified-profiles':
        // this.fetchdoctors(tab);
        break;
      default:
        break;
    }
  }

  ViewUser(doctorId: string) {
    this.route.navigate(['/admin/doctors/', doctorId]);
  }



  onPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
     this.fetchData();
    }
  }
  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
     this.fetchData();
  }
  onNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
     this.fetchData();
    }
  }
}
