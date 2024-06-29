import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../../../shared/Services/token-auth-service/Token.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-sidebar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css'],
})
export class UserSidebarComponent implements OnInit {
  constructor(private router: Router, private tokenService: TokenService) {}

  ngOnInit() {}

  logout() {
    this.tokenService.logout();
    this.router.navigate(['login']);
  }
  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }
}
