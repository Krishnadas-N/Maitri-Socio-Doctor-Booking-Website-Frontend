import { FormControl, ValidationErrors } from '@angular/forms';

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
}
