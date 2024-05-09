import {EventEmitter, Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-notification-popup',
  standalone:true,
  imports:[],
  templateUrl: './notification-popup.component.html',
  styleUrls: ['./notification-popup.component.css']
})
export class NotificationPopupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.title,this.message);
  }
  @Input() title: string = '';
  @Input() message: string = '';
  @Output() closed = new EventEmitter<void>();

  close(): void {
    this.closed.emit();
  }
}
