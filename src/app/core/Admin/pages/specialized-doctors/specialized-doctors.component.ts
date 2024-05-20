import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdminService } from '../../Services/admin-service/auth.service';
import { Subscription } from 'rxjs';
import { CardSkeltonComponent } from '../../../../shared/Components/card-skelton/card-skelton.component';
import { CommonModule } from '@angular/common';
import { SkeltonModuleModule } from '../../../../shared/Modules/skelton-module/skelton-module.module';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SpecializationDoctor } from '../../Models/specialization.models';

@Component({
  selector: 'app-specialized-doctors',
  templateUrl: './specialized-doctors.component.html',
  styleUrls: ['./specialized-doctors.component.css'],
  standalone:true,
  imports:[CardSkeltonComponent,RouterLink,CommonModule,SkeltonModuleModule]
})
export class SpecializedDoctorsComponent implements OnInit,OnDestroy {
  specializationId!:string;
  isLoading = true;
  searchQuery:string=''
  isIntialLoading:boolean=true
  doctors:SpecializationDoctor[]=[]
  specializationSubscription:Subscription|undefined =undefined
  constructor(
    private adminService:AdminService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.specializationId = this.route.snapshot.params['specId'];
   this.fetchDoctors()
  } 
  fetchDoctors(){
   this.specializationSubscription =  this.adminService.getSpecializedDoctors(this.specializationId,this.searchQuery).subscribe({
      next:(res:any)=>{
        this.isLoading=false
        this.doctors = res.data
      console.log("specialized Docotrs",res);
      },
      error:(err)=>{
      console.log(err);
      }
    })
  }
  ngOnDestroy(): void {
      if(this.specializationSubscription){
      this.specializationSubscription.unsubscribe()
      }
  }
}
