import { FormGroup, FormControl } from '@angular/forms';

export function markAllFormControlsAsTouched(formGroup: FormGroup | FormControl) {
    if (formGroup instanceof FormGroup) {
        Object.keys(formGroup.controls).forEach(controlName => {
          const control = formGroup.get(controlName);
    
          if (control instanceof FormGroup) {
            markAllFormControlsAsTouched(control);
          } else if (control) { // Null check added here
            control.markAsTouched();
          }
        });
      } else if (formGroup instanceof FormControl && formGroup) { // Null check added here
        formGroup.markAsTouched();
      }
}
