import { Component } from '@angular/core';
import { HeaderComponentComponent } from '../header-component/header-component.component';

@Component({
  selector: 'app-user-main-component',
  standalone: true,
  imports: [HeaderComponentComponent,],
  templateUrl: './user-main-component.component.html',
  styleUrl: './user-main-component.component.css'
})
export class UserMainComponentComponent {

}
