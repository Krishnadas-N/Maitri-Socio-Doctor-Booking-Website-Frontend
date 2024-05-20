import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../../../shared/Components/table/table.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/GlobalStore/app.state';
import { selectUsersByTab, GetPagesSize } from '../../../../store/User/user.selector';
import { blockUser, loadUsers } from '../../../../store/User/user.action';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule, } from '@angular/common';
import { AdminPaginationComponent } from '../../Components/admin-pagination/admin-pagination.component'; 
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../../../../shared/Services/common-services/common.service';
import { AdminService } from '../../Services/admin-service/auth.service';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    TableComponent,NgxPaginationModule,FormsModule,AdminPaginationComponent ,CommonModule
   ],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
userHeader = ['profilePic','username', 'email', 'isVerified', 'gender','isBlocked', 'Actions'];
headerMapping: { [key: string]: string } = {
  'profilePic': 'Profile Picture',
  'username': 'Username',
  'email': 'Email',
  'isVerified': 'Verified',
  'gender': 'Gender',
  'isBlocked': 'Blocked',
  'Actions':'Actions'
};
  TabContents=['All','Blocked','Verified','Not-Verified']
  selectedTab: string = 'all';
  userRows:any = [];
 
  currentPage: number = 1;
  totalPages: number = 0;
  totalCount: number = 0; 
  pageSize: number = 6;
  searchQuery: string = '';


  constructor(private adminService:AdminService,private route:Router) { }
  ngOnInit() {
    this.fetchData(); 
    this.fetchusers()
    console.log(this.userRows);
  }
  fetchusers(tab:string='all'){
    
  }
  fetchData() {
  this.adminService.getAllUsers(this.currentPage, this.pageSize, this.searchQuery).subscribe({
    next:(res)=>{
      console.log("get all users",res);
      this.userRows=res.data.users;
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

  onBlockStatusChange(id:any) {
    // Handle block/unblock action here
    console.log("Block status changed:", id);
        this.adminService.blockUser(id).subscribe({
          next:(res)=>{
          const idx =  this.userRows.findIndex((user:any)=>user._id.toString()===res.data._id.toString());
            this.userRows.splice(idx,1,res.data)
          },
          error:(err)=>{
            console.log(err);
          }
        })
      
}

  
  selectTab(event: any) {
    console.log(event.target.value);
    let tab =event.target.value
    this.selectedTab = tab; 
    switch (tab) {
      case 'all':
        this.fetchusers(tab);
        break;
      case 'blocked':
        this.fetchusers(tab);
        break;
      case 'verified':
        this.fetchusers(tab);
        break;
      case 'not-verified':
        this.fetchusers(tab);
        break;
      default:
        break;
    }
  }
  
  
    

  ViewUser(userId:string){
    this.route.navigate(['/admin/users/',userId])
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
