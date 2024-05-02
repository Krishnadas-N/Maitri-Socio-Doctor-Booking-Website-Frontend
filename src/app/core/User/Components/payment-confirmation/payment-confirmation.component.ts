import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../../Services/user-service.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CheckPlatformService } from '../../../../shared/Services/checkPlatformService/checkPlatform.service';
import { ScreenLoaderComponent } from '../../../../shared/Components/screen-Loader/screen-Loader.component';

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
    private userService: UserServiceService,
    private toastr: ToastrService,
    private router: Router,
    private platformService: CheckPlatformService
  ) {
    this.isScreenLoading = true;
    this.route.params.subscribe((param) => {
      console.log('Param', param);
      this.appoinmentId = param['id'];
    });
  }

  ngOnInit() {
    if (this.platformService.isBrowser()) {
      console.log('working confrimarion');
      this.getAppoinment();
      this.isScreenLoading = false;
    }
  }
  getAppoinment() {
    this.userService.GetAppointmentDetails(this.appoinmentId).subscribe(
      (res: any) => {
        console.log(res);
        this.appoinmentDetails = res.data;
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
