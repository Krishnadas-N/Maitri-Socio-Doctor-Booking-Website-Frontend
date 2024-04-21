import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../../../shared/Components/Table/Table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { AdminPaginationComponent } from '../../../../shared/Components/admin-pagination/admin-pagination.component';
import { ConfimationDialogComponent } from '../../../../shared/Components/confimation-Dialog/confimation.component';
import { CommonModule } from '@angular/common';
import { AppState } from '../../../../store/GlobalStore/app.state';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AdminloadDoctors, blockDoctor } from '../../../../store/Doctor/doctor.action';
import { GetPagesSize, selectDoctorsByTab } from '../../../../store/Doctor/doctor.selectors';

@Component({
  selector: 'app-doctor-list',
  standalone:true,
  imports: [TableComponent,NgxPaginationModule,FormsModule,AdminPaginationComponent,ConfimationDialogComponent ,CommonModule ],
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css'],
  
})
export class DoctorListComponent implements OnInit {
  constructor(private store:Store<AppState>,private route:Router) { }
  doctorHeader = ['profilePic','firstName', 'email', 'isProfileComplete', 'specialization','isBlocked', 'Actions'];
  headerMapping: { [key: string]: string } = {
    'profilePic': 'Profile Picture',
    'firstName': 'Name',
    'email': 'Email',
    'isProfileComplete': 'Verified-Profile',
    'specialization': 'Specialization',
    'isBlocked': 'Blocked',
    'Actions':'Actions'
  };
    TabContents=['All','Blocked','Verified-Profiles','Not-Verified-Profiles']
    selectedTab: string = 'all';
    doctorRows:any = [];
   
    page: number=1;
    pageSize: number=8; 
    searchQuery: string ='';
    totalPages!: number 

    ngOnInit() {
      this.fetchData(); 
      this.fetchdoctors()
      this.store.select(GetPagesSize).subscribe((totalPage)=>{
        this.totalPages = totalPage
      })
      console.log(this.doctorRows);
    }
    fetchdoctors(tab:string='all'){
      this.store.select(selectDoctorsByTab(tab)).subscribe(data=>{
        console.log("subscripber",data);
        this.doctorRows=data;
      })
    }
    fetchData(): void {
      this.store.dispatch(AdminloadDoctors({page:this.page,pageSize:this.pageSize,searchQuery:this.searchQuery}))
    }
  
    onBlockStatusChange(id:any) {
      // Handle block/unblock action here
      console.log("Block status changed:", event);
      this.store.dispatch(blockDoctor({id:id}))
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
          this.fetchdoctors(tab);
          break;
        case 'blocked':
          this.fetchdoctors(tab);
          break;
        case 'verified-profiles':
          this.fetchdoctors(tab);
          break;
        case 'not-verified-profiles':
          this.fetchdoctors(tab);
          break;
        default:
          break;
      }
    }
    
    ViewUser(doctorId:string){
      this.route.navigate(['/admin/doctors/',doctorId])
    }
}
