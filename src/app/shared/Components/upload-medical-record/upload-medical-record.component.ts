import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../../core/User/Services/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-upload-medical-record',
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './upload-medical-record.component.html',
  styleUrls: ['./upload-medical-record.component.css']
})
export class UploadMedicalRecordComponent implements OnInit {
  recordForm!: FormGroup;
  submitted = false;
  isLoading=false;
  uploadedFile!: File;
  previewURL: string | ArrayBuffer | null = null;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<UploadMedicalRecordComponent>,
    private userService: UserService,
    private toastr:ToastrService
  ) {}

  ngOnInit(): void {
    this.recordForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  get formControls() {
    return this.recordForm.controls;
  }

  onSubmit() {
    console.log(this.recordForm.value);
    this.submitted = true;

    if (this.recordForm.invalid || this.fileFormatValidator(this.uploadedFile)) {
      return;
    }

    const file = this.uploadedFile;
    const title = this.recordForm.get('title')?.value;
    const description = this.recordForm.get('description')?.value;
    // Handle form submission to the backend
    console.log('Form Submitted', this.recordForm.value);
    this.isLoading=true;
    this.userService.uploadMedicalRecords(file, title, description).subscribe(
      response => {
        this.isLoading=false
        this.closeDialog()
      },
      error => {
        this.isLoading=false
      this.toastr.error(error);
      this.closeDialog()
      }
    );
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.uploadedFile = event.target.files[0];

      // Preview uploaded image
      const reader = new FileReader();
      reader.onload = () => {
        this.previewURL = reader.result;
      };
      reader.readAsDataURL(this.uploadedFile);
    }
  }

  fileFormatValidator(file: any) {
    if (file) {
      console.log(file);
      const allowedFormats = ['image/*', 'application/pdf'];

      if (!allowedFormats.includes(file.type)) {
        return false;
      }
    }
    return true;
  }

}
