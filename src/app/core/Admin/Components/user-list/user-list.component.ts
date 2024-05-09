import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../../../shared/Components/table/table.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/GlobalStore/app.state';
import { selectUsersByTab, GetPagesSize } from '../../../../store/User/user.selector';
import { blockUser, loadUsers } from '../../../../store/User/user.action';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule, } from '@angular/common';
import { AdminPaginationComponent } from '../../../../shared/Components/admin-pagination/admin-pagination.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
 
  page: number=1;
  pageSize: number=8; 
  searchQuery: string ='';
  totalPages!: number 

  ngOnInit() {
    this.fetchData(); 
    this.fetchusers()
    this.store.select(GetPagesSize).subscribe((totalPage)=>{
      this.totalPages = totalPage
    })
    console.log(this.userRows);
  }
  fetchusers(tab:string='all'){
    this.store.select(selectUsersByTab(tab)).subscribe(data=>{
      console.log("subscripber",data);
      this.userRows=data;
    })
  }
  fetchData(): void {
    this.store.dispatch(loadUsers({page:this.page,pageSize:this.pageSize,searchQuery:this.searchQuery}))
  }

  onBlockStatusChange(id:any) {
    // Handle block/unblock action here
    console.log("Block status changed:", event);
    this.store.dispatch(blockUser({id:id}))
}

  onPageChange(page: number): void {
    console.log('Page changed to:', page);

    this.page = page;

    this.fetchData();
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

  constructor(private store:Store<AppState>,private route:Router) { }
}
