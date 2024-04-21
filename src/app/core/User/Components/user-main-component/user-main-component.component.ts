import { Component } from '@angular/core';
import { HeaderComponentComponent } from '../header-component/header-component.component';
import { FooterComponentComponent } from '../footer-component/footer-component.component';
import { RouterOutlet } from '@angular/router';
import { UserSidebarComponent } from '../User-Section/user-sidebar/user-sidebar.component';
import { TokenService } from '../../../../shared/Services/TokenAuthService/Token.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-main-component',
  standalone: true,
  imports: [HeaderComponentComponent,FooterComponentComponent,RouterOutlet ,UserSidebarComponent,CommonModule],
  templateUrl: './user-main-component.component.html',
  styleUrl: './user-main-component.component.css'
})
export class UserMainComponentComponent {
 constructor(private tokenService:TokenService){};
 isAuthenticated(){
  return this.tokenService.isAuthenticated()
 }
}
