import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-interested-doctors',
  templateUrl: './interested-doctors.component.html',
  styleUrls: ['./interested-doctors.component.css']
})
export class InterestedDoctorsComponent implements OnInit {
  intertestedDoctors!:any;
  constructor(private userService:UserService,
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
    this.userService.removeFromInterestedDoctors(doctorId).subscribe({
      next:(res:any)=>{
        this.intertestedDoctors = this.intertestedDoctors.doctorsInfo.filter((x: any) => x._id.toString() !== doctorId);
        console.log( this.intertestedDoctors);
      },
      error:(err)=>{
        this.toastr.error(err)
      }
  })
  }

}
