import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'app-confimation',
  standalone: true,
  imports: [ConfirmDialogModule, ConfirmDialogModule, ToastModule],
  templateUrl: './confimation.component.html',
  styleUrls: ['./confimation.component.css'],
  providers: [ConfirmationService, MessageService],
})
export class ConfimationDialogComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {}
  confirm() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        // Perform the action here
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'You have accepted',
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'warn',
          summary: 'Rejected',
          detail: 'You have rejected',
        });
      },
    });
  }
}
