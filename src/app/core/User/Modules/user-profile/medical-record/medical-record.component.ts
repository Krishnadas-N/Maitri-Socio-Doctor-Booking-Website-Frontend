import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadMedicalRecordComponent } from '../../../../../shared/Components/upload-medical-record/upload-medical-record.component';
import { UserService } from '../../../Services/user.service';

@Component({
  selector: 'app-medical-record',
  templateUrl: './medical-record.component.html',
  styleUrls: ['./medical-record.component.css']
})
export class MedicalRecordComponent implements OnInit {
  showMediaModal:boolean=false;
  medicalRecords:any[]=[]
  imageUrls:string[]=[]
  constructor(public dialog: MatDialog,
    private userService:UserService
  ) { }

  ngOnInit() {
    this.fetchMedicalRecords()
  }
  openUploadModal() {
    const dialogRef = this.dialog.open(UploadMedicalRecordComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.fetchMedicalRecords()
    });
  }

  fetchMedicalRecords(){
    this.userService.getMedicalRecords().subscribe(
      (res)=>{
        console.log("medicalRecords",this.medicalRecords);
        this.medicalRecords = res.data
      },
      (err)=>{
        console.log(err)

      }
    )
  }
  viewRecord(record:any){
    this.imageUrls=[record.fileUrl]
    this.showMediaModal=true;
  }

  closeMedia(event:any){
    this.showMediaModal=false
  }
}
