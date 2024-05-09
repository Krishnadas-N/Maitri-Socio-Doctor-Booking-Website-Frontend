import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ErrorNotificationService {

  constructor(private snackBar: MatSnackBar) { }

  showErrorNotification(message: string, action: string = 'Close'): void {
    this.snackBar.open(message, action, {
      duration: 3000, // Duration of the notification in milliseconds
      horizontalPosition: 'end', // Position of the notification horizontally
      verticalPosition: 'top', // Position of the notification vertically
      panelClass: ['error-snackbar'] // Custom class for styling the notification
    });
  }
}
