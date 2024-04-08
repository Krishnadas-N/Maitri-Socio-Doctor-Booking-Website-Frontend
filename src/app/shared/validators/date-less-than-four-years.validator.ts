
import { AbstractControl, ValidationErrors } from '@angular/forms';

export function dateLessThanFourYearsValidator(control: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise((resolve) => {
    const currentDate = new Date();
    const selectedDate = new Date(control.value);

    const differenceInMilliseconds = currentDate.getTime() - selectedDate.getTime();
    const differenceInYears = differenceInMilliseconds / (1000 * 3600 * 24 * 365);
    console.log(differenceInMilliseconds,differenceInYears);
    if (differenceInYears >= 4) {
      resolve({ dateTooOld: true }); 
    } else {
      resolve(null); 
    }
  });
}
