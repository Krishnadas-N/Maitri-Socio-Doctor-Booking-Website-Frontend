import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadMedicalRecordComponent } from '../../../../../shared/Components/upload-medical-record/upload-medical-record.component';
import { UserService } from '../../../Services/user.service';
import { ToastrService } from 'ngx-toastr';
import { AppointmentPrescriptionModel } from '../Models/appointments.model';

@Component({
  selector: 'app-medical-record',
  templateUrl: './medical-record.component.html',
  styleUrls: ['./medical-record.component.css'],
})
export class MedicalRecordComponent implements OnInit {
  medicalRecords: any[] = [];
  appoinmentDetails: AppointmentPrescriptionModel[] = [];
  section: 'MedicalRecords' | 'Prescriptions' = 'MedicalRecords';
  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.fetchMedicalRecords();
    this.fetchPrescritptions();
  }
  openUploadModal() {
    const dialogRef = this.dialog.open(UploadMedicalRecordComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.fetchMedicalRecords();
    });
  }

  fetchMedicalRecords() {
    this.userService.getMedicalRecords().subscribe({
      next: (res) => {
        console.log('medicalRecords', this.medicalRecords);
        this.medicalRecords = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteRecord(recordId: string): void {
    this.userService.deleteMedicalRecord(recordId).subscribe({
      next: () => {
        this.toastr.success('SuccessFully deleted');
        const indextoDelete = this.medicalRecords.findIndex(
          (record) => record._id.toString() === recordId
        );
        this.medicalRecords.splice(indextoDelete, 1);
      },
      error: (error) => {
        // Handle error, e.g., show an error message
        console.error('Error deleting record:', error);
        this.toastr.error(error);
      },
    });
  }
  changeSection(sectionName: 'MedicalRecords' | 'Prescriptions') {
    this.section = sectionName;
  }

  fetchPrescritptions() {
    this.userService.getPrescritpionsOfUser().subscribe({
      next: (res) => {
        console.log('getPrescritpionsOfUser', res);
        this.appoinmentDetails = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
