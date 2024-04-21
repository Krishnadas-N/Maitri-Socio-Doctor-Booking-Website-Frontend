import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class FormValidator {

    static checkSixYaersBefore(control: FormControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
        const today: Date = new Date();
        const sixYearsAgo: Date = new Date();
        sixYearsAgo.setFullYear(today.getFullYear() - 6);
        console.log(control.value,new Date(control.value),sixYearsAgo);
        if (new Date(control.value) > today || new Date(control.value) > sixYearsAgo) {
            console.log("date check failed ");
            resolve({ "LessThanToday": true });
        }
        console.log("date check passed ");
        resolve(null);
    
    });
  }
  static phoneNumberValidator(control: FormControl) {
    const phoneNumberPattern = /^\d{10}$/; // Pattern to match exactly 10 digits
  
    if (control.value && !phoneNumberPattern.test(control.value)) {
      return { invalidPhoneNumber: true };
    }
  
    return null;
  }

  static pdfFileValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const file = control.value;
      if (file) {
        const allowedMimeTypes = ['application/pdf']; // Array of allowed MIME types
        if (!allowedMimeTypes.includes(file.type)) {
          return { invalidPdf: true };
        }
      }
      return null;
    };
  }
  static imageFileValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const file = control.value;
      if (file && !file.type.startsWith('image')) {
        return { invalidImage: true };
      }
      return null;
    };
  }
  
}
