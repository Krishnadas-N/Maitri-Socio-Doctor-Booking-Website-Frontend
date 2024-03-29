import { CommonModule } from '@angular/common';
import { Component, OnInit ,EventEmitter, Output} from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-doctor-register-2',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,MatFormFieldModule ],
  templateUrl: './doctor-register-2.component.html',
  styleUrl: './doctor-register-2.component.css'
})
export class DoctorRegister2Component implements OnInit{
  @Output() formValidityChange: EventEmitter<boolean> = new EventEmitter<boolean>();

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

  constructor(private fb: FormBuilder) { }

  
  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        zipcode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
        country: ['', Validators.required]
      }),
      specialization: ['', Validators.required],
      education: this.fb.array([
        this.createEducationFormGroup() 
      ]),
      experience: ['', Validators.required],
      certifications: this.fb.array([], Validators.required),
      languages: this.fb.array([], Validators.required),
    });

    this.registrationForm.valueChanges.subscribe(()=>{
      this.formValidityChange.emit(this.registrationForm.valid);
    })
  }
  createEducationFormGroup(): FormGroup {
    return this.fb.group({
      degree: ['', Validators.required],
      institution: ['', Validators.required],
      year: ['', Validators.required]
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
  

  onCertificationFileChange(event: any) {
    const certificationFiles = event.target.files;
    if (certificationFiles.length > 0) {
      const certificationsArray = this.registrationForm.get('certifications') as FormArray;
      for (let i = 0; i < certificationFiles.length; i++) {
        certificationsArray.push(this.fb.control(certificationFiles[i]));
      }
    }
  }

  
  removeCertificationFile(index: number): void {
    const certificationsArray = this.registrationForm.get('certifications') as FormArray;
    certificationsArray.removeAt(index);
  }
  
  
certificationFiles():FormArray{
  return this.registrationForm.get('certifications') as FormArray;
}
  
  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
    } else {
    }
  }
}
