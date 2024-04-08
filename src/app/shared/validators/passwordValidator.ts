// export const passwordMatchValidator(formGroup: FormGroup) {
//     const password = formGroup.get('password')?.value;
//     const confirmPassword = formGroup.get('confirmPassword')?.value;
  
//     if (password !== confirmPassword) {
//       formGroup.get('confirmPassword')?.setErrors({ mismatch: true });
//     } else {
//       formGroup.get('confirmPassword')?.setErrors(null);
//     }
//   }