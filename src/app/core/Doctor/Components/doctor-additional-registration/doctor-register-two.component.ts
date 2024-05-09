import { CommonModule } from '@angular/common';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SpecializationService } from '../../../../shared/Services/specialization-service/specialization.service';
import { DoctorSpecialization } from '../../models/doctor-specialization';
import { AuthService } from '../../Services/auth-service/auth.service'; 
@Component({
  selector: 'app-doctor-register-two',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatFormFieldModule],
  templateUrl: './doctor-register-two.component.html',
  styleUrl: './doctor-register-two.component.css',
})
export class DoctorRegisterTwoComponent implements OnInit {
  @Output() formValidityChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() isLoading = new EventEmitter<boolean>(false);

  doctorCategories: DoctorSpecialization[] = [];

  countries: string[] = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Argentina',
    'Australia',
    'Austria',
    'Bangladesh',
    'Belgium',
    'Brazil',
    'Canada',
    'China',
    'Colombia',
    'Czech Republic',
    'Egypt',
    'France',
    'Germany',
    'India',
    'Indonesia',
    'Italy',
    'Japan',
    'Mexico',
    'Netherlands',
    'New Zealand',
    'Nigeria',
    'Pakistan',
    'Russia',
    'South Africa',
    'Spain',
    'United Kingdom',
    'United States',
  ];

  registrationForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private doctorSpecializationService: SpecializationService,
    private doctorAuthSevice: AuthService
  ) {}

  ngOnInit(): void {
    this.loadDoctorCategories();
    this.registrationForm = this.fb.group({
      address: this.fb.group({
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipcode: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(6),
          ],
        ],
        country: ['', Validators.required],
      }),
      specialization: ['', Validators.required],
      education: this.fb.array([this.createEducationFormGroup()]),
      experience: ['', Validators.required],
      certifications: this.fb.array([]),
      languages: this.fb.array([], Validators.required),
    });

    this.registrationForm.valueChanges.subscribe(() => {
      this.formValidityChange.emit(this.registrationForm.valid);
    });
  }
  loadDoctorCategories(): void {
    this.doctorSpecializationService
      .getAllDoctorCategories()
      .subscribe((categories: any) => {
        console.log(categories);
        this.doctorCategories = categories.data;
      });
  }
  createEducationFormGroup(): FormGroup {
    return this.fb.group({
      degree: ['', Validators.required],
      institution: ['', Validators.required],
      year: ['', Validators.required],
    });
  }

  addEducation(): void {
    const educationArray = this.registrationForm.get('education') as FormArray;
    educationArray.push(this.createEducationFormGroup());
  }

  removeEducation(index: number): void {
    const educationArray = this.registrationForm.get('education') as FormArray;
    educationArray.removeAt(index);
  }
  get educationControls() {
    return (this.registrationForm.get('education') as FormArray).controls;
  }

  addLanguage(): void {
    const languagesArray = this.registrationForm.get('languages') as FormArray;
    languagesArray.push(this.fb.control('', Validators.required));
  }

  removeLanguage(index: number): void {
    const languagesArray = this.registrationForm.get('languages') as FormArray;
    languagesArray.removeAt(index);
  }

  languageControls(): FormArray {
    return this.registrationForm.get('languages') as FormArray;
  }
  get files() {
    return this.registrationForm.get('certifications') as FormArray;
  }

  onCertificationFileChange(event: any) {
    const files = event.target.files;
    if (files) {
      for (const file of files) {
        this.addCertificationControl(file);
      }
    }
  }

  addCertificationControl(file: File): void {
    (this.registrationForm.get('certifications') as FormArray).push(
      new FormControl(file)
    );
  }

  removeCertificationFile(index: number): void {
    const certificationsArray = this.registrationForm.get(
      'certifications'
    ) as FormArray;
    certificationsArray.removeAt(index);
  }

  certificationFiles(): FormArray {
    return this.registrationForm.get('certifications') as FormArray;
  }

  onSubmit(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.registrationForm.valid) {
        console.log(this.registrationForm.value);
        this.isLoading.emit(true);
        this.doctorAuthSevice
          .registerProfessional(this.registrationForm.value)
          .subscribe(
            (response) => {
              this.isLoading.emit(false);
              resolve(response);
            },
            (error) => {
              this.isLoading.emit(false);
              reject(error);
            }
          );
      } else {
        console.error('Form is invalid');
        reject('Form is invalid');
      }
    });
  }
}
