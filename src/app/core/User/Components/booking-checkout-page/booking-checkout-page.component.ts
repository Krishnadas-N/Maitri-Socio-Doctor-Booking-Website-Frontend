import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../../Services/user-service.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WindowRefService } from '../../../../shared/Services/window-ref.service';
@Component({
  selector: 'app-booking-checkout-page',
  standalone:true,
  imports:[CommonModule,FormsModule ],
  templateUrl: './booking-checkout-page.component.html',
  styleUrls: ['./booking-checkout-page.component.css']
})
export class BookingCheckoutPageComponent implements OnInit {
  appoinmentId!:string;
  appoinmentDetails!:any;
  selectedPaymentMethod: string = '';
  constructor(
    private route:ActivatedRoute,
    private userService:UserServiceService,
    private toastr:ToastrService,
    private winRef: WindowRefService,
    private router:Router
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
  }
  getAppoinment(){
    this.userService.GetAppointmentDetails(this.appoinmentId).subscribe(
      (res:any)=>{
        console.log(res);
        this.appoinmentDetails = res.data;
      },
      (err)=>{
        this.toastr.error(err|| 'Error while Get Appoinments please try again');
      }
    )
  }
  makePayment() {
    if (!this.selectedPaymentMethod) {
      this.toastr.warning( "Please select Payment Method");
      console.log('Please select a payment method.');
      return;
    }

    if (this.selectedPaymentMethod !== 'Debit Card' && this.selectedPaymentMethod !== 'PayPal' && this.selectedPaymentMethod !== 'Razorpay') {
      console.log('Invalid payment method selected.');
      this.toastr.warning( "Invalid payment method selected");
      return;
    }
  
    console.log('Selected payment method:', this.selectedPaymentMethod);
    this.userService.makePayment(this.selectedPaymentMethod,this.appoinmentId).subscribe(
      (res)=>{
        console.log(res);
        this.payWithRazorpay(res.data)
      },
      (err)=>{
        this.toastr.error(err)
      }
    )
    // this.http.post('/api/payment', { paymentMethod: this.selectedPaymentMethod }).subscribe(response => {
    //   console.log('Backend response:', response);
    // });
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
      this.userService.verifyPayment(orderId,paymentId,signature,this.appoinmentDetails).subscribe(
        (res)=>{
          console.log("verify payment",res);
          this.router.navigate(['/booking-confirmation/',res.data]);
        },
        (err)=>{
          this.toastr.error(err)
        }
      )
  }
}



// 'Credit Card', 'Debit Card', 'PayPal', 'Stripe','Razorpay

