import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class ToastrPopUpService {
  constructor(private toastr: ToastrService) {}

  showErrorNotification(message: string, title: string): void {

    const errorMessage = `
      <div class="error-toast">
        <i class="fas fa-exclamation-triangle error-icon"></i>
        <div class="error-message">
          <strong>${title}</strong>
          <p>${message}</p>
        </div>
      </div>
    `;

    this.toastr.error(errorMessage, '', {
      positionClass: 'toast-top-right', // Position of the toast message
      tapToDismiss: true, // Allow dismissing the toast on click
      progressBar: true, // Show progress bar
      closeButton: true, // Show close button
      timeOut: 3000, // Duration of the toast message (in milliseconds)
      enableHtml: true, // Allow HTML content
      toastClass: 'ngx-toastr bg-red-500 text-white error-toast', // Custom class for toastr
      titleClass: 'd-none', // Hide title
      messageClass: 'text-white', // Custom class for message
      disableTimeOut: false, // Disable the timeout
      extendedTimeOut: 1000 // Extended timeout in milliseconds
    });
  }
}
