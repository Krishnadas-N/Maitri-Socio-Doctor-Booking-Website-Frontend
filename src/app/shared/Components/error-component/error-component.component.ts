import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-error-component',
  standalone: true,
  imports: [],
  templateUrl: './error-component.component.html',
  styleUrl: './error-component.component.css'
})
export class ErrorComponentComponent {
  constructor(public dialogRef: MatDialogRef<ErrorComponentComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
