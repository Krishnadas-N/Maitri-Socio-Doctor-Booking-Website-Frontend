import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
  afterNextRender,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PostComponent } from '../../../../shared/Components/post/post.component';
import {
  Post,
  PostModel,
} from '../../../../store/sharedStore/Feed-Store/post.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/GlobalStore/app.state';
import { TokenService } from '../../../../shared/Services/token-auth-service/Token.service';
import { FeedService } from '../../../../shared/Services/feed.service';
import { Toast, ToastrService } from 'ngx-toastr';
import { UserService } from '../../Services/user.service';
import { CategorizedDoctorsResult } from '../../models/user.models';
import { CommonService } from '../../../../shared/Services/common-services/common.service';

@Component({
  selector: 'app-User-Home',
  standalone: true,
  imports: [CommonModule, RouterLink, PostComponent],
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css'],
})
export class UserHomeComponent implements OnInit {
  posts: PostModel[] = [];
  userType: 'Doctor' | 'User' = 'User';
  CategoriesData: CategorizedDoctorsResult[] = [];
  loading: boolean = true;
  currentDoctorIndex: number[] = [];
  constructor(
    private FeedService: FeedService,
    private store: Store<AppState>,
    private userService: UserService,
    private commonService: CommonService,
    private tokenService: TokenService,
    private router: Router,
    private toastr: ToastrService,
    @Inject(PLATFORM_ID) public platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.tokenService.isAuthenticated()) {
        this.router.navigate([`login`]);
      }
      this.loadDoctorsByCategories();
      this.loadAllPosts();
    }
  }

  initializeDoctorIndices() {
    this.CategoriesData.forEach((_, index) => {
      this.currentDoctorIndex[index] = 0;
    });
  }

  loadDoctorsByCategories() {
    this.userService.getDoctorsByCategory().subscribe({
      next: (res) => {
        console.log('Response', res);
        this.CategoriesData = res.data;
        this.initializeDoctorIndices();
        this.loading = false;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  loadAllPosts() {
    this.FeedService.getAllPosts().subscribe({
      next: (res: any) => {
        this.posts = res.data;
        console.log('post from user home ', this.posts);
      },
      error: (err) => {
        this.toastr.error(err);
      },
    });
  }
  nextDoctor(categoryIndex: number) {
    const category = this.CategoriesData[categoryIndex];
    this.currentDoctorIndex[categoryIndex] =
      (this.currentDoctorIndex[categoryIndex] + 1) % category.doctors.length;
  }

  previousDoctor(categoryIndex: number) {
    const category = this.CategoriesData[categoryIndex];
    this.currentDoctorIndex[categoryIndex] =
      (this.currentDoctorIndex[categoryIndex] - 1 + category.doctors.length) %
      category.doctors.length;
  }
}
