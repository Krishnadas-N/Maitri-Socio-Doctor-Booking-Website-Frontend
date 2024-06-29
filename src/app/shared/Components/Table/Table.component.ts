import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'app-Table',
  standalone: true,
  imports: [CommonModule, ConfirmDialogModule, ToastModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [ConfirmationService, MessageService],
})
export class TableComponent implements OnInit {
  @Input() header: string[] = [];
  @Input() rows: any[] = [];
  position: string = 'center';
  @Input() headerMapping: { [key: string]: string } = {};
  @Output() blockStatusChange = new EventEmitter<string>();
  @Output() viewUserInDetail: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    console.log(this.header, this.rows, this.position, this.headerMapping);
  }

  getStatusClass(column: string, value: any): string {
    switch (column) {
      case 'isBlocked':
        return value
          ? 'bg-green-500 text-white rounded-full px-2 py-1'
          : 'bg-red-500 text-white rounded-full px-2 py-1';
      case 'isVerified':
        return value
          ? 'bg-green-500 text-white rounded-full px-2 py-1'
          : 'bg-red-500 text-white rounded-full px-2 py-1';
      default:
        return '';
    }
  }

  toggleBlock(row: any) {
    const isBlocked: string = row.isBlocked ? 'Unblock' : 'Block';
    this.confirmationService.confirm({
      message: `Are you sure you want to ${isBlocked} the User?`,
      header: 'Confirmation',
      icon: 'pi pi-info-circle',
      acceptIcon: 'none',
      rejectIcon: 'none',
      rejectButtonStyleClass: 'p-button-text',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Request submitted',
        });
        this.blockStatusChange.emit(row._id);
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'Process incomplete',
          life: 3000,
        });
      },
      key: 'positionDialog',
    });
  }
  blockUser(row: any) {
    // Your logic to block/unblock the user goes here
    console.log(
      `User ${row.username} ${row.isBlocked ? 'unblocked' : 'blocked'}`
    );
  }
  confirm(): void {
    // Implement the logic for confirmation here
    console.log('Confirmation button clicked');
  }
  viewUser(row: any): void {
    this.viewUserInDetail.emit(row._id);
    console.log('view user clicked', row);
  }
}
