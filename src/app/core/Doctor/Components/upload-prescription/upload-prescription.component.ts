import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DoctorService } from '../../Services/doctor-services/doctor.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upload-prescription',
  templateUrl: './upload-prescription.component.html',
  styleUrls: ['./upload-prescription.component.css'],
  standalone:true,
  imports:[ReactiveFormsModule,CommonModule]
})
export class UploadPrescriptionComponent implements OnInit {
  prescriptionForm!: FormGroup;
  isLoading:boolean=false;
  previewUrl: string | ArrayBuffer | null = null;
  appointmentId:string|null=null;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<UploadPrescriptionComponent>,
    private doctorService:DoctorService,
    private toastr:ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: { appoinmentId: string }
  ) { 
    console.log("data",data);
    this.appointmentId = data.appoinmentId;
  }

  ngOnInit() {
 
    this.prescriptionForm = this.formBuilder.group({
      title: ['', Validators.required],
      prescription: [null, Validators.required]
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    console.log(this.prescriptionForm.value,this.appointmentId);
   if(this.prescriptionForm.valid && this.appointmentId){
    this.isLoading = true;
   
    this.doctorService.savePrescription(this.prescriptionForm.value,this.appointmentId).subscribe({
      next:(res)=>{
        this.isLoading=false
        this.toastr.success('Prescription uploaded Successfully');
        this.closeDialog()
      },
      error:(err)=>{
        this.isLoading=false
        this.toastr.error(err)
      }
    })
   }
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      this.prescriptionForm.get('prescription')?.setValue(file); // Set the value of the file input control
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log( reader.result);
        this.previewUrl = reader.result;
      };
    }
  }

 
}
