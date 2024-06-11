import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../Services/user.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WindowRefService } from '../../../../shared/Services/window-ref.service';
import { NotificationService } from '../../../../shared/Services/notification-service/notification.service';
import { environment } from '../../../../../environments/environment.development';
import { StripeService, StripeCardComponent, NgxStripeModule } from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions,
} from '@stripe/stripe-js';
import { Appointment } from '../../../../shared/Models/appoinment.model';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-booking-checkout-page',
  standalone:true,
  imports:[NgxStripeModule,CommonModule,FormsModule ,MatInputModule ,ReactiveFormsModule,StripeCardComponent],
  templateUrl: './booking-checkout-page.component.html',
  styleUrls: ['./booking-checkout-page.component.css'],
  providers:[StripeService]
})
export class BookingCheckoutPageComponent implements OnInit {
  isCheckBalance:boolean = false
  isLoading:boolean=false;
  appoinmentId!:string;
  walletBalance!:number;
  appoinmentDetails!:Appointment;
  selectedPaymentMethod: string = '';
  @ViewChild(StripeCardComponent) card!: StripeCardComponent;
  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        fontWeight: 400,
        fontFamily: 'Circular',
        fontSize: '14px',
        iconColor: '#666EE8',
        color: '#002333',
        '::placeholder': {
          color: '#919191',
        },
      },
    },
  };
  elementsOptions: StripeElementsOptions = {
    locale: 'en',
    clientSecret:environment.STRIPE_SECRET_KEY
  };

  stripeTest!: FormGroup;
  constructor(
    private route:ActivatedRoute,
    private userService:UserService,
    private toastr:ToastrService,
    private winRef: WindowRefService,
    private router:Router,
    private notificationService:NotificationService,
    private fb: FormBuilder, private stripeService: StripeService
  ) {
    this.route.params.subscribe(
      (param)=>{
        console.log("Param", param);
        this.appoinmentId = param['appoinmentId'];

      }
    )
  }

  ngOnInit() {

    this.getAppoinment();

this.getWalletBalance()
  }
  getAppoinment(){
    this.userService.GetAppointmentDetails(this.appoinmentId).subscribe({
      next:(res:any)=>{
        console.log("AppointmentDetails",res);
        this.appoinmentDetails = res.data;
        this.loadStripePayment()
      },
      error:(err)=>{
        this.toastr.error(err|| 'Error while Get Appoinments please try again');
      }
  })
  }
  makePayment() {
    if (!this.selectedPaymentMethod) {
      this.toastr.warning( "Please select Payment Method");
      console.log('Please select a payment method.');
      return;
    }

    if (this.selectedPaymentMethod !== 'Wallet' && this.selectedPaymentMethod !== 'Debit Card' && this.selectedPaymentMethod !== 'PayPal' && this.selectedPaymentMethod !== 'Razorpay' && this.selectedPaymentMethod !=='Stripe') {
      console.log('Invalid payment method selected.');
      this.toastr.warning( "Invalid payment method selected");
      return;
    }

    console.log('Selected payment method:', this.selectedPaymentMethod);
    this.isLoading=true;
    this.processPayment()
    // this.http.post('/api/payment', { paymentMethod: this.selectedPaymentMethod }).subscribe(response => {
    //   console.log('Backend response:', response);
    // });
  }

  processPayment(stripeToken?: any) {
    this.userService.makePayment(this.selectedPaymentMethod,this.appoinmentId,stripeToken).subscribe({
      next:(res)=>{
        console.log("After Payment",res);
        this.isLoading=false;
        if(this.selectedPaymentMethod==='Stripe'){
          // this.router.navigate(['/booking-confirmation',res.data.appoinmentId]);
          location.href = `/booking-confirmation/${res.data.appointmentId}`;
        }else if(this.selectedPaymentMethod ==='Razorpay'){
          this.payWithRazorpay(res.data)
        }
        else if(this.selectedPaymentMethod ==='Wallet'){
          location.href = `/booking-confirmation/${res.data.appointmentId}`;
          // this.router.navigate(['/booking-confirmation',res.data.appoinmentId]);
        }
        else{
          return
        }

      },
      error:(err)=>{
        this.isLoading=false;
        this.toastr.error(err)
      }
  })
  }

  stripePaymentHandler(){

  }

  payWithRazorpay(data:any): void {
    const options = {
      key: data.keyId,
      amount: data.amount,
      currency: 'INR',
      name: 'Maitri Consultation ',
      description: 'Payment for your service',
      order_id: data.responseId,
      handler: (response: any) =>{
        this.verifyPayment(response.razorpay_order_id,response.razorpay_payment_id,response.razorpay_signature)
      },
      prefill: {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '+919876543210'
      },
      notes: {
        address: 'Razorpay Corporate Office'
      },
      theme: {
        color: '#3399cc'
      }
    };

    const razorpay = new this.winRef.nativeWindow.Razorpay(options);
    razorpay.open();
  }

  verifyPayment(orderId: string, paymentId: string, signature: string){
      this.userService.verifyPayment(orderId,paymentId,signature,this.appoinmentId).subscribe({
        next:(res)=>{

          console.log("verify payment",res);
          const notificationId = res.data.notificationId;
          this.notificationService.sendNotification(notificationId);
          location.href = `/booking-confirmation/${res.data.appointmentId}`;
          // this.router.navigate(['/booking-confirmation',res.data.appoinmentId]);
        },
        error:(err)=>{
          this.toastr.error(err)
        }
  })
  }


  getWalletBalance(){
    this.userService.getWalletBalance().subscribe({
      next:(res)=>{
        this.walletBalance = res.data;
      },
      error:(err)=>{
        this.toastr.error(err)
      }
    })
  }

toggleBalance(){
this.isCheckBalance = !this.isCheckBalance
}
loadStripePayment(){
    this.stripeTest = this.fb.group({
      name: [`${this.appoinmentDetails.user[0].firstName} ${this.appoinmentDetails.user[0].lastName}`, [Validators.required]],
      email: [this.appoinmentDetails.user[0].email, [Validators.required]],
      amount: [this.appoinmentDetails.amount, [Validators.required, Validators.pattern(/\d+/)]],
    });
}
}

