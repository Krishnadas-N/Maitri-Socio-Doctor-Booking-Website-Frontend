import { Component } from '@angular/core';
import { HeaderComponentComponent } from '../header-component/header-component.component';
import { FooterComponentComponent } from '../footer-component/footer-component.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-main-component',
  standalone: true,
  imports: [HeaderComponentComponent,FooterComponentComponent,RouterOutlet ],
  templateUrl: './user-main-component.component.html',
  styleUrl: './user-main-component.component.css'
})
export class UserMainComponentComponent {

}