// {
//   "_id": "662a2ab911a27cde7ce5cf18",
//   "patient": "66163617d65f573cdefa9200",
//   "doctor": "66250e4e41436e8f0cd9c3f1",
//   "typeOfAppointment": "video",
//   "date": "2024-04-25T10:01:51.903Z",
//   "slot": "10 AM",
//   "amount": 500,
//   "duration": 60,
//   "status": "Pending",
//   "paymentStatus": "Pending",
//   "createdAt": "2024-04-25T10:04:41.099Z",
//   "updatedAt": "2024-04-25T10:04:41.099Z",
//   "__v": 0,
//   "doctorInfo": [
//       {
//           "_id": "66250e4e41436e8f0cd9c3f1",
//           "firstName": "Rakesh",
//           "lastName": "Kumar",
//           "password": "$2a$10$qLLulffoAV4hdoQBnmI.fuFshfKmW0z23spe27ptvLeatoCwwjMze",
//           "gender": "Male",
//           "dateOfBirth": "2016-04-11T18:30:00.000Z",
//           "email": "rakeshkumar@email.com",
//           "phone": 1234567890,
//           "certifications": [
//               "https://res.cloudinary.com/dpjkuvq1r/image/upload/v1713705732/Maitri-Project/ws4jbzzlc79kgjpvmupb.pdf"
//           ],
//           "languages": [
//               "English",
//               "Malayalam",
//               "Hindi",
//               "Telugu",
//               "Kannada"
//           ],
//           "followers": [],
//           "isVerified": true,
//           "typesOfConsultation": [
//               "video",
//               "chat",
//               "clinic"
//           ],
//           "maxPatientsPerDay": 10,
//           "rating": 0,
//           "isProfileComplete": true,
//           "isBlocked": false,
//           "roles": [
//               "66141503f83ac04df8392561"
//           ],
//           "education": [
//               {
//                   "degree": "MBBS",
//                   "institution": "Medical College Thrissur",
//                   "year": "2015",
//                   "_id": "6625130310775bbfad516fb4"
//               },
//               {
//                   "degree": "Degree",
//                   "institution": "Nss College Ottpaalam",
//                   "year": "2013",
//                   "_id": "6625130310775bbfad516fb5"
//               }
//           ],
//           "consultationFee": [
//               {
//                   "type": "video",
//                   "fee": 500,
//                   "_id": "6625fa913c689baccf578a96"
//               },
//               {
//                   "type": "chat",
//                   "fee": 500,
//                   "_id": "6625fa913c689baccf578a97"
//               },
//               {
//                   "type": "clinic",
//                   "fee": 500,
//                   "_id": "6625fa913c689baccf578a98"
//               }
//           ],
//           "availability": [
//               {
//                   "dayOfWeek": "Saturday",
//                   "startTime": "10:00",
//                   "endTime": "14:00",
//                   "isAvailable": true
//               }
//           ],
//           "createdAt": "2024-04-21T13:02:07.548Z",
//           "updatedAt": "2024-04-24T17:15:59.308Z",
//           "__v": 2,
//           "address": {
//               "city": "THIRUVILWAMALA",
//               "zipcode": 680588,
//               "country": "India"
//           },
//           "experience": "1",
//           "specialization": "660427e945db1184cb2d92b8",
//           "registrationStepsCompleted": 3,
//           "bio": "Dr. Rakesh Kumar is a dedicated physician with 15+ years of experience in internal medicine. Specializing in cardiac care, he combines clinical expertise with compassion to provide personalized treatment. Committed to patient well-being, Dr. Kumar stays updated with the latest medical advancements to deliver optimal healthcare outcomes.",
//           "profilePic": "https://res.cloudinary.com/dpjkuvq1r/image/upload/v1713761708/Maitri-Project/u9ohjkem5zm0vgt47gzo.webp",
//           "selectedSlots": [
//               {
//                   "date": "2024-04-24T17:08:34.026Z",
//                   "slots": [
//                       "6 AM",
//                       "7 AM",
//                       "8 AM",
//                       "9 AM",
//                       "10 AM",
//                       "11 AM",
//                       "12 PM",
//                       "1 PM",
//                       "2 PM"
//                   ],
//                   "_id": "66293cb7c78a7a5df0b1b45d"
//               },
//               {
//                   "date": "2024-04-25T17:15:45.249Z",
//                   "slots": [
//                       "6 AM",
//                       "7 AM",
//                       "8 AM",
//                       "9 AM",
//                       "10 AM",
//                       "11 AM"
//                   ],
//                   "_id": "66293e4fc78a7a5df0b1b580"
//               }
//           ]
//       }
//   ],
//   "doctorSpecialization": [
//       {
//           "_id": "660427e945db1184cb2d92b8",
//           "name": "Psychology",
//           "description": "Study of mind and behavior, including therapy and counseling",
//           "isBlocked": false,
//           "__v": 0
//       }
//   ],
//   "user": [
//       {
//           "_id": "66163617d65f573cdefa9200",
//           "profilePic": "https://res.cloudinary.com/dpjkuvq1r/image/upload/v1713450837/Maitri-Project/dii8rhwkqi4gta3z5whn.webp",
//           "firstName": "Xera",
//           "lastName": "Mon",
//           "username": "sera",
//           "gender": "male",
//           "email": "x@mail.com",
//           "password": "$2a$10$IseMKc5WhSbn/J96rzfF2.KlSO6aFnvMnyp6gDGZ8qPk9KWiAZzay",
//           "isBlocked": false,
//           "role": "0x01",
//           "dateOfBirth": "1999-10-25T00:00:00.000Z",
//           "isVerified": true,
//           "roles": [
//               "6612457293c66989fc111447"
//           ],
//           "createdAt": "2024-04-10T06:47:51.299Z",
//           "updatedAt": "2024-04-19T07:32:51.974Z",
//           "__v": 0,
//           "resetToken": null
//       }
//   ]
// }


// https://medium.com/@yaseen_nadaf/integrate-razorpay-with-angular-1a7080cf8e79
// https://medium.com/@mayur.mathurkar7/integrating-payment-gateways-with-angular-app-831072167855