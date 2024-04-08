import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  standalone:true,
  imports: [CommonModule,RouterLink],
  templateUrl: './sidebar-component.component.html',
  styleUrls: ['./sidebar-component.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() backgroundColor: string = '';
  @Input() profileImage: string = '';
  @Input() navItems: { iconClasses: string, backgroundColor: string, tooltip?: string,link?:string }[] = [];
  @Output() itemClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() itemHover: EventEmitter<{ item: any, index: number } | null> = new EventEmitter<{ item: any, index: number } | null>();

  constructor() { }

  ngOnInit() {
  }
  handleItemClick(item: any) {
    this.itemClick.emit(item);
  }
  
  showTooltip(item: any, index: number) {
    this.itemHover.emit({ item, index });
}

    hideTooltip() {
        this.itemHover.emit(null);
    }

}
