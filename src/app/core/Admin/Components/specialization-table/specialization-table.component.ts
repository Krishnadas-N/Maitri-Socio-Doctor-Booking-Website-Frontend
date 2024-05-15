import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {   FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { SpecializationService } from '../../../../shared/Services/specialization-service/specialization.service';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ErrorNotificationService } from '../../../../shared/Services/notification-popups/Error-Notification.service'; 
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SuccessNotificationService } from '../../../../shared/Services/notification-popups/Success-Notification.service'; 
@Component({
  selector: 'app-specializationTable',
  standalone:true,
  imports:[CommonModule,FormsModule,ConfirmDialogModule,ToastModule,ReactiveFormsModule,MatSnackBarModule ],
  templateUrl: './specialization-table.component.html',
  styleUrls: ['./specialization-table.component.css'],
  providers:[ConfirmationService,MessageService]
})
export class SpecializationTableComponent implements OnInit {
  specializations: {_id:string, name: string, description: string, isEditing: boolean, isBlocked: boolean }[] = [
  ];
  toggledRowIndex: number = -1;
  isSubmitting: boolean = false; 
  position: string = 'center';
  addingSpecialization: boolean = false;
  specializationForm!: FormGroup;
  isAdding:boolean=false;

  constructor(private formBuilder: FormBuilder, 
    private confirmationService: ConfirmationService,
     private messageService: MessageService,
     private specializationService:SpecializationService,
     private toastrService: ErrorNotificationService,
     private toastSuccessService:SuccessNotificationService ,
     private toastr:ToastrService
    ) { }

  ngOnInit() {
    this.loadDoctorCategories();
    this.specializationForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      description: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  loadDoctorCategories(): void {
    this.specializationService.getAllDoctorCategories().subscribe((categories:any) => {
      console.log(categories);
      this.specializations = categories.data;
      this.specializations.forEach(specialization => specialization.isEditing = false);
    });
  }
  toggleEdit(index: number): void {
    if (this.toggledRowIndex !== -1 && this.toggledRowIndex !== index) {
      this.specializations[this.toggledRowIndex].isEditing = false;
    }
    this.specializations[index].isEditing = !this.specializations[index].isEditing;
    this.toggledRowIndex = this.specializations[index].isEditing ? index : -1; // Update the toggled row index
  }


  submitForm(specialization: { _id:string,name: string, description: string, isBlocked: boolean ,isEditing: boolean }): void {
   console.log(specialization)
    if (!this.isValidSpecialization(specialization)) {
      this.toastr.error('Form is invalid');
      return;
    }
    
    this.isSubmitting = true; // Show spinner/loader
    console.log("Submitting form", specialization);
    this.specializationService.updateDoctorCategory(specialization._id, specialization).subscribe((updatedSpecialization:any) => {
      console.log(updatedSpecialization.data);
      this.isSubmitting = false;
      this.mapNewData(updatedSpecialization.data)
    });


  }
  isValidSpecialization(specialization: {_id: string, name: string, description: string,isBlocked: boolean , isEditing: boolean }): boolean {
    return specialization.name.trim().length > 3
        && specialization.description.trim().length > 4 
  }

  mapNewData(specialization: {_id: string, name: string, description: string ,isBlocked: boolean }): void {
    console.log("Received specialization:", specialization);
  
    const index = this.specializations.findIndex(spec => spec._id === specialization._id);
    console.log("Index:", index);
    
    if (index !== -1) {
      // Update existing specialization
      this.specializations[index] = {...specialization, isEditing: false};
      console.log("Updated specialization:", this.specializations[index]);
    } else {
      // Add new specialization
      
      this.specializations.push({...specialization,isEditing:false});
       console.log("not index",this.specializations);
    }
  }
  

  changeStatus(_id:string,status:boolean){
    const isBlocked:string=status?'Unblock':'Block';
    this.confirmationService.confirm({
      message: `Are you sure you want to ${isBlocked} the User?`,
      header: 'Confirmation',
      icon: 'pi pi-info-circle',
      acceptIcon:"none",
      rejectIcon:"none",
      rejectButtonStyleClass:"p-button-text",
      accept: () => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Request submitted' });
          this.blockOrUnblock(_id);
      },
      reject: () => {
          this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Process incomplete', life: 3000 });
      },
      key: 'positionDialog'
  }); 
  }

  blockOrUnblock(id:string){
  console.log("Submitting form", id);
    this.specializationService.changeStatusOfCategory(id).subscribe((updatedSpecialization:any) => {
      console.log(updatedSpecialization.data);
      this.isSubmitting = false;
      this.mapNewData(updatedSpecialization.data)
    });
  }

  addSpecialization(){
    console.log(this.specializationForm);
  const specializationNameControl = this.specializationForm.get('name');
  const specializationDescriptionControl = this.specializationForm.get('description');

  if (!specializationNameControl || !specializationDescriptionControl) {
    return; // Return early if controls are not found
  }
  if (specializationNameControl.invalid && specializationNameControl.dirty) {
    if (specializationNameControl?.errors?.['required']) {
      this.toastrService.showErrorNotification('Name is required.', 'Close');
    } else if (specializationNameControl?.errors?.['minlength']) {
      this.toastrService.showErrorNotification('Name must be at least 4 characters long.', 'Close');
    }
    return;
  }

  if (specializationDescriptionControl.invalid && specializationDescriptionControl.dirty) {
    if (specializationDescriptionControl?.errors?.['required']) {
      this.toastrService.showErrorNotification('Description is required.', 'Close');
    } else if (specializationDescriptionControl?.errors?.['minlength']) {
      this.toastrService.showErrorNotification('Description must be at least 4 characters long.', 'Close');
    }
    return;
  }
  if(this.specializationForm.valid){
  this.isAdding=true;
  this.specializationService.creeateDoctorCategory(this.specializationForm.value).subscribe({
    next:(res:any) => {
      // Request was successful
      this.isAdding = false;
      this.mapNewData(res.data);
      this.addingSpecialization = false;
      this.toastSuccessService.showSuccessNotification('New Specialization is added.', 'Close');
    },
    error:(error) => {
      // Request encountered an error
      this.isAdding = false;
      this.toastrService.showErrorNotification('Error occurred while adding specialization.', 'Close');
      console.error('Error occurred while adding specialization:', error);
    }
  });
  }else{
    this.toastrService.showErrorNotification('Please fill the Form correctly.', 'Close');
  }
  }

  
}

