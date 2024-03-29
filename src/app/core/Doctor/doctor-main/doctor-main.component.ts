import { Component } from '@angular/core';
import { HeaderComponentComponent } from '../Components/header-component/header-component.component';
import { FooterComponentComponent } from '../Components/footer-component/footer-component.component';
import { DoctorLoginComponent } from '../Components/doctor-login/doctor-login.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-doctor-main',
  standalone: true,
  imports: [HeaderComponentComponent,FooterComponentComponent,DoctorLoginComponent,RouterOutlet,],
  templateUrl: './doctor-main.component.html',
  styleUrl: './doctor-main.component.css'
})
export class DoctorMainComponent {

}
