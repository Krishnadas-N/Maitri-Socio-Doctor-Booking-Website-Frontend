import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { isJWTToken } from '../../validators/isJWTToken';
import { AppState } from '../../../store/GlobalStore/app.state';
import { Store, select } from '@ngrx/store';
import { resendOtpRequest, verifyOTP } from '../../../store/sharedStore/otpStore/otp.action';
import { selectOtpError, selectOtpLoading } from '../../../store/sharedStore/otpStore/otp.selector';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-otp-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.css'
})
export class OtpComponent implements OnInit {
  section!: string;
  digits: string[] = ['', '', '', '', '', ''];
  token!: string | null;
  showResendButton = false;
  secondsRemaining = 60;
  errorMessage!: string;
  isLoading:boolean = false;
  resendLoading: boolean = false;
  timerSubscription: Subscription | undefined

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {

    this.section = this.route.snapshot.data['expectedRole'];

    this.token = this.route.snapshot.queryParamMap.get('authToken');
    if (!this.token || !isJWTToken(this.token)) {
      this.router.navigate(['/Not-found']);
    } else {
      this.startCountdown();
    }

    this.store.pipe(select(selectOtpError)).subscribe(error => {
      if (error) {
        this.errorMessage = error.message;
      }
    });

    this.loadingGetFromStore()
  }

  ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  loadingGetFromStore(isFrom:string='normal'){
    this.store.select(selectOtpLoading).subscribe((isLoading) => {
      this.isLoading = isLoading;
      if(isFrom==='resend' && !isLoading){
        this.resendLoading=false
      }
    });
  }


  startCountdown(): void {
    const currentTime = new Date().getTime();
    const storedTime = localStorage.getItem('countdown_start_time');
    if (storedTime) {
      const elapsedTime = currentTime - parseInt(storedTime, 10);
      const remainingSeconds = Math.max(60 - Math.floor(elapsedTime / 1000), 0);
      this.startTimer(remainingSeconds);
    } else {
      localStorage.setItem('countdown_start_time', currentTime.toString());
      this.startTimer(60);
    }
  }
  startTimer(seconds: number): void {
    this.secondsRemaining = seconds;
    this.timerSubscription = interval(1000).subscribe(() => {
      if (this.secondsRemaining > 0) {
        this.secondsRemaining--;
      } else {
        this.showResendButton = true;
        this.timerSubscription?.unsubscribe();
      }    });
  }

  moveToNext(nextInput: HTMLInputElement): void {
    nextInput.focus();
  }

  onSubmit(): void {
    console.log('The value is: ', this.digits.join(''));
    if (this.digits.join('').length === 6) {
      if (this.section) {
        console.log('The value is: ', this.digits.join(''));
        this.store.dispatch(verifyOTP({ otp: this.digits.join(''), section: this.section }));
      }
    }
  }

  resend(): void {
    console.log('Resend clicked');
    if (this.token) {
      console.log('Resend called');
      this.resendLoading = true;
      this.store.dispatch(resendOtpRequest({ token: this.token }));
      this.loadingGetFromStore('resend')
    } else {
      alert('Please register again');
    }
  }



  timerSeconds!:number;
  timerMintes!:number;
  showOtpTimer:boolean=true;

  otpTimer(seconds:number){
    if(seconds<=0){
      this.timerSeconds = 0;
      this.timerMintes = 0;
      return ;
    }
    this.timerSeconds =0;
    this.timerMintes = Math.floor(seconds/60)
    let reminderSeconds = seconds % 60;
    if(reminderSeconds !== 0) {
      this.timerSeconds =reminderSeconds
    }
    if(this.timerMintes <1){
      this.timerSeconds = seconds
    }
    let interval = setInterval(()=>{
      this.timerSeconds -=1;
      if(this.timerMintes >0 && this.timerSeconds<0){
        this.timerSeconds = 59;
        this.timerMintes-=1;
      }
      if(this.timerSeconds === 0 && this.timerMintes ===0){
        clearInterval(interval)
      }
    })
  }
}
