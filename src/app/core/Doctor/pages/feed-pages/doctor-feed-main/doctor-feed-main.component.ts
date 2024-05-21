import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { PostComponent } from '../../../../../shared/Components/post/post.component'; 
import { AddPostComponent } from '../../../../../shared/Components/add-post/add-post.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/GlobalStore/app.state';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ProfileCardComponent } from '../../../../../shared/Components/profile-card/profile-card.component';
import { loadDoctor } from '../../../../../store/Doctor/doctor.action';
import { Doctor } from '../../../../../store/Doctor/doctor.model';
import { GetCurrentdoctor } from '../../../../../store/Doctor/doctor.selectors';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-doctor-feed-main',
  standalone: true,
  imports: [PostComponent,AddPostComponent,CommonModule,ProfileCardComponent,RouterOutlet,RouterLink],
  templateUrl: './doctor-feed-main.component.html',
  styleUrl: './doctor-feed-main.component.css'
})
export class DoctorFeedMainComponent implements OnInit {
  doctorDetail:Doctor | null = null;
 
  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
    this.loadCurrentDoctor();
    this.getDoctor();
    }
  }
  getDoctor(){
    this.store.select(GetCurrentdoctor).subscribe((data)=>{
      this.doctorDetail= data
    });
  }
  loadCurrentDoctor(){
    this.store.dispatch(loadDoctor())
  }


  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }

  constructor(private store:Store<AppState>,
    private router:Router ,
    @Inject(PLATFORM_ID) public platformId :Object
  ){}
}
