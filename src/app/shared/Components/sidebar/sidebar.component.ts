import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TokenService } from '../../Services/token-auth-service/Token.service';


@Component({
  selector: 'app-sidebar',
  standalone:true,
  imports: [CommonModule,RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input({required:true}) backgroundColor: string = '';
  @Input({required:true}) profileImage: string = '';
  @Input({required:true}) navItems: { iconClasses: string, backgroundColor: string, tooltip?: string,link?:string }[] = [];
  @Output() itemClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() itemHover: EventEmitter<{ item: any, index: number } | null> = new EventEmitter<{ item: any, index: number } | null>();

  constructor(private TokenService:TokenService,private router:Router) { }

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
    logout(){
      this.TokenService.logout();
      location.href = `${this.navItems[0].link}/login`;
      // this.router.navigate([`${this.navItems[0].link}/login`]);
    }
}
