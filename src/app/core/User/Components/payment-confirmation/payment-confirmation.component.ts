import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../Services/user.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CheckPlatformService } from '../../../../shared/Services/check-platform-service/checkPlatform.service';
import { ScreenLoaderComponent } from '../../../../shared/Components/screen-loader/screen-loader.component'; 

@Component({
  selector: 'app-payment-confirmation',
  standalone: true,
  imports: [CommonModule, FormsModule, ScreenLoaderComponent],
  templateUrl: './payment-confirmation.component.html',
  styleUrls: ['./payment-confirmation.component.css'],
})
export class PaymentConfirmationComponent implements OnInit {
  appoinmentId!: string;
  appoinmentDetails!: any;
  selectedPaymentMethod: string = '';
  isScreenLoading: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router,
  ) {
    this.route.params.subscribe((param) => {
      console.log('Param', param);
      this.appoinmentId = param['id'];
    });
  }

  ngOnInit() {
    this.isScreenLoading = true;
      console.log('working confrimarion');
      this.getAppoinment();
     
    
  }
  getAppoinment() {
    this.userService.GetAppointmentDetails(this.appoinmentId).subscribe(
      (res: any) => {
        console.log(res);
        this.appoinmentDetails = res.data;
        this.isScreenLoading = false;
      },
      (err) => {
        this.toastr.error(
          err || 'Error while Get Appoinments please try again'
        );
      }
    );
  }
  viewBookings() {
    this.router.navigate(['/profile/appoinments']);
  }
}
