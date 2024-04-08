import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class SuccessNotificationService {

  constructor(private snackBar: MatSnackBar) { }

  showSuccessNotification(message: string, action: string = 'Close'): void {
    this.snackBar.open(message, action, {
      horizontalPosition: 'end', // Position of the notification horizontally
      verticalPosition: 'top',
      duration: 3000, // Duration in milliseconds
      panelClass: ['success-notification'] // Custom CSS class for styling
    });
  }
}
