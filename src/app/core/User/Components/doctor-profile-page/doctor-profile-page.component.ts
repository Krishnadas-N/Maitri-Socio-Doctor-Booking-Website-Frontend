import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Doctor, Specialization } from '../../../../store/Doctor/doctor.model';
import { DoctorService } from '../../../Doctor/Services/doctor-services/doctor.service'; 
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { Post } from '../../../../store/sharedStore/Feed-Store/post.model';
import { FeedService } from '../../../../shared/Services/feed.service';
import { CommonService } from '../../../../shared/Services/common-services/common.service';
import { Subscription } from 'rxjs';
import { Review } from '../../../../shared/Models/doctor.model';

@Component({
  selector: 'app-doctor-profile-page',
  standalone:true,
  imports:[CommonModule,RouterLink],
  templateUrl: './doctor-profile-page.component.html',
  styleUrls: ['./doctor-profile-page.component.css']
})
export class DoctorProfilePageComponent implements OnInit, OnDestroy {
  doctorPosts: Post[] = [];
  doctorId!: string;
  doctorDetails!: Doctor;
  reviews:Review[]=[];
  activeTab: string = 'home';
  similarProfileDoctors: Partial<Doctor[]> = [];
  currentCountOfSimilarProfileDoctors = 0;
  routeSubscription: Subscription | undefined;
  doctorSubscription: Subscription | undefined;
  postsSubscription: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private doctorService: DoctorService,
    private toastr: ToastrService,
    private feedService: FeedService,
    private commonService: CommonService
  ) { }
  
  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe((params) => {
      console.log("Doctor Profile Page Params", params);
      if (params && params['id']) {
        this.doctorId = params['id'];
        this.findDoctor();
        this.commonService.getReviews( this.doctorId).subscribe({
          next:(res)=>{
            this.reviews =  res.data
            console.log("Reviews",res);
          },
          error:(err)=>{
            console.log(err);
          }
        })
      } else {
        this.router.navigate(['/find-doctors']);
      }
    });
  }

  ngOnDestroy() {
    // Unsubscribe from subscriptions to prevent memory leaks
    this.routeSubscription?.unsubscribe();
    this.doctorSubscription?.unsubscribe();
    this.postsSubscription?.unsubscribe();
  }

  getSimilarProfiles() {
    const specializationId = this.getSpecializationId(this.doctorDetails.specialization);
    this.commonService.getSimilarProfiles(specializationId).subscribe({
      next: (res) => {
        console.log("Similar profiles Data ", res);
        this.similarProfileDoctors = res.data.filter((data: any) => data._id !== this.doctorDetails._id);
      },
      error: (err) => {
        console.log(err);
        // Handle error, perhaps show a toastr message
        this.toastr.error('Failed to fetch similar profiles.');
      }
    });
  }

  findDoctor() {
    this.doctorSubscription = this.doctorService.getDoctorById(this.doctorId).subscribe({
      next: (res) => {
        console.log(res.data);
        this.doctorDetails = res.data.doctor;
        this.getSimilarProfiles();
        this.getDoctorPosts();
      },
      error: (err) => {
        console.error(err);
        this.toastr.error('Failed to fetch doctor details.');
        this.router.navigate(['/find-doctors']);
      }
    });
  }

  getDoctorPosts() {
    if (this.doctorDetails && this.doctorDetails?._id) {
      this.postsSubscription = this.feedService.getPostsOfDoctorById(this.doctorDetails._id).subscribe({
        next: (res) => {
          this.doctorPosts = res.data;
          console.log("this.doctorPosts", this.doctorPosts);
        },
        error: (err) => {
          console.error(err);
          this.toastr.error('Failed to fetch doctor posts.');
        }
      });
    }
  }

  getSpecializationName(specialization: Specialization): string {
    if (typeof specialization === 'object' && specialization !== null) {
      return specialization.name;
    }
    return specialization || 'Not available';
  }

  getSpecializationId(specialization: Specialization): string {
    if (typeof specialization === 'object' && specialization !== null) {
      return specialization._id;
    }
    return '';
  }

  getPreviousDoctor() {
    if (this.currentCountOfSimilarProfileDoctors <= 0) {
      return;
    } else {
      this.currentCountOfSimilarProfileDoctors--;
    }
  }

  getNextDoctor() {
    if (this.currentCountOfSimilarProfileDoctors >= this.similarProfileDoctors.length - 1) {
      return;
    } else {
      this.currentCountOfSimilarProfileDoctors++;
    }
  }

  showSection(section: string): void {
    console.log(this.activeTab,section);
    this.activeTab = section;
    console.log(this.activeTab,section);
  }
}