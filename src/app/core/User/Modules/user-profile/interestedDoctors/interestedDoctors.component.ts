import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../../Services/user-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-interestedDoctors',
  templateUrl: './interestedDoctors.component.html',
  styleUrls: ['./interestedDoctors.component.css']
})
export class InterestedDoctorsComponent implements OnInit {
  intertestedDoctors!:any;
  constructor(private userService:UserServiceService,
    private toastr:ToastrService
  ) { }

  ngOnInit() {
    this.getInterestList();
  }

  getInterestList(){
    this.userService.getInterestedDoctors().subscribe(
      (res:any)=>{
        this.intertestedDoctors=res.data;
        console.log( this.intertestedDoctors);
      },
      (err)=>{
        this.toastr.error(err)
      }
    )
  }

  removeInterest(doctorId:string){
    this.userService.removeFromInterestedDoctors(doctorId).subscribe(
      (res:any)=>{
        this.intertestedDoctors = this.intertestedDoctors.doctorsInfo.filter((x: any) => x._id.toString() !== doctorId);
        console.log( this.intertestedDoctors);
      },
      (err)=>{
        this.toastr.error(err)
      }
    )
  }

}
