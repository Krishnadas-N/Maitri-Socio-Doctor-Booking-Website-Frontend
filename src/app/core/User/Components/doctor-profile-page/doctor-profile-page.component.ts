import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Doctor, Specialization } from '../../../../store/Doctor/doctor.model';
import { DoctorService } from '../../../Doctor/Services/Doctor-Services/doctor.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctor-profile-page',
  standalone:true,
  imports:[CommonModule,RouterLink],
  templateUrl: './doctor-profile-page.component.html',
  styleUrls: ['./doctor-profile-page.component.css']
})
export class DoctorProfilePageComponent implements OnInit {
  doctorId!:string;
  doctorDetails!:Doctor;
  activeTab: string = 'home';

  showSection(section: string): void {
    console.log(this.activeTab,section);
    this.activeTab = section;
    console.log(this.activeTab,section);
  }
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private doctorService:DoctorService,
    private toastr:ToastrService
  ) { }
  
  ngOnInit() {
    this.route.params.subscribe((params)=>{
      console.log("Doctor Profile Page Params", params);
      if (params && params['id']){
        this.doctorId = params['id'];
        this.findDoctor();
      }else{
       this.router.navigate(['/find-doctors']);
      }
    })
  }

  findDoctor(){
    this.doctorService.getDoctorById(this.doctorId).subscribe(
      (res)=>{
        console.log(res.data);
        this.doctorDetails = res.data.doctor
      },
      (err)=>{
        this.toastr.error(err);
        this.router.navigate(['/find-doctors']);
      }
    )
  }

  getSpecializationName(specialization: Specialization): string {
    if (typeof specialization === 'object' && specialization !== null) {
      return specialization.name;
    }
    return specialization || 'Not available';
  }

}
