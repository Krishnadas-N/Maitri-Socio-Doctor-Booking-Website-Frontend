import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppointmentListResponse } from '../../Models/dashboard.model';

@Component({
  selector: 'app-appoinment-table',
  templateUrl: './appoinment-table.component.html',
  styleUrls: ['./appoinment-table.component.css'],
  standalone:true,
  imports:[CommonModule],
})
export class AppoinmentTableComponent implements OnInit {
  @Input() headers: { text: string, key: string }[] = [];
  @Input() rows: any[] = [];
  @Input() actions: boolean = false;
  @Output() viewAppoinment= new EventEmitter<string>()
  @Input() config: any = {};
  @Output() deleteReview= new EventEmitter<string>()
  constructor() { }

  ngOnInit() {
  }
  viewDetails(id:string){
    this.viewAppoinment.emit(id)
  }
  deleteRow(id: string): void {
    this.deleteReview.emit(id)
  }
  getStatusClass(status: string): string {
    switch (status) {
      case 'Completed':
        return 'status-completed';
      case 'Pending':
        return 'status-pending';
      case 'Cancelled':
        return 'status-cancelled';
      case 'Scheduled':
        return 'status-scheduled';
      case 'Rejected':
        return 'status-rejected';
      default:
        return '';
    }
  }
}
